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
      <div className="relative">
        <Hero />
      </div>

      {/* Welcome Section */}
      <div className="relative mt-8">
        <div className="hidden lg:block">
          {/* Show Welcome on large screens above Services */}
          <Welcome />
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-0 mt-8">
        <div className="block lg:hidden">
          {/* Show Welcome on small/medium screens below Hero but above Services */}
          <Welcome />
        </div>
        <ServicesList />
      </div>

      {/* Other Sections */}
      <ReviewsList />
      <PriceList />
      <Footer />
    </>
  );
}
