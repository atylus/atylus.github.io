import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { home15Blogs } from "@/data/blog";
import Link from "next/link";

export default function Blogs() {
  return (
    <section className="blog-sec5 ibt-section-gap">
      <div className="container">
        <div className="title-area">
          <div className="row end">
            <div className="col-xl-5 col-lg-6 col-sm-7">
              <div className="sec-title mb-0 white">
                <SubTitleWrapper>blog</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Useful articles from our company
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-sm-5">
              <div className="sec-btn-box">
                <a href="#" className="ibt-btn ibt-btn-outline-2">
                  <span>Get started</span>
                  <i className="icon-arrow-top" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-xl-10 col-lg-12">
            <div className="blog-info5">
              {home15Blogs.map((blog) => (
                <div className="blog-item5" key={`${blog.date}-${blog.title}`}>
                  <div className="blog-meta5">
                    <h4 className="date">{blog.date}</h4>
                    <span className="month">{blog.month}</span>
                  </div>
                  <div className="post-labels">
                    <a href="#" title="" className="name">
                      {blog.author}
                    </a>
                    <a href="#" className="designation">
                      / {blog.category}/
                    </a>
                  </div>
                  <div className="blog-content5">
                    <h4 className="title">
                      <Link href="/blog-single">{blog.title}</Link>
                    </h4>
                    <a href="#" title="" className="blog-btn5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
