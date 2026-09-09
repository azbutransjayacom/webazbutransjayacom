import { ArrowRight } from "lucide-react";
import type { IconItem } from "@/lib/data";

export function BookingStep({
  title,
  description,
  icon: Icon,
  index,
  isLast,
}: IconItem & { index: number; isLast: boolean }) {
  return (
    <article className="booking-step">
      <div className="booking-step-icon-wrap">
        <Icon size={32} strokeWidth={1.7} aria-hidden="true" />
        <span className="booking-step-badge">{index + 1}</span>
      </div>
      <div className="booking-step-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
