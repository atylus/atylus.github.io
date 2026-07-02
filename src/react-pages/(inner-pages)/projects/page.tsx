import Link from "next/link";
import Image from "next/image";
import { projects, projectsModern } from "@/data/projects";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { getPageMetadata } from "@/data/pages";

export const metadata = getPageMetadata("project2");

export default function Page() {
  return (
    <>
      <>
        {/* page-banner */}
        <section className="page-banner5">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Neural</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Projects Modern /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link href={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Projects Modern</li>
          </ul>
        </section>
        {/* End page-banner */}
        {/* project-sec7 */}
        <section className="project-sec7 ibt-section-gap">
          <div className="container2">
            <div className="project-info2">
              {projectsModern.map((item, index) => {
                const project = projects.find((p) => p.id === item.id);
                if (!project) return null;

                const isLast = index === projectsModern.length - 1;

                const titleLinkHref = isLast
                  ? "blog-single.html"
                  : "project-single.html";
                const buttonHref = isLast ? "#" : "project-single.html";

                return (
                  <div
                    key={item.id}
                    className={`project-block2${isLast ? " mb-0" : ""}`}
                  >
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src={item.imageSrc}
                      width={item.imageWidth}
                      height={item.imageHeight}
                    />
                    <div className="project-content2">
                      <SubTitleWrapper>{project.category}</SubTitleWrapper>
                      <h4 className="title">
                        <a href={titleLinkHref} title="">
                          {project.title}
                        </a>
                      </h4>
                      <a href={buttonHref} title="" className="ser-btn3">
                        Explore more
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* End project-sec7 */}
      </>
    </>
  );
}
