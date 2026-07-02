"use client";

export default function BlogSearchForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Search logic can be added here (e.g. navigate to search page with query)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Search"
        required
      />
      <button type="submit">
        <i className="fa fa-search" aria-hidden />
      </button>
    </form>
  );
}
