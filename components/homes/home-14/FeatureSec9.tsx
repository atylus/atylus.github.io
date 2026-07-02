import Image from "next/image";
import VideoPopupButton from "@/components/common/VideoPopupButton";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function FeatureSec9() {
  return (
    <section className="feature-sec9">
      <div className="container3">
        <div className="row">
          <div className="col-lg-6">
            <div className="feature-content9">
              <div className="sec-title">
                <SubTitleWrapper>how it works</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Step-by-step guide to creating AI-Powered 360° experiences
                  with Atylus
                </TitleSplitWrapper>
                <p>
                  The neural network is trained by exposing it to a large
                  dataset with known inputs and outputs. During training, the
                  network learns to adjust its weights through backpropagation,
                  gradually improving its ability to make accurate predictions
                  or classifications
                </p>
              </div>
              <div className="feature-block9">
                <SubTitleWrapper>01</SubTitleWrapper>
                <h4 className="title">Generate 360 for you project</h4>
                <p>
                  A neural network consists of interconnected nodes called
                  neurons. Neurons are organized into layers.
                </p>
              </div>
              <div className="feature-block9">
                <SubTitleWrapper>02</SubTitleWrapper>
                <h4 className="title">Customize file</h4>
                <p>
                  Each neuron applies an activation function to the weighted sum
                  of its inputs and produces an output
                </p>
              </div>
              <div className="feature-block9">
                <SubTitleWrapper>03</SubTitleWrapper>
                <h4 className="title">Download ready files</h4>
                <p>
                  The inputs are multiplied by their respective weights, summed
                  up, and passed through the activation function.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-img9">
              <div className="empty4" />
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/feature/feature9-1.png"
                width={797}
                height={774}
              />
              {/* Trigger button */}
              <div className="ser-video-box">
                <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                  <i className="fa fa-play" /> Watch Video
                </VideoPopupButton>
              </div>
              <h4 className="title">Interactive</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
