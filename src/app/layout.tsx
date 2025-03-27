import type { Metadata } from "next";
import { Squada_One, Noto_Sans, Sofia_Sans_Extra_Condensed } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GoogleTagManager } from "@next/third-parties/google";
import { Providers } from "@/components/providers";
import { Toaster } from "sonner";
import Nav from '@/components/nav';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: "Cloud Summit 2025",
  description: "The premier cloud computing conference",
  icons : {
    icon: '/favicon-96x96.png',
  },
  openGraph: {
    title: "Cloud Summit 2025 – Western Canada's Premier Cloud Event",
    description:
      "Join Cloud Summit 2025 for cutting-edge insights, top cloud experts, and a mission-driven approach—100% of proceeds go to charity!",
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
  }
};
const sofiaSans = Sofia_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["400",'600', "700"],
  variable: "--font-sofia-sans",
});

const fontHeading = Squada_One({
  weight: '400',
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  const isVotePage = pathname === "/vote";

  return (
    <html lang="en" className={cn(
      "scroll-smooth",
      isVotePage && "bg-blue-700"
    )}>
      <body
        className={cn(
          "antialiased",
          fontHeading.variable,
          fontBody.variable,
          sofiaSans.variable
        )}
      >
        <Providers>
          <Nav />
          {children}
        </Providers>
        <Toaster
          richColors
          position="bottom-right"
          closeButton={false}
        />
        <GoogleTagManager gtmId="GTM-56TFJ6TC" />
      </body>
    </html>
  );
}
