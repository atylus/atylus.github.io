import Image from "next/image";
import Link from "next/link";

import BlogCommentForm from "@/components/blog/BlogCommentForm";
import BlogSearchForm from "@/components/blog/BlogSearchForm";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { blogRecentPosts } from "@/data/blog";
import { getPageMetadata } from "@/data/pages";

export const metadata = getPageMetadata("blog-single");

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
              <h1 className="title">Is Artificial Intelligence accessible</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link href={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Is Artificial Intelligence accessible</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        {/* blog-sec4 */}
        <section className="blog-single ibt-section-gap">
          <button className="sidebar-toggle" />
          {/* Overlay */}
          <div className="sidebar-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="blog-single-content">
                  <div className="blog-img4">
                    <Link href={`/blog-single`}>
                      <Image
                        alt="AI Agency & Technology HTML Template"
                        src="/assets/images/blog/blog5-1.png"
                        width={996}
                        height={474}
                      />
                    </Link>
                    <span className="blog-meta4">
                      24 AUG. 2024 / Ann Miller
                    </span>
                  </div>
                  <p className="paragraph">
                    In today&apos;s fast-paced and data-driven world, businesses
                    are constantly seeking innovative ways to gain a competitive
                    edge, make smarter decisions, and deliver exceptional
                    customer experiences. One technology that is transforming
                    industries across the globe is neural networks. Harnessing
                    the power of artificial intelligence, neural networks have
                    the ability to analyze vast amounts of data, identify
                    complex patterns, and make accurate predictions, enabling
                    businesses to unlock new opportunities and drive growth.
                  </p>
                  <p>
                    At our company, we specialize in providing comprehensive
                    neural network services that can revolutionize your
                    business. Whether you&apos;re looking to enhance your data
                    analysis capabilities, automate repetitive tasks, improve
                    customer engagement, or optimize operational processes, our
                    team of experts is here to help you leverage the full
                    potential of neural networks.
                  </p>
                  <p>
                    Data lies at the heart of neural networks, and our services
                    start with understanding your unique data landscape. We work
                    closely with you to identify and collect relevant data
                    sources, ensuring that your neural network models are built
                    on a solid foundation. Our data scientists employ
                    cutting-edge techniques to preprocess and clean the data,
                    making it ready for training the neural network models.
                  </p>
                  <blockquote>
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
                  <p>
                    The development of neural networks is a specialized task
                    that requires expertise and experience. Our team of skilled
                    professionals excels in designing and implementing neural
                    network architectures tailored to your specific business
                    needs. From traditional feedforward networks to advanced
                    convolutional and recurrent networks, we have the knowledge
                    and skills to build models that deliver superior performance
                    and accuracy.
                  </p>
                  <div className="post-meta2">
                    <h4 className="name">
                      By <a href="#">Tim Taylor</a>
                    </h4>
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
                    </ul>
                    <ul className="social-icon">
                      <li>
                        <a href="#" title="">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-box">
                    <h4 className="title2">Comments</h4>
                    <div className="comment-block">
                      <Image
                        alt="AI Agency & Technology HTML Template"
                        src="/assets/images/team/team2-3.png"
                        width={119}
                        height={122}
                      />
                      <h4 className="name">Sam Collins</h4>
                      <span className="date">15 Apr. 2023</span>
                      <p>
                        Striped bass yellowtail kingfish angler catfish
                        angelfish longjaw mudsucker, codlet Ragfish Cherubfish.
                        Ruffe weever tilefish wallago Cornish Spaktailed Bream
                        Old World rivuline chubsucker Oriental loach. Indian mul
                        char spotted dogfish Largemouth bass alewife cichlid
                        ladyfish lizardfish
                      </p>
                      <a href="#" title="" className="reply-btn">
                        Reply
                      </a>
                    </div>
                    <div className="comment-block v2">
                      <Image
                        alt="AI Agency & Technology HTML Template"
                        src="/assets/images/team/team2-4.png"
                        width={119}
                        height={122}
                      />
                      <h4 className="name">John Smith</h4>
                      <span className="date">15 Apr. 2023</span>
                      <p>
                        Old World rivuline chubsucker Oriental loach. Indian mul
                        char spotted dogfish Largemouth bass alewife cichlid
                        ladyfish lizardfish
                      </p>
                      <a href="#" title="" className="reply-btn">
                        Reply
                      </a>
                    </div>
                  </div>
                  <div className="contact-form2">
                    <BlogCommentForm />
                  </div>
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
                        <Image
                          alt={post.title}
                          src={post.imageSrc}
                          width={75}
                          height={70}
                        />
                        <span className="sub-title">{post.date}</span>
                        <h4 className="title">
                          <Link href="/blog-single" title="">
                            {post.title}
                          </Link>
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
