import Counter from "@/components/common/Counter";

export default function FunfactSec5() {
  return (
    <section className="funfact-sec5">
      <div className="container3">
        <div className="funfact-info5">
          <div className="funfact-content5">
            <div className="funfact-count5">
              <div className="counter-box17">
                <Counter max={14} />
                <span className="counter-text">k</span>
              </div>
              <span className="user3">Active users</span>
            </div>
            <div className="funfact-count5 v2">
              <div className="counter-box17">
                <Counter max={49} />
                <span className="counter-text">k</span>
              </div>
              <span className="user3">Downloads</span>
            </div>
          </div>
          <h4 className="title">
            More than <span>15+ companies</span> use our platform
          </h4>
        </div>
      </div>
    </section>
  );
}
