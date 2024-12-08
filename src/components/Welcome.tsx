import Container from "./ui/container";

const Welcome = () => {
  return (
    <Container>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4/5 mb-10 md:w-[40rem] lg:w-[50rem]
       bg-champagneC px-4 sm:px-8 md:px-12 lg:px-24 py-4 shadow-md rounded-lg z-30 sm:z-50">
        <div className="text-center">
          <p className="mt-2 text-md leading-relaxed text-whiteBg text-left">
            Ich biete professionelle Behandlungen für Augenbrauen, Augen und Lippen an, bei denen Natürlichkeit stets im Mittelpunkt steht. Mit modernsten Techniken stelle ich sicher, dass dein Permanent Make-up harmonisch, dezent und perfekt auf dich abgestimmt ist – so natürlich, dass es kaum auffällt. Ich freue mich darauf, dich auf deinem Weg zu einem strahlenden, natürlichen Look begleiten zu dürfen!
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
