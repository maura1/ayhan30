import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative w-full h-[66.6667vh] overflow-hidden bg-black">
      {/* Lighter Black Pattern Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: `url('/images/lighter-black-pattern.png')`,
          backgroundSize: 'cover',
          opacity: 0.3,
        }}
      ></div>

      {/* Background Image and Gradient */}
      <div className="absolute inset-0 z-5">
        <div
          className="absolute inset-0 left-[-50vw] w-[200vw] h-full"
          style={{
            background: `
              linear-gradient(
                to right, 
                black, 
                rgba(0, 0, 0, 0.5) 25%, 
                rgba(0, 0, 0, 0) 50%, 
                rgba(0, 0, 0, 0.6) 75%, 
                black
              )
            `,
          }}
        ></div>
        <Image
          src="/images/hero5.jpg"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex h-full w-full flex-col justify-end items-start text-left pb-0 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative Text */}
          <span className="absolute deco-text md:deco-text-md text-softWhiteC sm:text-champagneC top-[-13px] sm:top-[-45px] md:top-[-70px] lg:top-[-70px] left-50 transform translate-50 pointer-events-none text-scalable whitespace-nowrap ">
            Natürliche Schönheit
          </span>
          <h1 className="relative hidden sm:block sm:text-4xl xl:text-5xl font-medium text-softWhiteC sm:pl-24">
            Willkommen bei
          </h1>
        </div>

        {/* Adjusted Text Section */}
        <h2 className="relative text-xl md:text-2xl lg:text-2xl md:pl-40 sm:pl-24 pb-6 text-white bg-opacity-70 bg-black  p-2 pt-10 sm:pt-0 rounded-lg">
          <span className="hidden sm:inline  md:text-2xl">Ayhan Kublay</span>&nbsp;
          <span className="sm:hidden inline text-2xl">mit </span>&nbsp;
          <span className="tex-:4xl">Permanent Makeup</span>&nbsp;
          <span className="hidden sm:inline sm:text-xl md:text-2xl">Artist</span>
        </h2>
      </div>
    </div>
  );
}
