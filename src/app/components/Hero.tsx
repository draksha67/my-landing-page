export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">

                {/* Text Section */}
                <div className="flex-1">
                    <h1
                        className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fadeUp"
                        style={{ animationDelay: '0.05s' }}
                    >
                        Design. Build. Launch.
                    </h1>

                    <p
                        className="mt-5 text-lg text-gray-600 max-w-lg animate-fadeUp"
                        style={{ animationDelay: '0.18s' }}
                    >
                        Create stunning, responsive user interfaces effortlessly with Next.js,
                        Tailwind CSS, and modern UI generation tools.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <a
                            href="#pricing"
                            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition transform animate-popIn"
                            style={{ animationDelay: '0.30s' }}
                        >
                            Get Started
                        </a>


                        <a
                            href="#features"
                            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition animate-fadeUp"
                            style={{ animationDelay: '0.36s' }}
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-1">
                    <img
                        src="/avatar.jpg"
                        alt="Product Preview"
                        className="w-full rounded-xl shadow-sm border border-gray-200 animate-floaty"
                        style={{ animationDelay: '0.45s' }}
                    />
                </div>

            </div>
        </section>
    );
}
