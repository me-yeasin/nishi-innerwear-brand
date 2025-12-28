"use client";

import { useEffect } from "react";
import { FiRefreshCw, FiAlertTriangle } from "react-icons/fi";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg-light flex flex-col items-center justify-center p-4 text-center">
      <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
        <FiAlertTriangle className="w-8 h-8" />
      </div>

      <h2 className="font-serif text-3xl text-brand-dark mb-4">
        Something went wrong!
      </h2>
      <p className="text-text-muted mb-8 max-w-md">
        We apologize for the inconvenience. Our technical team has been notified.
        Please try refreshing the page.
      </p>

      <button
        onClick={reset}
        className="px-8 py-3 bg-brand-dark text-white font-bold rounded shadow-lg hover:bg-brand-accent transition-colors flex items-center justify-center gap-2"
      >
        <FiRefreshCw /> Try Again
      </button>
    </div>
  );
}
