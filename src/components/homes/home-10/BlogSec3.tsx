import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { blogStyle3Posts } from "@/data/blog";

export default function BlogSec3() {
  return (
    <section className="blog-sec3 ibt-section-gap">
      <div className="container">
        <div className="title-area">
          <div className="row end mb-0">
            <div className="col-lg-9">
              <div className="sec-title mb-0">
                <SubTitleWrapper>case study</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Experience the power of transformative AI solutions driving
                  real-world innovation and efficiency.
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sec-btn-box">
                <Link href="/blog" title="" className="ibt-btn ibt-btn-outline">
                  <span>More cases</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogStyle3Posts.map((post) => (
            <div key={post.id} className="col-lg-6">
              <div className="blog-card3">
                <div className="blog-img3">
                  <Link href="/blog-single">
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src={post.imageSrc}
                      width={post.imageWidth}
                      height={post.imageHeight}
                    />
                  </Link>
                  <div className="date">
                    <span>{post.dateMonth}</span>
                    <h6 className="title">{post.dateDay}</h6>
                  </div>
                </div>
                <div className="blog-content3">
                  <ul className="blog-meta3">
                    {post.tagLabels.map((label, i) => (
                      <li key={i}>
                        <a href="#" title="">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <h4 className="title">
                    <Link href="/blog-single" title="">
                      {post.title}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
