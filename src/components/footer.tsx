"use client";

import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 max-md:text-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-md:place-items-center">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Cloud Summit
            </h3>
            <p className="mb-4">
              &copy; 2025 Cloud Summit. All rights reserved.
            </p>
            <div className="flex space-x-4 max-md:justify-center">
              <a
                target="_blank"
                href="https://www.instagram.com/canadiancloudninja"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/canadiancloud"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="hover:text-green-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://forms.gle/6qjgftM5Uf4ZSNNP7"
                  className="hover:text-green-500 transition-colors"
                  target="_blank"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="#venue"
                  className="hover:text-green-500 transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="https://forms.gle/1XDU3sdR94UgbcUEA"
                  className="hover:text-green-500 transition-colors"
                  target="_blank"
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#faq"
                  className="hover:text-green-500 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Archive</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/2024"
                  className="hover:text-green-500 transition-colors"
                >
                  Cloud Summit 2024
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="mb-4">Built by{" "}
            <a href="https://github.com/boooocchi" target="_blank" className="text-green-500 hover:text-green-400">Kota</a>,{" "}
            <a href="https://github.com/Sophia-G-Chan" target="_blank" className="text-green-500 hover:text-green-400">Sophia</a>,{" "}
            <a href="https://github.com/luisher98" target="_blank" className="text-green-500 hover:text-green-400">Luis</a>,{" "}
            <a href="https://github.com/bibschan" target="_blank" className="text-green-500 hover:text-green-400">Bibi</a> and{" "}
            <a href="https://github.com/madhujamitra" target="_blank" className="text-green-500 hover:text-green-400">Madhuja</a>.
          </p>
          <p>Powered by Vercel and v0.</p>
        </div>
      </div>
    </footer>
  );
} 