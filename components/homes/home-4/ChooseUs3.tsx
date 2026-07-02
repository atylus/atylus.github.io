import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function ChooseUs3() {
  return (
    <section className="choose-us-sec3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="choose-img3">
              <div className="sec-title white">
                <SubTitleWrapper>what we do</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Embrace the power of artificial intelligence today
                </TitleSplitWrapper>
              </div>
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/event/choose3-1.png"
                width={1884}
                height={1059}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-content3">
              <p>
                Triggerfish bluntnose knifefish upside-down catfish kfish
                convict cichlid cat shark saw shark trout cod.
              </p>
              <p>
                Pacific hake false trevally queen parrotfish black prickleback
                moss revally queen parrotfish moss. Queen parrotfish black
                prickleback moss pacific hake false trevally queen parrotfish
                black prickleback moss revally
              </p>
              <p className="mb-0">
                This tool helps you find the right keywords to target for your
                content. By using the Google Keyword Planner, you can see how
                often people
              </p>
              <div className="choose-list-box">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <ul className="choose-list">
                      <li>
                        <i className="fa fa-check" />
                        Fine-tuning models
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        Embedding models
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        InstructGPT
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <ul className="choose-list">
                      <li>
                        <i className="fa fa-check" />
                        Artificial intelligence
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        Chat bots
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        MidJourney
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  href={`/service`}
                  title=""
                  className="ibt-btn ibt-btn-outline"
                >
                  <span>Explore More</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
