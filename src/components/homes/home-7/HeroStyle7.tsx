import Link from "next/link";

export default function HeroStyle7() {
  return (
    <section className="hero-style7">
      <div className="container2">
        <div className="hero-content7">
          <h1 className="title">
            <span>Atylus</span> is future
          </h1>
          <p>
            Convert text to natural-sounding speech. Customizable, multilingual,
            and high-quality audio output.
          </p>
          <Link
            href={`/index7`}
            target="_blank"
            rel="noopener noreferrer"
            title=""
            className="ibt-btn ibt-btn-secondary"
          >
            <span>Discover</span>
            <i className="icon-arrow-top" />
          </Link>
        </div>
      </div>
    </section>
  );
}
