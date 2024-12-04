import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/types";

interface ServiceCardProps {
  data: Service;
  imageRight?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data, imageRight = false }) => {
  return (
    <Link
      href="/"
      className="outline-0 focus:ring-2 hover:ring-2 ring-navbarText transition duration-300 rounded-lg block ring-1 ring-slate-900/5"
    >
      <Card className="bg-whiteBg rounded-lg shadow-lg overflow-hidden">
        <div
          className={`${
            imageRight ? "md:flex-row-reverse" : "md:flex-row"
          } flex md:items-stretch flex-col-reverse md:w-full w-full`}
        >
          {/* Image Section */}
          <div className="md:w-1/2 w-full h-64 relative">
            <Image
              src={data.images?.[0] ?? "/default-image.png"}
              alt={data.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>

          {/* Content Section */}
          <CardContent className="md:w-1/2 w-full p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="font-semibold text-lg text-navbarText underline">{data.name}</p>
              <p className="text-sm text-navbarText line-clamp-3">{data.description}</p>
            </div>
            <p className="text-sm font-semibold mt-4 text-right text-navbarText">
              mehr &gt;
            </p>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default ServiceCard;
