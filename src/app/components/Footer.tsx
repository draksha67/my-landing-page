export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg font-semibold">MyProduct</div>
        <div className="text-sm text-slate-300">© {new Date().getFullYear()} MyProduct. All rights reserved.</div>
        <div className="flex gap-4">
          <a className="text-slate-300 hover:text-white" href="#">Privacy</a>
          <a className="text-slate-300 hover:text-white" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
