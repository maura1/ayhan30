import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative w-full h-[66.6667vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/hero1.jpg" 
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover", // Changed to 'cover' to fill entire space
            objectPosition: "center"
          }}
        />
        {/* Optional: Dark overlay to improve text readability */}
        {/*<div className="absolute inset-0 bg-black bg-opacity-50 z-15"></div>*/}
      </div>
      
      {/* Hero Content */}
      <div className="relative z-20 flex h-full w-full flex-col justify-end items-start text-left pb-12 px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative Text */}
          <span className="absolute deco-text md:deco-text-md  top-[-40px] md:top-[-70px] lg:top-[-70px] left-50 transform translate-50 pointer-events-none text-scalable whitespace-nowrap">
            Natürliche Schönheit
          </span>
          <h1 className="relative hidden sm:block sm:text-4xl xl:text-6xl font-medium text-softWhiteC sm:pl-24">
            Willkommen bei
          </h1>
        </div>
        <h2 className="relative text-xl md:text-2xl lg:text-2xl md:pl-40 sm:pl-24 pb-12 text-white">
  <span className="hidden sm:inline md:text-2xl">Ayhan Kublay</span>
  <span className="sm:hidden inline text-base">mit </span> 
  Permanent Makeup 
  <span className="hidden sm:inline sm:text-xl md:text-2xl">Artist</span>
</h2>
      </div>ss
    </div>
  );
}