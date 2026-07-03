import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import Features2 from "@/components/features/Features2";
import type { FeatureItem10 } from "@/types/features";

type FeaturesProps = {
  eyebrow: string;
  title: string;
  items: FeatureItem10[];
};

export default function Features({ eyebrow, title, items }: FeaturesProps) {
  return (
    <section className="feature-sec1 ibt-section-gap">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            {title}
          </TitleSplitWrapper>
        </div>
        <div className="row">
          <Features2 items={items} />
        </div>
      </div>
    </section>
  );
}
