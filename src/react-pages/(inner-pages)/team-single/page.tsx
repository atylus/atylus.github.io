import Link from "next/link";
import Image from "next/image";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { getPageMetadata } from "@/data/pages";

export const metadata = getPageMetadata("team-single");

export default function Page() {
  return (
    <>
      <>
        {/* page-banner */}
        <section className="page-banner2">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Staff</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Team single /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link href={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/team`} title="">
                Team Members
              </Link>
            </li>
            <li className="">/</li>
            <li>Alan Begham</li>
          </ul>
        </section>
        {/* End page-banner */}
        {/* team-detail-sec */}
        <section className="team-detail-sec ibt-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="team-detail-info">
                  <div className="team-card2">
                    <div className="team-detail-img">
                      <Image
                        alt="AI Agency & Technology HTML Template"
                        src="/assets/images/team/team2-1.png"
                        width={535}
                        height={551}
                      />
                      <SubTitleWrapper>Neural</SubTitleWrapper>
                    </div>
                    <div className="team-content2">
                      <ul className="social-links2">
                        <li>
                          <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title=""
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title=""
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title=""
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title=""
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                      </ul>
                      <h4 className="title">Contact information</h4>
                      <a href="#" title="" className="nmbr">
                        +1 (368) 567 89 54
                      </a>
                      <a href="#" title="" className="nmbr">
                        + 800 350 84 31
                      </a>
                      <a href="#" title="" className="gmail">
                        alan@atylus.com
                      </a>
                    </div>
                  </div>
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/layers/cross.png"
                    width={321}
                    height={418}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="team-detail">
                  <div className="sec-title">
                    <SubTitleWrapper>CEO Atylus</SubTitleWrapper>
                    <TitleSplitWrapper
                      tag="h2"
                      className="title animated-heading"
                    >
                      Alan Begham
                    </TitleSplitWrapper>
                    <p>
                      Halosaur duckbilled barracudina, goosefish gar pleco, chum
                      salmon armoured catfish gudgeon sawfish whitefish
                      orbicular batfish mummichog paradise fish!
                    </p>
                    <p className="paragraph">
                      Triggerfish bluntnose knifefish upside-down catfish cobia
                      spookfish convict cichlid, &quot;cat shark; saw shark
                      trout cod&quot;. Pacific hake false trevally queen
                      parrotfish black prickleback moss. Pacific hake false
                      trevally queen parrotfish black prickleback moss.
                    </p>
                    <p className="paragraph">
                      Knifefish upside-down catfish cobia spookfish convict
                      cichlid, &quot;cat shark; saw shark trout cod.&quot;
                      Pacific hake false trevally queen parrotfish black
                      prickleback moss. Pacific hake false trevally queen
                      parrotfish black prickleback moss
                    </p>
                  </div>
                  <div className="team-expirience">
                    <h5 className="title2">
                      My experience &amp; years of education
                    </h5>
                    <div className="team-exp-education">
                      <h5 className="title3">Education</h5>
                      <div className="education-block mb-0">
                        <h4 className="title">2004 - 2007</h4>
                        <span className="team-title">ABMP University</span>
                        <p>
                          Pacific hake false trevally queen parrotfish black
                          prickleback moss. Pacific hake false trevally queen
                          parrotfish black prickleback moss. Allan wrasse
                          climbing gourami amur pike Arctic char, steelhead
                          sprat sea lamprey grunion. Walleye poolfish sand goby
                          butterfly ray stream catfish jewfish.
                        </p>
                      </div>
                    </div>
                    <div className="team-exp-education mb-0">
                      <h5 className="title3">Professional Experience</h5>
                      <div className="education-block">
                        <h4 className="title">2012 - 2017</h4>
                        <span className="team-title">Microsoft Inc.</span>
                        <p>
                          Triggerfish bluntnose knifefish upside-down catfish
                          cobia spookfish convict cichlid cat shark saw shark
                          trout cod.
                        </p>
                      </div>
                      <div className="education-block mb-0">
                        <h4 className="title">2018 - 2023</h4>
                        <span className="team-title">Neuro AI</span>
                        <p>
                          Allan wrasse climbing gourami amur pike Arctic char,
                          steelhead sprat sea lamprey grunion. Walleye poolfish
                          sand goby butterfly ray stream catfish jewfish.
                          Spanish mackerel yellow weaver sixgill. Pacific hake
                          false trevally queen parrotfish black prickleback
                          moss.
                        </p>
                        <div className="team-ser">
                          <span className="team-title">Responsibilities</span>
                          <ul className="tean-ser-list">
                            <li>Modern trucks and cars</li>
                            <li>Network of warehouses</li>
                            <li>New techhologies</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End team-detail-sec */}
      </>
    </>
  );
}
