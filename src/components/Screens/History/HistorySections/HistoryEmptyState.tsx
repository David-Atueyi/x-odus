import Link from 'next/link';
import React from 'react'

export const HistoryEmptyState = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 animate-fadeInUp max-w-md">
        <div className="w-20 h-20 bg-[#184b8c]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">📋</span>
        </div>
        <h1 className="text-3xl font-bold text-[#184b8c] mb-4">
          No Purchase History
        </h1>
        <p className="text-[#184b8c]/70 mb-8">
          You haven&apos;t made any purchases yet. Start by browsing our data
          plans!
        </p>
        <Link
          href="/plans"
          className="inline-block px-6 py-3 bg-[#184b8c] text-white rounded-xl font-semibold hover:scale-105 active:scale-95 transition-transform"
        >
          Browse Plans
        </Link>
      </div>
    </div>
  );
}
