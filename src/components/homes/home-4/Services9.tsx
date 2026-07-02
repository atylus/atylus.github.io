import Link from "next/link";
import Image from "next/image";

export default function Services9() {
  return (
    <section className="service-sec9">
      <div className="container2">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="ser-card9">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser9-1.png"
                width={613}
                height={637}
              />
              <div className="ser-content9">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser-icon.svg"
                  width={26}
                  height={27}
                />
                <h4 className="title">Intelligent Conversations</h4>
                <p>
                  Unlock the future of communication with advanced AI-powered
                  conversational systems
                </p>
                <Link
                  href={`/index5`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="ser-btn3"
                >
                  Explore more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ser-card9">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser9-2.png"
                width={613}
                height={637}
              />
              <div className="ser-content9 v2">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser-ico2.svg"
                  width={24}
                  height={24}
                />
                <h4 className="title">Intelligent Conversations</h4>
                <p>
                  Unlock the future of communication with advanced AI-powered
                  conversational systems
                </p>
                <Link
                  href={`/index4`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="ser-btn3"
                >
                  Explore more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ser-card9">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser9-3.png"
                width={617}
                height={639}
              />
              <div className="ser-content9">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser-ico3.svg"
                  width={24}
                  height={24}
                />
                <h4 className="title">Intelligent Conversations</h4>
                <p>
                  Unlock the future of communication with advanced AI-powered
                  conversational systems
                </p>
                <Link
                  href={`/index4`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="ser-btn3"
                >
                  Explore more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
