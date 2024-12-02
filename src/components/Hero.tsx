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
        </div>

        {/* Hero Text */}
        <div className="relative flex h-full w-full flex-col justify-end items-start text-left pb-12 px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="relative">
            {/* Decorative Text */}
            <span
              className="absolute deco-text"
              style={{                
                top: '-50px', // Offset slightly above
                left: '0', // Align with the main text
                transform: 'translate(0, 0)', // Fine-tune as needed
                pointerEvents: 'none', // Avoid blocking interactions
              }}
            >
              Natürliche Schönheit
            </span>

            <h1 className="relative z-20 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-white sm:pl-24">
              Willkommen bei
            </h1>
          </div>

          {/* Subheading */}
          <h2 className="relative z-20 text-pretty md:text-2xl lg:text-3xl md:pl-40 sm:pl-24 pb-12 text-white">
            <span >Ayhan Kublay</span> Permanent Makeup Artist
          </h2>
        </div>
      </div>
    </Container>
  );
}
