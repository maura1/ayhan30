import { Cinzel, Lato, Tangerine } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsApp from "@/components/WhatsApp";
import Instagram from "@/components/Instagram";


const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
});
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-lato",
});
const tangerine = Tangerine({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-tangerine",
});

export const metadata = {
  title: {
    template: "%s | Ayhan Kubly",
    absolute: "Ayhan Kubly",
  },
  description: "Ayhan Kubly is a permanent makeup artist.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${lato.variable} ${tangerine.variable} antialiased bg-[#E2E6E7]`}
      >
        <ThemeProvider>
          {/* Removed relative wrapper to avoid interfering with sticky */}
          <Header />
          <main>
            {children}
          </main>
          <div className="flex flex-col fixed bottom-4 right-4 space-y-24 z-50">
          <WhatsApp />
          <Instagram />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
