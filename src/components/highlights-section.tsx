'use client'
import { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  isVisible: boolean;
  fromLeft?: boolean;
  fromTop?: boolean;
  delay?: number;
}

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = "",
  isVisible,
  fromLeft = true,
  fromTop = true,
  delay = 0
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const xDirection = fromLeft ? -1 : 1;
  const yDirection = fromTop ? 1 : -1;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: isMobile ? 100 * xDirection : 0,
      y: !isMobile ? 100 * yDirection : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0
    },
    exit: {
      opacity: 0,
      x: isMobile ? 100 * -xDirection : 0,
      y: !isMobile ? 100 * -yDirection : 0
    }
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "exit"}
      transition={{
        duration: isVisible ? 1 : 0.6,
        ease: isVisible ? "easeOut" : "easeIn",
        delay
      }}
    >
      {children}
    </motion.div>
  );
};


export const HighlightsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('highlights');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight - 100 && rect.bottom >= 0;
      setIsVisible(isInView);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-20  bg-primary-900" id="highlights">
      <div
        className="max-w-[900px] container mx-auto flex flex-col md:grid grid-cols-6 grid-rows-5 gap-4 p-4 overflow-hidden"
        aria-label="Highlights for the 2025 cloud summit"
      >
        <div className="hidden md:block rounded-2xl row-span-3">
          <Image
            src="/past-events/awsDay-6.svg"
            alt="Two men looking at ipad"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <AnimatedElement
          isVisible={isVisible}
          className="rounded-2xl bg-lemon-lime p-4 col-span-3 row-span-2 text-black flex flex-col justify-center text-center"
          fromLeft={false}
          fromTop={true}
        >
          <h3 className={`font-highlight text-xl md:text-8xl font-semibold`}>
            $10,000+
          </h3>
          <p className="font-semibold text-sm md:text-lg">
            Charity Donation Goal
          </p>
        </AnimatedElement>
        <div className="hidden md:block rounded-2xl col-span-2 row-span-2">
          <Image
            src="/past-events/AWSDay-7.svg"
            alt="Two men looking at ipad"
            width={100}
            height={100}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="hidden md:block rounded-2xl bg-pale-gold p-4 "></div>
        <div className="order-first md:order-none rounded-2xl bg-primary-800 p-4 col-span-2 row-span-3 flex justify-center">
          <Image
            src="/past-events/cloud-logo.svg"
            alt="Cloud Summit 2025 Logo with text under reading Cloud Summit"
            width={192}
            height={177}
            className="m-auto"
          />
        </div>
        <motion.div
          className="rounded-2xl bg-secondary-600 p-4 col-span-2 row-span-2 text-white flex flex-col justify-center text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{
            duration: isVisible ? 0.8 : 0.5,
            ease: isVisible ? "easeOut" : "easeIn"
          }}
        >
          <h3 className={`font-highlight text-xl md:text-8xl font-semibold`}>
            350+
          </h3>
          <p className="font-semibold text-sm md:text-lg">
            In-Person Attendees
          </p>
        </motion.div>
        <motion.div
          className="rounded-2xl bg-lilac p-4 col-span-2 row-span-2 flex flex-col justify-center text-center"
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{
            duration: isVisible ? 1 : 0.5,
            ease: isVisible ? "easeOut" : "easeIn"
          }}>
          <h3 className={`font-highlight text-xl md:text-8xl font-semibold`}>
            21+
          </h3>
          <p className="font-semibold text-sm md:text-lg">
            Presentations & Workshops
          </p>
        </motion.div>
        <div className="hidden md:block rounded-2xl col-span-2 row-span-2">
          <Image
            src="/past-events/AWSDay-9.svg"
            alt="Three men standing smiling at each other"
            width={200}
            height={118}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        <div className="hidden md:block  rounded-2xl col-span-2 row-span-1 overflow-hidden">
          <Image
            src="/past-events/cloudsummit.png"
            alt="Cloud Summit 2025 Logo with text under reading Cloud Summit"
            width={200}
            height={118}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <AnimatedElement
          isVisible={isVisible}
          className="rounded-2xl bg-brink-pink p-4 col-span-2 row-span-1 flex flex-col justify-center text-center text-black"
          fromLeft={true}
          fromTop={false}
        >

          <h3 className={`font-highlight text-xl md:text-8xl font-semibold`}>
            12+
          </h3>
          <p className="font-semibold text-sm md:text-lg">
            Sponsors & Communities
          </p>
        </AnimatedElement>
      </div>
    </section>
  );
};
