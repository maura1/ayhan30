
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ReviewsCard from '@/components/ui/ReviewsCard';
import { reviews } from '@/components/ui/reviews';
import Container from '@/components/ui/container';
export default function ReviewsList() {
  return (
    <Container>   
      <div className=" px-8 py-14">
        <div className="relative flex justify-center mb-8">
          <h1 className=" text-2xl sm:text-3xl md:text-3xl  font-medium text-blackC z-50">Bewertungen</h1>
          <span className="absolute deco-text md:deco-text-md lg:deco-text-lg top-[-40px] md:top-[-60px]  left-50 transform translate-50 pointer-events-none text-scalable whitespace-nowrap" >
              Meine Kunden
            </span>
        </div>
        <div className="py-8  rounded ">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselPrevious  />
            <CarouselContent className="flex gap-4 ">
              {reviews.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="w-full max-w-xs md:max-w-sm flex-shrink-0 "
                >
                  <div className="rounded">
                    <ReviewsCard
                     id={review.id}
                      name={review.name}
                      text={review.text.length > 100
                    ? `${review.text.slice(0, 500)}...`
                    : review.text}
                      stars={review.stars}
                      link={`/reviews/${review.id}`} // Dynamic link
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselNext  />
          </Carousel>
        </div>
        {/*<div className="flex justify-center mt-8">
          <Link href="/reviews" passHref>
            <Button variant="default" className="px-6 py-3 text-lg bg-brownC">
              Alle Bewertungen
            </Button>
          </Link>
        </div>*/}
      </div>
    </Container>
  );
}

