import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

type ProjectItem = {
  id: string;
  eyebrow: string;
  title: string;
  href: string;
  buttonLabel: string;
};

type ProjectProps = {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  items: [ProjectItem, ProjectItem, ProjectItem, ProjectItem] | ProjectItem[];
};

export default function Project({
  eyebrow,
  title,
  ctaLabel,
  ctaHref,
  items,
}: ProjectProps) {
  return (
    <section className="project-sec2">
      <div className="title-area">
        <div className="container">
          <div className="row end">
            <div className="col-xl-10 col-lg-9">
              <div className="sec-title white mb-0">
                <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  {title}
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3">
              <div className="sec-btn-box">
                <Link
                  href={ctaHref}
                  title=""
                  className="ibt-btn ibt-btn-outline"
                >
                  <span>{ctaLabel}</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="project-info2">
          <div className="project-block2">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project2-1.png"
              width={1790}
              height={320}
            />
            <div className="project-content2">
              <SubTitleWrapper>{items[0].eyebrow}</SubTitleWrapper>
              <h4 className="title">
                <Link href={items[0].href} title="">
                  {items[0].title}
                </Link>
              </h4>
              <Link href={items[0].href} title="" className="ser-btn3">
                {items[0].buttonLabel}
              </Link>
            </div>
          </div>
          <div className="project-block2">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project2-4.png"
              width={1790}
              height={320}
            />
            <div className="project-content2">
              <SubTitleWrapper>{items[1].eyebrow}</SubTitleWrapper>
              <h4 className="title">
                <Link href={items[1].href} title="">
                  {items[1].title}
                </Link>
              </h4>
              <Link href={items[1].href} title="" className="ser-btn3">
                {items[1].buttonLabel}
              </Link>
            </div>
          </div>
          <div className="project-block2">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project2-3.png"
              width={1790}
              height={320}
            />
            <div className="project-content2">
              <SubTitleWrapper>{items[2].eyebrow}</SubTitleWrapper>
              <h4 className="title">
                <Link href={items[2].href} title="">
                  {items[2].title}
                </Link>
              </h4>
              <Link href={items[2].href} title="" className="ser-btn3">
                {items[2].buttonLabel}
              </Link>
            </div>
          </div>
          <div className="project-block2 mb-0">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project2-4.png"
              width={1790}
              height={320}
            />
            <div className="project-content2">
              <SubTitleWrapper>{items[3].eyebrow}</SubTitleWrapper>
              <h4 className="title">
                <Link href={items[3].href} title="">
                  {items[3].title}
                </Link>
              </h4>
              <Link href={items[3].href} title="" className="ser-btn3">
                {items[3].buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
