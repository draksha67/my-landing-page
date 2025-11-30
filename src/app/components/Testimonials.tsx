const reviews = [
  { name: "Anita", text: "Excellent UI and clear structure — shipped quickly." },
  { name: "Kumar", text: "Responsive and easy to customize." },
  { name: "Ria", text: "Great starter template for projects." }
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center animate-fadeUp" style={{ animationDelay: '0.05s' }}>
        Testimonials
      </h2>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
        {reviews.map((r, idx) => (
          <div
            key={r.name}
            className="p-6 border rounded-lg card-hover animate-fadeUp"
            style={{ animationDelay: `${0.14 + idx * 0.06}s` }}
          >
            <p className="text-slate-700">“{r.text}”</p>
            <p className="mt-4 font-semibold">— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
