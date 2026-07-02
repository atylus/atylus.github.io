import Image from "next/image";

export default function ProjectSingleGallery() {
  return (
    <section className="project-sec7">
      <h2 className="visually-hidden">Project Section</h2>
      <div className="container2">
        <div className="swiper pro7" id="lightgallery">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="project-block7 mb-0"
                data-src="/assets/images/project/pro7-5.png"
              >
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/project/pro7-5.png"
                  width={897}
                  height={680}
                />
                <div className="architecture">
                  <span>
                    <a href="#" title="">
                      Secure Shield
                    </a>
                  </span>
                </div>
                <div className="custom-cursor">Zoom In</div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="project-block7 mb-0"
                data-src="/assets/images/project/pro7-5.png"
              >
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/project/pro7-5.png"
                  width={897}
                  height={680}
                />
                <div className="architecture">
                  <span>
                    <a href="#" title="">
                      Secure Shield
                    </a>
                  </span>
                </div>
                <div className="custom-cursor">Zoom In</div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="project-block7 mb-0"
                data-src="/assets/images/project/pro7-5.png"
              >
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/project/pro7-5.png"
                  width={897}
                  height={680}
                />
                <div className="architecture">
                  <span>
                    <a href="#" title="">
                      Secure Shield
                    </a>
                  </span>
                </div>
                <div className="custom-cursor">Zoom In</div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="project-block7 mb-0"
                data-src="/assets/images/project/pro7-5.png"
              >
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/project/pro7-5.png"
                  width={897}
                  height={680}
                />
                <div className="architecture">
                  <span>
                    <a href="#" title="">
                      Secure Shield
                    </a>
                  </span>
                </div>
                <div className="custom-cursor">Zoom In</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
