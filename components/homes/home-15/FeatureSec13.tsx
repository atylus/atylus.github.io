import Image from "next/image";

export default function FeatureSec13() {
  return (
    <section className="feature-sec13">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="feature-block13">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/feature/feature13-1.png"
                width={75}
                height={74}
              />
              <h4 className="title">Foundation Models</h4>
              <p>
                Pacific hake false trevally queen parrotfish black prickleback
                moss revally queen parrotfish black
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-block13">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/feature/feature13-2.png"
                width={75}
                height={75}
              />
              <h4 className="title">Enterprise Data</h4>
              <p>
                Queen parrotfish black prickleback moss pacific hake false
                trevally queen parrotfish black prickleback moss
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-block13">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/feature/feature13-3.png"
                width={79}
                height={79}
              />
              <h4 className="title">Fine-Tuning and RLHF</h4>
              <p>
                Triggerfish bluntnose knifefish upside-down catfish kfish
                convict cichlid cat shark saw shark trout cod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
