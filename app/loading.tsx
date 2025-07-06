"use client";

import { LoadingSpinner } from "../components/loading-spinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 dark:bg-black/80">
      <LoadingSpinner className="w-16 h-16 text-primary mb-4" />
      <span className="text-lg font-semibold text-primary animate-pulse">
        Memuat halaman...
      </span>
    </div>
  );
}
