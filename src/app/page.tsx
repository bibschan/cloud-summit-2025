import { HeroBanner } from "@/components/hero-banner";
import Cloud from "@/components/ui/cloud";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-[100dvh] max-w-5xl mx-auto">
      <main className="flex-1 ">
        <HeroBanner />
        {/* bunch of clouds hehe */}
        <Cloud className="top-0 md:top-8 left-12" />
        <Cloud className="top-48 -right-20 md:top-16 md:right-20 " />
        <Cloud className="bottom-1/4 -left-20 md:left-1/2" />
        <Cloud className="bottom-24 left-8 md:left-0" />
        <Cloud className="bottom-36 -right-10 md:right-12 md:bottom-16" />
        <Cloud className="top-40 -left-20 md:bottom-1/3 md:top-auto md:left-24" />
        <Cloud className="bottom-1/2 right-1 hidden md:block" />
      </main>
    </div>
  );
}
