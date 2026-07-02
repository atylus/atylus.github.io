import Link from "next/link";
import Image from "next/image";
import BlogSearchForm from "@/components/blog/BlogSearchForm";
import Pagination from "@/components/common/Pagination";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { blogClassicPosts, blogRecentPosts } from "@/data/blog";
import { getPageMetadata } from "@/data/pages";

export const metadata = getPageMetadata("blog2");

export default function Page() {
  return (
    <>
      <>
        {/* page-banner9 */}
        <section className="page-banner9">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Articles</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Blog Classic /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link href={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Blog Classic</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        {/* blog-sec4 */}
        <section className="blog-sec4 ibt-section-gap">
          <button className="sidebar-toggle" />
          {/* Overlay */}
          <div className="sidebar-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="blog-info4">
                  {blogClassicPosts.map((post) => (
                    <div key={post.id} className="blog-card4">
                      {post.hasImage && post.imageSrc ? (
                        <div className="blog-img4">
                          <Link href={`/blog-single`}>
                            <Image
                              alt="AI Agency & Technology HTML Template"
                              src={post.imageSrc}
                              width={post.imageWidth}
                              height={post.imageHeight}
                            />
                          </Link>
                          <span className="blog-meta4">{post.meta}</span>
                        </div>
                      ) : (
                        <div className="blog-content4">
                          <span className="date">{post.meta}</span>
                          <h4 className="title">
                            <Link href={`/blog-single`} title="">
                              {post.title}
                            </Link>
                          </h4>
                          <p>{post.excerpt}</p>
                          <span>{post.categoriesLabel}</span>
                        </div>
                      )}
                      {post.hasImage && (
                        <div className="blog-content4">
                          <h4 className="title">
                            <Link href={`/blog-single`} title="">
                              {post.title}
                            </Link>
                          </h4>
                          <p>{post.excerpt}</p>
                          <span>{post.categoriesLabel}</span>
                        </div>
                      )}
                    </div>
                  ))}
                  <blockquote className="mt-0">
                    <div className="quote-box">
                      <Image
                        alt="AI Agency & Technology HTML Template"
                        src="/assets/images/icon/comas2.svg"
                        width={52}
                        height={39}
                      />
                      <h4 className="title">
                        Artificial Intelligence refers to the development of
                        computer systems that can perform tasks that would
                        typically require human intelligence. It involves the
                        creation of algorithms and models that enable machines
                        to learn, reason, perceive.
                      </h4>
                      <SubTitleWrapper>Adam Peterson</SubTitleWrapper>
                    </div>
                  </blockquote>
                  <Pagination
                    totalPages={3}
                    currentPage={1}
                    basePath="/blog2"
                    ulClassName="pagination v2"
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="side-bar2">
                  <button className="sidebar-close" />
                  <div className="form-widget side-widget2 mb-0">
                    <BlogSearchForm />
                  </div>
                  <div className="ser-widget side-widget2">
                    <Link href={`/service-single`} title="">
                      Network Integration
                    </Link>
                    <Link href={`/service-single`} title="">
                      Deep learning solutions
                    </Link>
                    <Link href={`/service-single`} title="">
                      Transfer learning
                    </Link>
                    <Link href={`/service-single`} title="">
                      Model evaluation
                    </Link>
                    <Link href={`/service-single`} title="">
                      Real-time prediction
                    </Link>
                  </div>
                  <div className="post-widget side-widget2">
                    <h4 className="side-bar-title">Recent posts</h4>
                    {blogRecentPosts.map((post, index) => (
                      <div
                        key={post.id}
                        className={`recent-post${index === blogRecentPosts.length - 1 ? " mb-0" : ""}`}
                      >
                        <a href="/blog-single">
                          <Image
                            alt={post.title}
                            src={post.imageSrc}
                            width={75}
                            height={70}
                          />
                        </a>
                        <SubTitleWrapper>{post.date}</SubTitleWrapper>
                        <h4 className="title">
                          <a href="/blog-single" title="">
                            {post.title}
                          </a>
                        </h4>
                      </div>
                    ))}
                  </div>
                  <div className="archive-widget side-widget2">
                    <h4 className="side-bar-title">Archive</h4>
                    <a href="#" title="">
                      August 2022
                    </a>
                    <a href="#" title="">
                      July 2022
                    </a>
                    <a href="#" title="">
                      February 2022
                    </a>
                    <a href="#" title="">
                      January 2022
                    </a>
                  </div>
                  <div className="tag-list-widget side-widget2">
                    <h4 className="side-bar-title">Tags</h4>
                    <ul className="tag-list">
                      <li>
                        <a href="#" title="">
                          / Neural /
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          / Chat GPT /
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          / AI /
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          / Robot /
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          / Programing /
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          / Neuro /
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="strategy-widget side-widget">
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/event/shades.png"
                      width={304}
                      height={385}
                    />
                    <div className="strategy-content">
                      <h4 className="title">AI Strategy and Consulting</h4>
                      <p>
                        Provide expert guidance on developing an AI strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End blog-sec4 */}
      </>
    </>
  );
}
