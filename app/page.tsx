'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center space-y-6 px-5 sm:px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900">Juno Asset Manager</h1>
        <p className="text-base sm:text-xl text-slate-600 max-w-2xl">
          A comprehensive asset management system with bundled resources and dynamic asset loading
        </p>
        <Link
          href="/juno.html"
          className="inline-block mt-8 w-full sm:w-auto px-8 py-4 sm:py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
        >
          Launch Juno
        </Link>
      </div>
    </main>
  )
}
