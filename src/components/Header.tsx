'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon, Phone } from 'lucide-react';
import Image from 'next/image';
import { routes } from '@/constants';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [activeButton, setActiveButton] = useState<string|null>(null);

  const handleButtonClick = (id:string) => {
    setActiveButton(id);
  };

  return (
   <header className="sticky top-0 z-50 bg-blackC shadow-md w-full px-2 lg:px-8 py-2">
  <nav className="flex justify-between items-center w-full">
    <div className="relative group">
      <Link href="/" passHref>
        <Image
          src="/images/logo1.svg"
          alt="Logo"
          width={220}
          height={40} // Adjusted height for aspect ratio
          className="w-auto h-auto max-w-[150px] lg:max-w-[220px] transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
        />
        
        <div className="absolute inset-0 -z-10 bg-gray-500 rounded-lg blur-md group-hover:blur-lg"></div>
      </Link>
    </div>
    <ul className="hidden lg:flex flex-1 justify-center text-sm gap-4 xl:gap-8">
      {routes.map((route) => (
        <li key={route.href}>
          <Link
            href={route.href}
            className={`text-softWhiteC hover:text-brownC transition ${
              activeButton === route.href
                ? "font-bold border-b-2 border-current"
                : ""
            }`}
            onClick={() => handleButtonClick(route.href)}
          >
            {route.label}
          </Link>
        </li>
      ))}
    </ul>
    <div className="flex items-center xl:space-x-2">
      <div className="flex items-center bg-gradient-to-r from-brownC to-champagneC text-blackC text-sm md:text-base rounded px-0 sm:px-4 lg:px-1 py-2 shadow-lg hover:outline hover:outline-softWhiteC transition duration-300 ease-in-out">
        <Phone className="hidden lg:block lg:h-4 lg:w-4 lg:mr-2" />
        <span>0151-1155 30 31</span>
      </div>
      <Button
        className="text-softWhiteC"
        variant="ghost"
        size="icon"
        aria-label="Toggle Theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center lg:hidden text-softWhiteC">
            <Menu className="h-6 w-6 ml-2" />
          </div>
        </SheetTrigger>
        <SheetContent
          side="left"
          className=" w-[300px] sm:w-[400px] text-softWhiteC bg-blackC px-4 py-6">
          
        
          <nav className="flex flex-col gap-4">
            {routes.map((route) => (
              <SheetClose asChild key={route.href}>
                <Link
                  href={route.href}
                  className="block text-lg px-4 py-2 rounded hover:bg-gray-800"
                >
                  {route.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </nav>
</header>

  );
};

export default Header;
