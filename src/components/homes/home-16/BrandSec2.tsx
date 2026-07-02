import Image from "next/image";

export default function BrandSec2() {
  return (
    <section className="brand-sec2">
      <h2 style={{ display: "none" }}>brand Section</h2>
      <div className="container">
        <div className="brand-info2">
          <div className="brand-img2">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/brand/brand2-1.png"
              width={170}
              height={53}
            />
          </div>
          <div className="brand-img2">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/brand/brand2-2.png"
              width={162}
              height={60}
            />
          </div>
          <div className="brand-img2">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/brand/brand2-3.png"
              width={131}
              height={72}
            />
          </div>
          <div className="brand-img2">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/brand/brand2-4.png"
              width={183}
              height={44}
            />
          </div>
          <div className="brand-img2">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/brand/brand2-5.png"
              width={180}
              height={53}
            />
          </div>
          <div className="brand-img2">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/brand/brand2-6.png"
              width={104}
              height={92}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
