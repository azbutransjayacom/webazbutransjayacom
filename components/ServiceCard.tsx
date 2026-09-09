import Image from "next/image";
import { CircleCheck } from "lucide-react";
import type { ServiceItem } from "@/lib/data";

export function ServiceCard({ title, description, icon: Icon, image, imageAlt, points }: ServiceItem) {
  return (
    <article className="service-item">
      <div className="service-image-wrap">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 767px) 100vw, 34vw" className="service-image" />
      </div>
      <div className="service-content">
        <div className="service-title-row">
          <Icon size={30} strokeWidth={1.7} aria-hidden="true" />
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        <ul>
          {points.map((point) => <li key={point}><CircleCheck size={14} />{point}</li>)}
        </ul>
      </div>
    </article>
  );
}
