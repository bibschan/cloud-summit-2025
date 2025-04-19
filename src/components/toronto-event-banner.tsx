import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function TorontoEventBanner(): React.JSX.Element {
  return (
    <div className="left-0 z-40 flex items-center justify-between shadow-md transition-all duration-300 ease-in-out animate-slide-down bg-brink-pink w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-medium">
            <span className="font-bold">Cloud Summit Toronto 2026</span> -
            Register now for upcoming news!
          </p>
        </div>
        <Link
          href="https://forms.gle/9DPrR1bf2JMw1nFu8"
          target="_blank"
          rel="cloud summit vancouver website"
          className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-50"
        >
          Sign up for updates <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
