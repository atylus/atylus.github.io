import Image from "next/image";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function ProjectSingleProcess() {
  return (
    <section className="process-sec ibt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="process-title">
              <h4 className="title">process</h4>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="process-detail">
              <p className="paragraph">
                In today&apos;s fast-paced and data-driven world, businesses are
                constantly seeking innovative ways to gain a competitive edge,
                make smarter decisions, and deliver exceptional customer
                experiences. One technology that is transforming industries
                across the globe is neural networks. Harnessing the power of
                artificial intelligence, neural networks have the ability to
                analyze vast amounts of data, identify complex patterns, and
                make accurate predictions, enabling businesses to unlock new
                opportunities and drive growth.
              </p>
              <p>
                At our company, we specialize in providing comprehensive neural
                network services that can revolutionize your business. Whether
                you&apos;re looking to enhance your data analysis capabilities,
                automate repetitive tasks, improve customer engagement, or
                optimize operational processes, our team of experts is here to
                help you leverage the full potential of neural networks.
              </p>
              <p>
                Data lies at the heart of neural networks, and our services
                start with understanding your unique data landscape. We work
                closely with you to identify and collect relevant data sources,
                ensuring that your neural network models are built on a solid
                foundation. Our data scientists employ cutting-edge techniques
                to preprocess and clean the data, making it ready for training
                the neural network models.
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
                    computer systems that can perform tasks that would typically
                    require human intelligence. It involves the creation of
                    algorithms and models that enable machines to learn, reason,
                    perceive.
                  </h4>
                  <SubTitleWrapper>Adam Peterson</SubTitleWrapper>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
