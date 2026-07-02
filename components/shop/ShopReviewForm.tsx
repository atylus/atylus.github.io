"use client";

export default function ShopReviewForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Review submit logic can be added here (e.g. API call, validation)
  };

  return (
    <form onSubmit={handleSubmit} className="custom-form3">
      <div className="form-title2">
        <h2>Add a review</h2>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <ul className="rating">
          <li>
            <i className="fa fa-star" aria-hidden />
          </li>
          <li>
            <i className="fa fa-star" aria-hidden />
          </li>
          <li>
            <i className="fa fa-star" aria-hidden />
          </li>
          <li>
            <i className="fa fa-star" aria-hidden />
          </li>
          <li>
            <i className="fa fa-star" aria-hidden />
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <input type="text" name="name" placeholder="Full name" required />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <textarea
              id="message2"
              name="message"
              rows={5}
              placeholder="Message"
              required
              defaultValue=""
            />
            <div className="radio-box">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                defaultValue="Bike"
              />
              <label htmlFor="vehicle1">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
              <br />
            </div>
            <button type="submit" className="ibt-btn ibt-btn-outline">
              <span>Submit</span>
              <i className="icon-arrow-top" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
