import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-sky-800/30 bg-slate-900/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/Logo_invert.png" alt="MontPro Logo" width={40} height={40} />
            <span className="font-bold">MontPro Financier</span>
          </div>
          <nav className="flex items-center gap-6 text-slate-300">
            <Link href="/dashboard" className="hover:text-white">
              Intelligence Hub
            </Link>
            <Link href="/generator" className="hover:text-white">
              Statements Generator
            </Link>
            <Link href="/credit" className="hover:text-white">
              Credit
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="container max-w-3xl text-center">
          <div className="mb-6 inline-block rounded-2xl border border-sky-700/40 bg-sky-900/20 px-4 py-2 text-sky-300">
            Georgetown-inspired executive dashboard
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-50 md:text-6xl">
            Executive-grade financial intelligence
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            Transform raw financial data into insights in minutes. Free to start.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/generator"
              className="rounded-lg bg-gradient-to-br from-indigo-700 to-sky-600 px-6 py-3 font-semibold text-white shadow"
            >
              Start Generating
            </Link>
            <Link
              href="#platform"
              className="rounded-lg border border-slate-700 px-6 py-3 text-slate-200"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <section id="platform" className="py-16">
        <div className="container grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-6">
            <h3 className="mb-2 text-xl font-bold">Statements Generator</h3>
            <p className="mb-4 text-slate-300">Turn bank statements into professional reports.</p>
            <Link href="/generator" className="text-sky-400 hover:underline">
              Start Generating →
            </Link>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-6">
            <h3 className="mb-2 text-xl font-bold">Financial Intelligence Hub</h3>
            <p className="mb-4 text-slate-300">AI-powered insights and forecasting.</p>
            <Link href="/dashboard" className="text-sky-400 hover:underline">
              Launch Hub →
            </Link>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-6">
            <h3 className="mb-2 text-xl font-bold">Credit Intelligence</h3>
            <p className="mb-4 text-slate-300">Advanced creditworthiness analysis.</p>
            <Link href="/credit" className="text-sky-400 hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/Logo_invert.png" alt="MontPro Logo" width={28} height={28} />
            <span className="text-slate-300">MontPro Financier</span>
          </div>
          <nav className="flex gap-6 text-slate-400">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
          <p className="text-slate-500">© 2025 MontPro Financier. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
