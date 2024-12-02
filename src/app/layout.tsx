import { Cinzel, Lato, Tangerine } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

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
        className={`${cinzel.variable} ${lato.variable} ${tangerine.variable}antialiased bg-[#E2E6E7]`}
      >
        <ThemeProvider>
          <main>
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
