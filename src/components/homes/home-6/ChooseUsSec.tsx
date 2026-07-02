import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import VideoPopupButton from "@/components/common/VideoPopupButton";

export default function ChooseUsSec() {
  return (
    <section className="choose-us-sec5">
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-6">
          <div className="choose-img5">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/event/choose2.png"
              width={721}
              height={1124}
            />
            <Image
              alt="AI Agency & Technology HTML Template"
              className="logo4"
              src="/assets/images/logo4.svg"
              width={203}
              height={37}
            />
            <div className="video-box5">
              <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                <i className="fa fa-play" /> Watch Video
              </VideoPopupButton>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="choose-content5">
            <h4 className="style-text">Atylus</h4>
            <div className="sec-title white">
              <SubTitleWrapper>what we do</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                Pioneers in artificial intelligence solutions and innovation
              </TitleSplitWrapper>
              <p>
                At AiDo, we are a leading AI services provider dedicated to
                delivering innovative solutions that leverage artificial
                intelligence to transform businesses.
              </p>
              <p>
                Our team of experts specializes in cutting-edge AI technologies,
                offering customized strategies and implementations to help you
                stay ahead in today&apos;s data-driven world. Unlock the full
                potential of AI with XXLando, your trusted partner in the future
                of intelligent technology
              </p>
            </div>
            <Link
              href={`/service`}
              title=""
              className="ibt-btn ibt-btn-outline"
            >
              <span>Explore More</span>
              <i className="icon-arrow-top" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
