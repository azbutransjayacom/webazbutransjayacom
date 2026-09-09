from collections import deque
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "public" / "images"

TARGETS = [
    ("innova-hero.png", "innova-cut.png", 30),
    ("xl7.jpg", "xl7-cut.png", 78),
    ("hiace.png", "hiace-cut.png", 84),
    ("avanza.jpg", "avanza-cut.png", 82),
]


def similar(pixel, bg, tolerance):
    return sum((int(pixel[i]) - int(bg[i])) ** 2 for i in range(3)) ** 0.5 <= tolerance


def remove_bg(source, target, tolerance, bright_floor=220):
    image = Image.open(source).convert("RGBA")
    width, height = image.size
    pixels = image.load()
    corners = [pixels[0, 0], pixels[width - 1, 0], pixels[0, height - 1], pixels[width - 1, height - 1]]
    bg = tuple(sum(c[i] for c in corners) // 4 for i in range(4))
    visited = bytearray(width * height)
    queue = deque()

    def push(x, y):
        idx = y * width + x
        if not visited[idx]:
            visited[idx] = 1
            queue.append((x, y))

    for x in range(width):
        push(x, 0)
        push(x, height - 1)
    for y in range(height):
        push(0, y)
        push(width - 1, y)

    while queue:
        x, y = queue.popleft()
        pixel = pixels[x, y]
        bright = min(pixel[:3]) > bright_floor
        if similar(pixel, bg, tolerance) and bright:
            pixels[x, y] = (pixel[0], pixel[1], pixel[2], 0)
            for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                if 0 <= nx < width and 0 <= ny < height:
                    push(nx, ny)

    image.save(target)


for src, dst, tolerance in TARGETS:
    remove_bg(IMG / src, IMG / dst, tolerance)
    print(f"wrote {dst}")
