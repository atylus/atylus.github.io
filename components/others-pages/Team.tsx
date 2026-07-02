import Link from "next/link";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import Counter from "../common/Counter";
import SubTitleWrapper from "../common/SubTitleWrapper";
import TitleSplitWrapper from "../common/TitleSplitWrapper";

export default function Team() {
  const firstColumnMembers = teamMembers.slice(1, 2);
  const secondColumnMembers = teamMembers.slice(3, 5);
  const thirdColumnMembers = teamMembers
    .slice(0, 1)
    .concat(teamMembers.slice(2, 3));
  const fourthColumnMembers = teamMembers.slice(5, 6);

  return (
    <section className="team-section2 ibt-section-gapTop">
      <div className="container">
        <div className="title-area">
          <div className="row align-items-end mb-0">
            <div className="col-xl-9 col-lg-8">
              <div className="sec-title mb-0">
                <SubTitleWrapper>team</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  The Neural Network experts: uniting talent for intelligent
                  solutions
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="team-counter">
                <div className="counter-box8">
                  <span className="counter-text">+</span>
                  <Counter max={250} extraClass="percent-counter" />
                  ``
                </div>
                <span className="title">Awesome team members</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* First column */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-member2">
              {firstColumnMembers.map((member) => {
                const imageSrc = member.imageSrc.replace(
                  "/assets/",
                  "/assets/",
                );

                return (
                  <div key={member.id} className="team-card">
                    <div className="team-img">
                      <Link href={`/team-single`}>
                        <Image
                          alt="AI Agency & Technology HTML Template"
                          src={imageSrc}
                          width={member.imageWidth}
                          height={member.imageHeight}
                        />
                      </Link>
                      <SubTitleWrapper>{member.tag}</SubTitleWrapper>
                      <div className="team-shap" />
                    </div>
                    <div className="team-content">
                      <div className="share-box">
                        <span className="share-icon fa fa-share-alt" />
                        <ul className="social-links">
                          {member.socials.map((item) => (
                            <li key={item.iconClass}>
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title=""
                              >
                                <i className={item.iconClass} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <h4 className="name">
                        <Link href={`/team-single`} title="">
                          {member.name}
                        </Link>
                      </h4>
                      <span className="designation">{member.designation}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Second column */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-member2">
              {secondColumnMembers.map((member, index) => {
                const imageSrc = member.imageSrc.replace(
                  "/assets/",
                  "/assets/",
                );
                const cardClassName =
                  index === 0 ? "team-card v2" : "team-card v3";

                return (
                  <div key={member.id} className={cardClassName}>
                    <div className="team-img">
                      <Link href={`/team-single`}>
                        <Image
                          alt="AI Agency & Technology HTML Template"
                          src={imageSrc}
                          width={member.imageWidth}
                          height={member.imageHeight}
                        />
                      </Link>
                      <SubTitleWrapper>{member.tag}</SubTitleWrapper>
                      <div className="team-shap" />
                    </div>
                    <div className="team-content">
                      <div className="share-box">
                        <span className="share-icon fa fa-share-alt" />
                        <ul className="social-links">
                          {member.socials.map((item) => (
                            <li key={item.iconClass}>
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title=""
                              >
                                <i className={item.iconClass} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <h4 className="name">
                        <Link href={`/team-single`} title="">
                          {member.name}
                        </Link>
                      </h4>
                      <span className="designation">{member.designation}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Third column */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-member2">
              {thirdColumnMembers.map((member) => {
                const imageSrc = member.imageSrc.replace(
                  "/assets/",
                  "/assets/",
                );

                return (
                  <div key={member.id} className="team-card">
                    <div className="team-img">
                      <Link href={`/team-single`}>
                        <Image
                          alt="AI Agency & Technology HTML Template"
                          src={imageSrc}
                          width={member.imageWidth}
                          height={member.imageHeight}
                        />
                      </Link>
                      <SubTitleWrapper>{member.tag}</SubTitleWrapper>
                      <div className="team-shap" />
                    </div>
                    <div className="team-content">
                      <div className="share-box">
                        <span className="share-icon fa fa-share-alt" />
                        <ul className="social-links">
                          {member.socials.map((item) => (
                            <li key={item.iconClass}>
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title=""
                              >
                                <i className={item.iconClass} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <h4 className="name">
                        <Link href={`/team-single`} title="">
                          {member.name}
                        </Link>
                      </h4>
                      <span className="designation">{member.designation}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fourth column */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-member2 v2">
              {fourthColumnMembers.map((member) => {
                const imageSrc = member.imageSrc.replace(
                  "/assets/",
                  "/assets/",
                );

                return (
                  <div key={member.id} className="team-card">
                    <div className="team-img">
                      <Link href={`/team-single`}>
                        <Image
                          alt="AI Agency & Technology HTML Template"
                          src={imageSrc}
                          width={member.imageWidth}
                          height={member.imageHeight}
                        />
                      </Link>
                      <SubTitleWrapper>{member.tag}</SubTitleWrapper>
                      <div className="team-shap" />
                    </div>
                    <div className="team-content">
                      <div className="share-box">
                        <span className="share-icon fa fa-share-alt" />
                        <ul className="social-links">
                          {member.socials.map((item) => (
                            <li key={item.iconClass}>
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title=""
                              >
                                <i className={item.iconClass} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <h4 className="name">
                        <Link href={`/team-single`} title="">
                          {member.name}
                        </Link>
                      </h4>
                      <span className="designation">{member.designation}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
