import Image from "next/image";
import VideoPopupButton from "@/components/common/VideoPopupButton";

export default function Services5() {
  return (
    <section className="service-sec5">
      <div className="container2">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-12">
            <div className="ser-card5">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser5-1.png"
                width={623}
                height={599}
              />
              <div className="ser-content5">
                <div className="ser-text3">
                  <a href="#" title="">
                    AI Çözümleri
                  </a>
                  <a href="#" title="">
                    AI Hizmetleri
                  </a>
                </div>
                <h4 className="title">Yapay zekanın gücüyle işletmenizi ileriye taşıyın.</h4>
                <p>
                 Tüm sorularınıza anında çözüm. Yapay zeka gücüyle kesintisiz hizmeti keşfedin.
                </p>
                <a href="#" title="" className="ser-btn3">
                  Daha fazlasını keşfedin
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-6 col-md-12">
            <div className="ser-card5 v2">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser5-2.png"
                width={1241}
                height={599}
              />
              <div className="ser-counter">
                <div className="counter-box6">
                  <span className="percent-counter">7/24</span>
                </div>
                <span className="title">Dijital İş Gücü</span>
              </div>
              <h4 className="profection">Dijital İş Gücü</h4>
              <p className="profection-text">
                Sınırları aşan yapay zeka ajanları ile kesintisiz, hızlı ve hatasız operasyon gücü.
              </p>
              <div className="ser-video-box">
                <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                  <i className="fa fa-play" /> Watch Video
                </VideoPopupButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
