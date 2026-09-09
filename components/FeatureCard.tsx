import type { IconItem } from "@/lib/data";

export function FeatureCard({ title, description, icon: Icon }: IconItem) {
  return (
    <article className="benefit-item">
      <Icon size={34} strokeWidth={1.7} aria-hidden="true" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
