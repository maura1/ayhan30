import Container from "./ui/container";

const Welcome = () => {
  return (  
    <Container>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4/5 md:w-[40rem] lg:w-[50rem]
       bg-champagneC px-4 sm:px-8 md:px-12 lg:px-24 py-4 shadow-md rounded-lg z-10 ">
        <div className="text-center">
          {/*<h3 className="text-pretty italic text-xl md:text-2xl lg:text-3xl text-blackC">
            Mit Liebe für das Schöne
          </h3>*/}
          <p className="mt-2 text-md leading-relaxed text-whiteBg text-left">
            Ich biete professionelle Behandlung für Augenbrauen, Augen und Lippen, bei denen Natürlichkeit immer im Vordergrund steht. 
            Mit modernsten Techniken sorge ich dafür, dass dein Permanent Make-up harmonisch und dezent wirkt – so natürlich, dass man auf den ersten Blick kaum erkennt.
            Ich freue mich darauf, dich auf deinem Weg zu einem perfekten, natürlichen Look zu begleiten!
          </p>
          <p className="mt-2 text-right text-blackC">
            - Ayhan
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Welcome;
