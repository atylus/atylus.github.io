import Image from "next/image";

import Counter from "@/components/common/Counter";

export default function FunfactSec4() {
  return (
    <section className="funfact-sec4">
      <div className="container">
        <div className="funfact-content">
          <h4 className="title">Support all languages in the whole world</h4>
          <Image
            alt="AI Agency & Technology HTML Template"
            src="/assets/images/event/flag.png"
            width={302}
            height={67}
          />
          <div className="funfact-count">
            <div className="counter-box11">
              <Counter max={170} />
              <span className="counter-text">+</span>
            </div>
            <span className="user">Languages</span>
          </div>
        </div>
      </div>
    </section>
  );
}
