"use client";

export default function BlogCommentForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form handling logic can be added here (e.g. API call, validation)
  };
  

  return (
    <form className="custom-form2" onSubmit={handleSubmit}>
      <div className="form-title">
        <h2>Leave a Comment</h2>
        <p>
          Oriental loach. Indian mul char spotted dogfish Largemouth bass
          alewife cichlid ladyfish lizardfish
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              defaultValue=""
            />
            <button type="submit" className="ibt-btn ibt-btn-outline">
              <span>Send message</span>
              <i className="icon-arrow-top" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
