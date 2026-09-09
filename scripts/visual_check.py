from pathlib import Path
from playwright.sync_api import expect, sync_playwright


ROOT = Path(__file__).resolve().parents[1]
ARTIFACTS = ROOT / "artifacts"
ARTIFACTS.mkdir(exist_ok=True)


def inspect_viewport(browser, name: str, width: int, height: int):
    page = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
    errors = []
    page.on("console", lambda msg: errors.append(f"console:{msg.type}:{msg.text}") if msg.type == "error" else None)
    page.on("pageerror", lambda exc: errors.append(f"pageerror:{exc}"))
    page.goto("http://localhost:3000", wait_until="networkidle")
    page.wait_for_timeout(1100)

    metrics = page.evaluate(
        """() => ({
          width: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          height: document.documentElement.scrollHeight,
          images: [...document.images].map(img => ({
            alt: img.alt,
            complete: img.complete,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight
          }))
        })"""
    )

    assert metrics["scrollWidth"] <= metrics["width"] + 1, (name, metrics)
    page.screenshot(path=str(ARTIFACTS / f"redesign-{name}-top.png"), full_page=False)

    for position in range(0, metrics["height"], max(260, height // 2)):
        page.evaluate("y => window.scrollTo(0, y)", position)
        page.wait_for_timeout(620)
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(700)
    loaded_images = page.evaluate(
        """() => [...document.images].map(img => ({
          alt: img.alt,
          complete: img.complete,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight
        }))"""
    )
    broken = [img for img in loaded_images if not img["complete"] or img["naturalWidth"] == 0]
    assert not broken, (name, broken)
    page.screenshot(path=str(ARTIFACTS / f"redesign-{name}-full.png"), full_page=True)

    if width < 900:
        page.get_by_role("button", name="Buka menu").click()
        assert page.get_by_role("navigation", name="Navigasi mobile").is_visible()
        page.get_by_role("button", name="Tutup menu").click()

    expect(page.get_by_role("heading", name="Pilih Kendaraan Sesuai Perjalanan Anda")).to_be_visible()
    assert page.locator(".fleet-card").count() == 7
    assert page.get_by_text("Rp350.000", exact=True).first.is_visible()
    assert page.get_by_text("Rp1.000.000", exact=True).is_visible()
    assert page.locator(".quick-booking-panel").is_visible()
    assert page.locator(".trust-strip").is_visible()

    page.evaluate("window.scrollTo(0, 700)")
    page.wait_for_timeout(450)
    if width <= 640:
        assert page.locator(".mobile-whatsapp").is_visible()

    assert not errors, (name, errors)
    print(f"{name}: ok, page={metrics['height']}px, images={len(metrics['images'])}")
    page.close()


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    inspect_viewport(browser, "desktop", 1440, 900)
    inspect_viewport(browser, "tablet", 1024, 768)
    inspect_viewport(browser, "mobile", 390, 844)
    browser.close()
