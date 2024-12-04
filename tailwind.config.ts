import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"],
        serif: ["var(--font-cinzel)", "serif"],
        ser: ["var(--font-tangerine)", "serif"],
      },
      fontSize: {
        "66": "66px",
        "48": "48px",
        "36": "36px",
      },
      spacing: {
        '-30px': '-30px',
        '-35px': '-35px',
        '-40px': '-40px',
        '-50px': '-50px',
        '-55px': '-55px',
        '-60px': '-60px',
        '-70px': '-70px',
        '-80px': '-80px',
      },
      height: {
        custom: "200px",
      },
      backgroundColor: {
        overlay: "#000000",
      },
      opacity: {
        "30": "0.3",
      },
      boxShadow: {
        "elevation-light-3": "1px 3px 6px rgba(0, 0, 0, 0.16)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        blackC: "#201a1e",
        brownC: "#e0d9d3",
        pewterC: "#e2e6e7",
        champagneC: "#d4ccc7",
        softWhiteC: "#f8f4ff",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },


        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
     screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require("tailwindcss-textshadow")],
};

export default tailwindConfig;
