import Script from "next/script";

export default function Head() {
  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-957966437"
        strategy="beforeInteractive"
      />
      <Script id="google-ads" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-957966437');
        `}
      </Script>
    </>
  );
}
