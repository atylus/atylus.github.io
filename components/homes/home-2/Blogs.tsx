import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { blogStyle2Posts } from "@/data/blog";

export default function Blogs() {
  return (
    <section className="blog-sec2 ibt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="blog-image2">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/layers/layer4.png"
                width={537}
                height={844}
              />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="blog-info2">
              <div className="title-area">
                <div className="row end">
                  <div className="col-lg-8 col-md-7">
                    <div className="sec-title mb-0">
                      <SubTitleWrapper>blog</SubTitleWrapper>
                      <TitleSplitWrapper
                        tag="h2"
                        className="title animated-heading"
                      >
                        Exploring the world of artificial intelligence with
                        Atylus blogging
                      </TitleSplitWrapper>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5">
                    <div className="sec-btn-box">
                      <Link
                        href="/blog"
                        title=""
                        className="ibt-btn ibt-btn-outline"
                      >
                        <span>More articles</span>
                        <i className="icon-arrow-top" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-post">
                {blogStyle2Posts.map((post) => (
                  <div
                    key={post.id}
                    className={post.cardClassName ?? "blog-card2"}
                  >
                    <div className="blog-img2">
                      <Link href="/blog-single">
                        <Image
                          alt="AI Agency & Technology HTML Template"
                          src={post.imageSrc}
                          width={post.imageWidth}
                          height={post.imageHeight}
                        />
                      </Link>
                    </div>
                    <div className="blog-content2">
                      <div className="blog-meta2">
                        <span className="sub-title">{post.meta}</span>
                        <div className="blog-text2">
                          {post.tagLabels.map((label, i) => (
                            <a key={i} href="#" title="">
                              {label}
                            </a>
                          ))}
                        </div>
                      </div>
                      <h4 className="title">
                        <Link href="/blog-single">{post.title}</Link>
                      </h4>
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
