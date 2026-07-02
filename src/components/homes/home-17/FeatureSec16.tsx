import Image from "next/image";

export default function FeatureSec16() {
  return (
    <section className="feature-sec16">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="feature-block16">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/feature/fea16-1.png"
                width={60}
                height={46}
              />
              <h4 className="title">Start your project right</h4>
              <p>
                Pacific hake false trevally queen parrotfish moss prickleback
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-block16">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/feature/fea16-2.png"
                width={44}
                height={52}
              />
              <h4 className="title">All in one application</h4>
              <p>Pacific hake false trevally queen parrotfish black prickle</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-block16">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/feature/fea16-3.png"
                width={61}
                height={50}
              />
              <h4 className="title">Business Consultation</h4>
              <p>Queen parrotfish black prickle back moss</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
