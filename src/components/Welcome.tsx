import Container from "./ui/container";

const Welcome = () => {
  return (
    <Container>
      <div
        className="relative sm:absolute sm:top-[75%] sm:left-1/2 sm:transform sm:-translate-x-1/2 
       w-4/5 mx-auto sm:mx-0 md:w-[40rem] lg:w-[50rem]
       bg-champagneC px-4 sm:px-8 md:px-12 lg:px-24 py-4 shadow-md rounded-lg z-20"
      >
        <div className="text-center">
          <p className="mt-2 text-md leading-relaxed text-whiteBg text-left">
            Ich biete professionelle Behandlungen für Augenbrauen, Augen und Lippen an, bei denen Natürlichkeit stets im Mittelpunkt steht. Mit modernsten Techniken stelle ich sicher, dass dein Permanent Make-up harmonisch, dezent und perfekt auf dich abgestimmt ist – so natürlich, dass es kaum auffällt. Ich freue mich darauf, dich auf deinem Weg zu einem strahlenden, natürlichen Look begleiten zu dürfen!
          </p>
          <p className="mt-2 text-right text-blackC">- Ayhan</p>
        </div>
      </div>
    </Container>
  );
};

export default Welcome;
