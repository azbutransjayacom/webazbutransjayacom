import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`button-link button-${variant} ${className}`}
    >
      {Icon ? <Icon size={18} strokeWidth={2} aria-hidden="true" /> : null}
      <span>{children}</span>
    </a>
  );
}
