import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Qatar Portal",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <p className="text-6xl font-bold text-primary/20 mb-4">404</p>
      <h1 className="font-newsreader text-2xl font-bold text-on-surface mb-2">Page Not Found</h1>
      <p className="text-sm text-gray-500 mb-8 max-w-xs">
        The page you are looking for may have been removed or is no longer available.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="bg-primary text-white rounded-xl px-5 py-2.5 text-sm font-semibold hover:scale-[1.02] transition-transform">
          Go to Home
        </Link>
        <Link href="/news" className="border border-stone-300 rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-stone-50 transition-colors">
          Latest News
        </Link>
        <Link href="/jobs" className="border border-stone-300 rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-stone-50 transition-colors">
          Jobs in Qatar
        </Link>
      </div>
    </div>
  );
}
