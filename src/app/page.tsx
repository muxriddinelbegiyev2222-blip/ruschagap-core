import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-50 via-white to-accent-500/5 px-4">
      <div className="max-w-2xl text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-100 text-brand-700 text-sm font-medium">
          AI + Gamified ta'lim
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Rus tilini{" "}
          <span className="text-brand-600">90 kunda</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          0 dan B1/B2 darajagacha — erkin muloqot.
          <br className="hidden sm:block" />
          Kuniga 15–20 daqiqa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/lesson/1"
            className="px-8 py-4 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition shadow-lg shadow-brand-600/20"
          >
            Bepul boshlash
          </Link>
          <Link
            href="/curriculum"
            className="px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-300 transition"
          >
            Dasturni ko'rish
          </Link>
        </div>
        <p className="mt-12 text-sm text-gray-500">
          Birinchi 3 dars — mutlaqo bepul
        </p>
      </div>
    </main>
  );
}
