import Container from "./ui/container";

export default function Hero() {
  return (
    <Container>
      <div className="relative overflow-hidden" style={{ height: '66.6667vh' }}>
        {/* Background Image */}
        <div
          style={{ backgroundImage: 'url(/images/hero.jpg)' }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute top-4 left-4">
  
</div>

        </div>

        {/* Hero Text */}
        <div className="relative flex h-full w-full flex-col justify-end items-start text-left pb-12 px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="relative">
            {/* Decorative Text */}
            <span
              className="absolute deco-text md:deco-text-md lg:deco-text-lg top-[-35px] md:top-[-50px] lg:top-[-50px] left-50 transform translate-50 pointer-events-none text-scalable whitespace-nowrap"         
            >
              Natürliche Schönheit
            </span>
            <h1 className="relative z-20 text-2xl sm:text-4xl  font-medium text-softWhiteC sm:pl-24">
              Willkommen bei
            </h1>
          </div>

          {/* Subheading */}
          <h2 className="relative z-20 text-xl md:text-2xl lg:text-2xl md:pl-40 sm:pl-24 pb-12 text-white">
            Ayhan Kublay Permanent Makeup Artist
          </h2>
        </div>
      </div>
    </Container>
  );
}
