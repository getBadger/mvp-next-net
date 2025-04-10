import type { Config } from "tailwindcss";

const config: Config = {
  content: [
   "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        border: "hsl(20 10% 86%)",
        background: "hsl(40 70% 98%)",
        foreground: "hsl(20 10% 15%)",
        input: "hsl(20 10% 86%)",
        ring: "hsl(45 89% 57%))",
        primary: {
          DEFAULT: "hsl(45 89% 57%)",
          foreground: "hsl(20 10% 15%)",
        },
        secondary: {
          DEFAULT: "hsl(28 80% 52%)",
          foreground: "hsl(0 0% 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(40 30% 96%)",
          foreground: "hsl(20 10% 40%)",
        },
        accent: {
          DEFAULT: "hsl(175 87% 43%)",
          foreground: "hsl(0 0% 98%)",
        },
        popover: {
          DEFAULT: "hsl( 0 0% 100%)",
          foreground: "hsl(20 10% 15%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(20 10% 15%)",
        },
        badger: {
          yellow: "hsl(48 89% 60%)",
          orange: "#E67E22",
          deepOrange: "#D35400",
          blue: "#2980B9",
          teal: "hsl(168 83% 41%)",
        },
      },
      backgroundColor: {
        DEFAULT: "hsl(40 70% 98%)",
      },
      borderColor: {
        DEFAULT: "hsl(20 10% 86%)",
      },
      borderRadius: {
        lg: "var(0.75rem)",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
