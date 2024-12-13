import Container from "@/components/ui/container";
import { priceData } from "./ui/priceData";
import PriceItem from "./ui/PriceItem";
import Image from "next/image";

const PriceList = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-12 bg-pewterC relative">
        {/* Background Noise */}
        <div className="absolute inset-0 pointer-events-none bg-noise z-0"></div>

        {/* Header Section */}
        <div className="z-10 mb-8 flex flex-col items-center justify-center relative">
          <h1 className="text-3xl sm:text-4xl font-bold text-blackC z-50">
            Preise
          </h1>
          <span
            className="absolute deco-text md:deco-text-md lg:deco-text-lg top-[-50px] md:top-[-60px] 
            left-50 transform translate-50 pointer-events-none text-scalable whitespace-nowrap "
          >
            Qualität
          </span>
        </div>

        {/* Price List Section */}
        <div className="z-10 relative grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-x-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {priceData.map((item, index) => (
            <PriceItem key={index} {...item} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="z-10 mt-12 text-center text-sm text-gray-700 px-4">
          <p className="mb-2 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            Bitte informieren Sie mir mindestens 24 Stunden im Voraus, falls Sie Ihren Termin nicht wahrnehmen können.

          </p>
          {/*<p>Ratenzahlung auf Anfrage!</p>*/}
        </div>

        {/* Gift Certificate Section */}
        <div className="z-10 mt-16 bg-champagneC p-6 rounded-lg shadow-lg max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/gütschein.png"
              alt="Gutschein"
              width={400}
              height={200}
              className="rounded-lg shadow-md "
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Schönheit zum Verschenken – bei mir ganz einfach!
            </h2>
            <p className="text-gray-700 mb-4">
            Überrasche deine Liebsten mit einem Geschenk-Gutschein für eine Permanent-Make-up Behandlung und schenke ihnen das Gefühl von natürlicher Schönheit.
            </p>
            <p className="text-gray-700 mb-4">
              Den Betrag kannst du frei wählen.
            </p>
            <p className="text-gray-700">
              Bestellung mit <a href="https://wa.me/4915111553031" className="text-softWhiteC underline font-bold">WhatsApp</a>&nbsp; oder per <a href="mailto:info@ayhankublay.de" className="text-softWhiteC underline font-bold">E-Mail</a>.
            </p>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default PriceList;
