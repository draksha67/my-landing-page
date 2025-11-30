const items = [
  { title: "Fast", desc: "Lightning-fast performance and optimized bundle size." },
  { title: "Responsive", desc: "Looks great on phones, tablets, and desktops." },
  { title: "Scalable", desc: "Component-first structure for fast iteration." },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <h2 className="text-2xl font-bold text-center">Features</h2>
      <p className="text-center text-slate-600 mt-2">Key things this landing demonstrates.</p>

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div key={f.title} className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
