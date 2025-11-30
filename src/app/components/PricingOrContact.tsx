export default function PricingOrContact() {
  return (
    <section id="pricing" className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-600">Interested? Drop a message and we’ll respond within 24 hours.</p>

        <form className="mt-6 grid gap-4">
          <input className="px-4 py-3 border rounded-lg" placeholder="Your name" />
          <input className="px-4 py-3 border rounded-lg" placeholder="Email address" />
          <textarea className="px-4 py-3 border rounded-lg" rows={4} placeholder="Message"></textarea>
          <div className="flex justify-center">
            <button type="submit" className="px-6 py-3 bg-sky-600 text-white rounded-lg">Send message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
