import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PriceList from '@/components/PriceList';
import ReviewsList from '@/components/ReviewsList';
import ServicesList from '@/components/ServicesList';
import Welcome from '@/components/Welcome';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative z-0">
        <Hero />
      </div>

      {/* Welcome Section */}
      <div className="relative sm:absolute sm:top-[75%] sm:left-0 sm:right-0 z-20">
        <Welcome />
      </div>

      {/* Services Section */}
      <div className="relative z-10 mt-4 sm:mt-32">
        <ServicesList />
      </div>

      {/* Other Sections */}
      <ReviewsList />
      <PriceList />
      <Footer />
    </>
  );
}
