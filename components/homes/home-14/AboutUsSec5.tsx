import Link from "next/link";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";

export default function AboutUsSec5() {
  return (
    <section className="about-us-sec5 ibt-section-gap">
      <div className="container">
        <div className="sec-title">
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Atylus, a marketing firm based in New York, helps businesses grow and
            succeed with customized solutions
          </TitleSplitWrapper>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="about-title5">
              <span className="sub-title">/ about /</span>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="about-content5">
              <p>
                <span>
                  At our creative agency, we specialize in bringing bold ideas
                  to life. We believe that creativity is the key to connecting
                  brands with their audiences in meaningful ways.
                </span>
                Our team of talented designers, strategists, and storytellers
                work collaboratively to craft unique campaigns that resonate and
                inspire. Whether it&apos;s branding, digital marketing, or
                content creation, we approach every project with fresh
                perspectives and a passion for innovation. We don&apos;t just
                follow trends; we set them, ensuring that our clients stand out
                in a crowded marketplace. Let us help you tell your story and
                make a lasting impact.
              </p>
              <Link
                href={`/index14`}
                title=""
                className="ibt-btn ibt-btn-outline"
              >
                <span>More languages</span>
                <i className="icon-arrow-top" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
