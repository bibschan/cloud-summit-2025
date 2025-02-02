import FAQaccordion from "@/components/faq-accordion";

export const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="faq">
      <div className="container mx-auto px-4 xl:max-w-[1100px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          FAQ
        </h2>
        <FAQaccordion />
      </div>
    </section>
  );
}; 