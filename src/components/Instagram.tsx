import Link from 'next/link'
import Image from 'next/image'

export default function Instagram(){
    return (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50" >
            <Link
                href="https://www.instagram.com/ayhan.kublay.permanent/?igsh=MWQybGhyZmtnamJvZQ%3D%3D"
                passHref
                className="group flex items-center w-fit hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <div className="relative flex items-center w-14 h-14 rounded-full bg-champagneC transition-all duration-300 group-hover:w-[250px] overflow-hidden">
                  {/* Icon */}
                  <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14">
                    <Image
                      src="/images/instagram.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="pointer-events-none"
                    />
                  </div>
                  {/* Text */}
                  <span className="ml-16 text-blackC text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
                    Folge mir auf Instagram
                  </span>
                </div>
              </Link>
        </div>
    )
}