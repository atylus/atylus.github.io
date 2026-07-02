import Counter from "@/components/common/Counter";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function FunFactSec() {
  return (
    <section className="fun-fact-sec v2 ibt-section-gapTop">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>achievements</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Notable accomplishments and key milestone
          </TitleSplitWrapper>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="fun-fact-content black">
              <div className="counter-box">
                <span className="counter-text">$</span>
                <Counter max={75} />
                <span className="counter-text">million</span>
              </div>
              <span className="title">Revenue Growth</span>
              <p>
                Generated over $50 million in additional revenue for our clients
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fun-fact-content">
              <div className="counter-box">
                <Counter max={97} extraClass="percent-counter" />
                <span className="counter-text">%</span>
              </div>
              <span className="title">Client Satisfaction</span>
              <p>
                97% client satisfaction rate across all marketing campaigns.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fun-fact-content">
              <div className="counter-box">
                <Counter max={2000} extraClass="percent-counter2" />
                <span className="counter-text">+</span>
              </div>
              <span className="title">Conversion Rate</span>
              <p>
                Successfully managed and executed 2,000+ marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
