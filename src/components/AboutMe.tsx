import Image from "next/image";
import Container from "./ui/container";

const AboutMe = () => {
  return (
    <Container>
      <div className="mt-16 m-auto w-11/12 sm:w-4/5 max-w-[1280px] mb-10 bg-champagneC px-4 sm:px-8 md:px-12 lg:px-16 py-6 shadow-md rounded-lg z-30">
        <div className="flex flex-col md:flex-row items-start md:items-start gap-6">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="/images/ayhan.png"
              alt="Ayhan"
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 text-md leading-relaxed text-whiteBg text-left">
            <h1 className="text-xl mb-4 text-center md:text-left font-bold">
              Herzlich willkommen bei Ayhan Permanent Make-Up!
            </h1>
            <p className="mb-4">
              Es freut mich sehr, dass du den Weg zu mir gefunden hast. Ursprünglich habe ich fünf Jahre lang als Friseurin gearbeitet – eine Tätigkeit, die ich immer mit viel Leidenschaft ausgeübt habe. Doch nach der Geburt meines Kindes habe ich mich entschieden, beruflich neue Wege zu gehen und etwas zu finden, das meine Liebe zur Schönheit und meine kreative Ader perfekt vereint.
            </p>
            <p className="mb-4">
              Schon immer hatte ich das Bedürfnis, dir nicht nur ein neues Styling zu bieten, sondern dir ein ganzheitliches Gefühl von Schönheit und Selbstbewusstsein zu schenken. Dieses Anliegen hat mich dazu motiviert, mich intensiv im Bereich Permanent Make-Up weiterzubilden und verschiedene Zertifikate zu erlangen.
            </p>
            <p className="mb-4">
              Heute arbeite ich mit viel Hingabe und Herzblut und freue mich über das positive Feedback meiner Kundinnen und Kunden, das mir immer wieder zeigt, wie sehr meine Arbeit ihr Wohlbefinden und ihre Zufriedenheit fördert. Besonders wichtig ist es mir, ein natürliches Ergebnis zu erzielen, das deine Persönlichkeit unterstreicht und dir das Gefühl gibt, dich rundum wohlzufühlen.
            </p>
            <p className="mb-4">
              Schau dir gerne die Bewertungen meiner zufriedenen Kundinnen und Kunden an. Bei Fragen stehe ich dir jederzeit gerne zur Verfügung und freue mich darauf, dich bald in meinem Studio begrüßen zu dürfen.
            </p>
            <p className="mt-4 text-right text-blackC font-semibold text-italic">- Ayhan</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
