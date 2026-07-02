function StarRating() {
  return (
    <ul className="rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <li key={i}>
          <i className="fa fa-star" />
        </li>
      ))}
    </ul>
  );
}

const testimonials = [
  {
    name: "manojchouh\u00a0",
    text: "Nice theme with excellent support from the developers. All of my doubts and requests were fixed within a day.",
  },
  {
    name: "elkab\u00a03",
    text: "Amazing customer support. I had one modifications and the customer support was super helpful and quick to answer them both.",
  },
  {
    name: "tolunayc",
    text: "code quality very high and they have very detailed documentaion also they have very corporate for customer ticket",
    mb: true,
  },
  {
    name: "sinilian",
    text: "Wonderful and clean design will create an excellent base for starting the new agency.\u00a0Especially when you don&apos;t want to do design turnkey and are looking for something to help you make a fast and easy launch.",
  },
  {
    name: "kerim80",
    text: "Fast and good support.Theme easy to customize and many usable custom Elementor theme widgets. Nice work.",
  },
  {
    name: "powert",
    text: "Great renewable energy theme for business.I recommend this Energium theme because it is very well-designed and easy to configure with elementor,",
    mb: true,
  },
  {
    name: "hikevin2000",
    text: "the customer suport is excellent！Thank you Sergey for your quick response and everything you did for me！",
  },
  {
    name: "\u00a0metintahayilma",
    text: "A perfect theme in every respect. They are very good especially in terms of support. I definitely recommend it. I bought dozens of themes. If I put them all on top of each other, it can&apos;t catch the success of this theme.",
  },
  {
    name: "khoavo",
    text: "This is one of the best Theme I&apos;ve purchased thus far. And the customer support by the Author is first-class.",
    mb: true,
  },
  {
    name: "manojchouh",
    text: "Nice theme with excellent support from the developers. All of my doubts and requests were fixed within a day.",
  },
  {
    name: "emil_b",
    text: "Great theme, and great customer support!The author always provided a solution even though it was not theme related. I&apos;ll surely buy new Nextjs templates from Artureanec.",
  },
  {
    name: "startelectric2022\u00a0",
    text: "I purchased the theme because I really liked the design. After I started working with it I realized that I needed to translate some elements into Romanian.",
    mb: true,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-sec2">
      <div className="container3">
        <div className="testi-title">
          <StarRating />
          <h2 className="title">
            User stories: hear what others love about our{" "}
            <span>Nextjs templates</span>!
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className={`test-block2 ${t.mb ? "mb-0" : ""}`}>
                <h4 className="name">{t.name}</h4>
                <StarRating />
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-3 col-md-6">
            {testimonials.slice(3, 6).map((t, i) => (
              <div key={i} className={`test-block2 ${t.mb ? "mb-0" : ""}`}>
                <h4 className="name">{t.name}</h4>
                <StarRating />
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-3">
            {testimonials.slice(6, 9).map((t, i) => (
              <div key={i} className={`test-block2 ${t.mb ? "mb-0" : ""}`}>
                <h4 className="name">{t.name}</h4>
                <StarRating />
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-3">
            {testimonials.slice(9, 12).map((t, i) => (
              <div key={i} className={`test-block2 ${t.mb ? "mb-0" : ""}`}>
                <h4 className="name">{t.name}</h4>
                <StarRating />
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
