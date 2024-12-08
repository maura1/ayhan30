import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[66.6667vh] bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/hero.jpeg" // Path to your image
          alt="Hero Background"
          layout="fill" // Ensures the image stretches within its container
          objectFit="contain" // Keeps the entire image visible
          objectPosition="center" // Centers the image
          priority // Optimizes loading for the hero image
        />
      </div>
<div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      {/* Hero Content */}
      <div className="relative z-20 flex h-full w-full flex-col justify-end items-start text-left pb-12 px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative Text */}
          <span className="absolute deco-text md:deco-text-md  top-[-35px] md:top-[-50px] lg:top-[-50px] left-50 transform translate-50 pointer-events-none text-scalable whitespace-nowrap">
            Natürliche Schönheit
          </span>
          <h1 className="relative text-2xl sm:text-4xl xl:text-6xl font-medium text-softWhiteC sm:pl-24">
            Willkommen bei
          </h1>
        </div>
        <h2 className="relative text-xl md:text-2xl lg:text-2xl md:pl-40 sm:pl-24 pb-12 text-white">
          Ayhan Kublay Permanent Makeup Artist
        </h2>
      </div>
    </div>
  );
}