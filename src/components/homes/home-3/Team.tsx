import Link from "next/link";
import Image from "next/image";

import Counter from "@/components/common/Counter";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { teamMembers } from "@/data/team";

type TeamProps = {
  eyebrow: string;
  title: string;
  counterLabel: string;
  ctaLabel: string;
  ctaHref: string;
  members: Record<string, { tag: string; designation: string }>;
};

export default function Team({
  eyebrow,
  title,
  counterLabel,
  ctaLabel,
  ctaHref,
  members,
}: TeamProps) {
  return (
    <section className="team-section ibt-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="team-info">
              <div className="sec-title">
                <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  {title}
                </TitleSplitWrapper>
                <div className="team-counter">
                  <div className="counter-box8">
                    <span className="counter-text">+</span>
                    <Counter max={500} extraClass="percent-counter" />
                  </div>
                  <span className="title">{counterLabel}</span>
                </div>
                <Link
                  href={ctaHref}
                  title=""
                  className="ibt-btn ibt-btn-outline"
                >
                  <span>{ctaLabel}</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12" />
                <div className="col-lg-6 col-md-6">
                  {teamMembers
                    .filter((m) => m.slot === "feature")
                    .map((member) => (
                      <div
                        key={member.id}
                        className={member.cardClassName ?? "team-card"}
                      >
                        <div className="team-img">
                          <Image
                            alt="AI Agency & Technology HTML Template"
                            src={member.imageSrc}
                            width={member.imageWidth}
                            height={member.imageHeight}
                          />
                          <SubTitleWrapper>{members[member.id]?.tag ?? member.tag}</SubTitleWrapper>
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
                            <Link href="/team-single" title="">
                              {member.name}
                            </Link>
                          </h4>
                          <span className="designation">
                            {members[member.id]?.designation ?? member.designation}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="team-member">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  {teamMembers
                    .filter((m) =>
                      ["col-left-top", "col-left-bottom"].includes(m.slot),
                    )
                    .map((member) => (
                      <div
                        key={member.id}
                        className={member.cardClassName ?? "team-card"}
                      >
                        <div className="team-img">
                          <Image
                            alt="AI Agency & Technology HTML Template"
                            src={member.imageSrc}
                            width={member.imageWidth}
                            height={member.imageHeight}
                          />
                          <SubTitleWrapper>{members[member.id]?.tag ?? member.tag}</SubTitleWrapper>
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
                            <Link href="/team-single" title="">
                              {member.name}
                            </Link>
                          </h4>
                          <span className="designation">
                            {members[member.id]?.designation ?? member.designation}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  {teamMembers
                    .filter((m) =>
                      ["col-right-top", "col-right-bottom"].includes(m.slot),
                    )
                    .map((member) => (
                      <div
                        key={member.id}
                        className={member.cardClassName ?? "team-card"}
                      >
                        <div className="team-img">
                          <Image
                            alt="AI Agency & Technology HTML Template"
                            src={member.imageSrc}
                            width={member.imageWidth}
                            height={member.imageHeight}
                          />
                          <SubTitleWrapper>{members[member.id]?.tag ?? member.tag}</SubTitleWrapper>
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
                            <Link href="/team-single" title="">
                              {member.name}
                            </Link>
                          </h4>
                          <span className="designation">
                            {members[member.id]?.designation ?? member.designation}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
