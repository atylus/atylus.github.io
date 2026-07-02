import Image from "next/image";

export default function ProjectSec3() {
  return (
    <section className="project-sec3">
      <h2 className="visually-hidden">Partner Section</h2>
      <div className="container2">
        <div className="project-track">
          <div className="project-block3">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project3-1.png"
              width={293}
              height={388}
            />
            <span className="text">Solutions</span>
          </div>
          <div className="project-block3">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project3-2.png"
              width={294}
              height={290}
            />
          </div>
          <div className="project-block3">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project3-3.png"
              width={294}
              height={388}
            />
          </div>
          <div className="project-block3">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project3-4.png"
              width={293}
              height={442}
            />
            <span className="text v2">Creative</span>
          </div>
          <div className="project-block3">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project3-5.png"
              width={294}
              height={290}
            />
          </div>
          <div className="project-block3">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project3-6.png"
              width={294}
              height={388}
            />
            <span className="text v3">Vision</span>
          </div>
        </div>
      </div>
    </section>
  );
}
