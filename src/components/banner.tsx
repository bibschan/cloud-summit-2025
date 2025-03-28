import Image from "next/image";

function BannerSection() {
  return (
    <div className="w-full bg-[#1B221D]">
      <Image
        src="/canada-divider.svg"
        alt="Blue and grey banner that says Canada' Cloud Summit 2025"
        width={100}
        height={100}
        className="w-full h-auto"
      />
    </div>
  );
}

export default BannerSection;
