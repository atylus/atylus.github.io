import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function AboutUsSec2() {
  return (
    <section className="about-us-sec10 ibt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content10">
              <div className="sec-title white">
                <SubTitleWrapper>about</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Our mission is to accelerate the development of AI
                  applications
                </TitleSplitWrapper>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-info10">
              <p>
                Triggerfish bluntnose knifefish upside-down catfish kfish
                convict cichlid cat shark saw shark trout cod.
              </p>
              <p>
                Pacific hake false trevally queen parrotfish black prickleback
                moss revally queen parrotfish black prickleback moss. Queen
                parrotfish black prickleback moss pacific hake false trevally
                queen parrotfish black prickleback moss revally
              </p>
              <p>
                Mummichog paradise fish! Triggerfish bango guppy opah sunfish
                bluntnose knifefish upside-down catfish cobia spookfish convict
                cichlid.
              </p>
              <a href="#" className="ibt-btn ibt-btn-outline-2">
                <span>Explore more</span>
                <i className="icon-arrow-top" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
