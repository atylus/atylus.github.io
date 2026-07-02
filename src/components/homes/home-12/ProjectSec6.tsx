import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import VideoPopupButton from "@/components/common/VideoPopupButton";

export default function ProjectSec6() {
  return (
    <section className="project-sec6 ibt-section-gap">
      <div className="title-area">
        <div className="container">
          <div className="row end mb-0">
            <div className="col-xl-10 col-lg-12">
              <div className="sec-title white mb-0">
                <SubTitleWrapper>projects</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Discover a diverse range of voices tailored for any type of
                  video, ensuring the perfect tone
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-2 col-lg-12">
              <div className="sec-btn-box">
                <Link
                  href={`/project`}
                  title=""
                  className="ibt-btn ibt-btn-outline"
                >
                  <span>More projects</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container5">
        <div className="row">
          <div className="col-lg-6">
            <div className="project-block6">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/project/pro6-1.png"
                width={851}
                height={400}
              />
              <Image
                alt="AI Agency & Technology HTML Template"
                className="music"
                src="/assets/images/icon/music.png"
                width={83}
                height={35}
              />
              <h4 className="title">The voiceover for the Nike commercials</h4>
              <div className="video-btn6">
                <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                  <i className="fa fa-play" />
                </VideoPopupButton>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-block6">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/project/pro6-2.png"
                width={851}
                height={400}
              />
              <Image
                alt="AI Agency & Technology HTML Template"
                className="music"
                src="/assets/images/icon/music.png"
                width={83}
                height={35}
              />
              <h4 className="title">Business production voiceover for Apple</h4>
              <div className="video-btn6">
                <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                  <i className="fa fa-play" />
                </VideoPopupButton>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-block6">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/project/pro6-3.png"
                width={851}
                height={400}
              />
              <Image
                alt="AI Agency & Technology HTML Template"
                className="music"
                src="/assets/images/icon/music.png"
                width={83}
                height={35}
              />
              <h4 className="title">
                A voiceover for a high-end perfume commercial
              </h4>
              <div className="video-btn6">
                <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                  <i className="fa fa-play" />
                </VideoPopupButton>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-block6">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/project/pro6-4.png"
                width={851}
                height={400}
              />
              <Image
                alt="AI Agency & Technology HTML Template"
                className="music"
                src="/assets/images/icon/music.png"
                width={83}
                height={35}
              />
              <h4 className="title">
                Supreme commercial video for Awards New York
              </h4>
              <div className="video-btn6">
                <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                  <i className="fa fa-play" />
                </VideoPopupButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
