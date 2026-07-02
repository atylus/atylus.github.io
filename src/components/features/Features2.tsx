import Link from "next/link";
import Image from "next/image";

import { featureItems10 } from "@/data/features";

export default function Features2() {
  return (
    <>
      {featureItems10.map((item) => (
        <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
          {item.href ? (
            <Link
              href={item.href}
              className="feature-card10 feature-card10--interactive"
              aria-label={`${item.title} sayfasina git`}
            >
              <span className="feature-card10__hover-indicator" aria-hidden="true">
                <i className="icon-arrow-top" />
              </span>
              <Image
                alt="AI Agency & Technology HTML Template"
                src={item.iconSrc}
                width={item.iconWidth}
                height={item.iconHeight}
                className="image-auto"
              />
              <h4 className="title">{item.title}</h4>
              <p>{item.description}</p>
            </Link>
          ) : (
            <div className="feature-card10">
              <Image
                alt="AI Agency & Technology HTML Template"
                src={item.iconSrc}
                width={item.iconWidth}
                height={item.iconHeight}
                className="image-auto"
              />
              <h4 className="title">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
