"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
        <svg
          className="w-10 h-10 text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-slate-brand">Something went wrong</h2>
      <p className="mt-2 max-w-md text-sm text-slate-500">
        {error?.message || "An unexpected error occurred. Please try again."}
      </p>
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-sky-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-dark transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
