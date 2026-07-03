export default function Marquee({ items }: { items: [string, string] | string[] }) {
  return (
    <section className="marquee-sec">
      <h2 style={{ display: "none" }}>Marquee Section</h2>
      <div className="marquee">
        <div className="marquee-inner">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
