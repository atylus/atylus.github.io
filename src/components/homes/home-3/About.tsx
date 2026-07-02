import Link from "next/link";
import Image from "next/image";

import Counter from "@/components/common/Counter";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function About() {
  return (
    <section className="about-us-sec3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="about-img3 about-img3-mobile-hidden">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/layers/layer10.png"
                width={574}
                height={749}
                style={{ opacity: 0.2 }}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="about-content3">
              <h2 className="style-text3">Atylus</h2>
              <div className="sec-title mb-0">
                <SubTitleWrapper>hakkımızda</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Yapay zeka çözümleri ve inovasyonda öncüyüz
                </TitleSplitWrapper>
                <p>
                  Atylus olarak, işletmeleri dönüştürmek için yapay zekanın gücünden 
                  yararlanan yenilikçi çözümler sunmaya odaklanmış öncü bir yapay 
                  zeka hizmet sağlayıcısıyız.
                </p>
                <p className="paragraph">
                  Uzman ekibimiz en ileri yapay zeka teknolojilerinde uzmanlaşmış olup,
                  günümüzün veri odaklı dünyasında rakiplerinizin bir adım önünde olmanız 
                  için size özel stratejiler ve entegrasyonlar sunar. Akıllı teknolojilerin 
                  geleceğindeki güvenilir iş ortağınız XXLando ile yapay zekanın tüm potansiyelini 
                  açığa çıkarın.
                </p>
                <div className="about-counter3">
                  <Link
                    href={`/service`}
                    title=""
                    className="ibt-btn ibt-btn-outline"
                  >
                    <span>Daha Fazlasını Keşfedin</span>
                    <i className="icon-arrow-top" />
                  </Link>
                  <div className="counter-box7">
                    <Counter max={200} extraClass="percent-counter" />
                    <span className="counter-text">+</span>
                  </div>
                  <span className="title2">
                    Yapay zeka desteğiyle başarıyla tamamlanan yaratıcı projeler
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
