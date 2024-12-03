'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon, Phone } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const routes = [
    { href: '/', label: 'HOME' },
    { href: '/aboutMe', label: 'ÜBER-MICH' },
    { href: '/behandlung', label: 'BEHANDLUNG' },    
    { href: '/price', label: 'PREISE' },
    { href: '/bewertung', label: 'BEWERTUNG' },
    { href: '/kontakt', label: 'KONTAKT' },
  ];

  const handleButtonClick = (id: string) => {
    setActiveButton(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-blackC shadow-md mx-auto w-full ">
      <div className="flex items-center justify-between py-5 px-4 md:px-6 lg:px-4 xl:px-8 text-softWhiteC">
        {/* Logo */}
<Link href="/" passHref>
  <div className="relative group">
    <Image
      src="/images/logo1.svg"
      alt="Logo"
      width={220} 
      height={5} 
      className="transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
    />
    <div className="absolute inset-0 -z-10 bg-gray-500 rounded-lg blur-md group-hover:blur-lg"></div>
  </div>
</Link>



        {/* Navigation */}
        <nav className="hidden lg:flex flex-grow lg:text-sm  justify-center items-center space-x-6  xl:space-x-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`hover:text-brownC transition ${
                activeButton === route.href
                  ? 'font-bold border-b-2 border-current'
                  : ''
              }`}
              onClick={() => handleButtonClick(route.href)}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Right-Side Content */}
        <div className="flex items-center space-x-4 lg:space-x-2">
          {/* Phone Button */}
          <div className=" flex items-center bg-gradient-to-r from-brownC to-champagneC text-white xl:text-base rounded px-4 py-2 shadow-lg hover:outline hover:outline-softWhiteC  transition duration-300 ease-in-out">
            <Phone className="h-6 w-6  text-white mr-2" />
            <span className="text-lg font-semibold lg:text-sm">-0151-1155 30 31</span>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger>
              <div className="flex items-center space-x-2 lg:hidden">
                <span className="text-lg font-medium">Menü</span>
                <Menu className="h-6 w-6" />
              </div>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] text-softWhiteC bg-blackC"
            >
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="block px-2 py-1 text-lg"
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
