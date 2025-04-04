"use client";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function SpeakersPage() {

    return (
        <>
            <Nav />
            <main className="min-h-screen bg-primary-900 ">
                <div className="max-w-[1100px] container mx-auto px-6 py-24">
                    <section className="flex flex-col items-center justify-center space-y-4 text-center my-8">
                        <div className="space-y-2">
                            <h1 className="text-6xl md:text-8xl  text-white">
                                Speakers Coming&nbsp;
                                <span className="block md:inline-block text-secondary-600 ">
                                    Soon
                                </span>
                            </h1>
                            <p className="text-sm md:text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
                                Come back later to see the list of speakers for the event. We are working hard to bring you an amazing lineup of speakers and workshops.
                            </p>
                        </div>

                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
