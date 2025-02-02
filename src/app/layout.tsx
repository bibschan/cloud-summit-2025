import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud Summit 2025",
  description: "Vancouver's Cloud Summit 2025",
  openGraph: {
    title: "Cloud Summit 2025 – Western Canada's Premier Cloud Event",
    description: "Join Cloud Summit 2025 for cutting-edge insights, top cloud experts, and a mission-driven approach—100% of proceeds go to charity!",
    url: "https://cloudsummit.ca/",
    siteName: "Cloud Summit 2025",
    images: [
      {
        url: "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/451553922_1062091445517154_9184498276967317360_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMTYweDExMjAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=N6tPtjXgpEQQ7kNvgERBWMX&_nc_gid=dcc2db774c2f435e94821dddfa000421&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQxNzM5MjE1NDAzMjA2MjM3MA%3D%3D.3-ccb7-5&oh=00_AYBYgXPEmsnWkg6_amRxJ1lHPIIShXYvWDExfVa-DmXtyA&oe=67A0C5A7&_nc_sid=22de04",
        width: 1200,
        height: 630,
        alt: "Cloud Summit 2025 - A cloud conference with a cause",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-b from-blue-700 to-blue-300 ${cn(
          "antialiased",
          fontHeading.variable,
          fontBody.variable
        )}`}
      >
        <Providers>{children}</Providers>
        <Toaster 
          richColors 
          position="bottom-right"
          closeButton={false}
        />
      </body>
    </html>
  );
}
