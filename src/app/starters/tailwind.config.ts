/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
          hover: "rgb(var(--primary-hover) / <alpha-value>)",
          active: "rgb(var(--primary-active) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
          hover: "rgb(var(--destructive-hover) / <alpha-value>)",
          active: "rgb(var(--destructive-active) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        // QuickBooks specific colors
        qb: {
          info: "rgb(var(--qb-info) / <alpha-value>)",
          positive: "rgb(var(--qb-positive) / <alpha-value>)",
          attention: "rgb(var(--qb-attention) / <alpha-value>)",
          tertiary: "rgb(var(--qb-tertiary) / <alpha-value>)",
          neutral: "rgb(var(--qb-neutral) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius)",
        sm: "var(--radius-sm)",
        xs: "var(--radius-xs)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        qb: [
          "Avenir Next forINTUIT",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
      },
      lineHeight: {
        display: "var(--leading-display)",
        body: "var(--leading-body)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents }: { addComponents: any }) {
      addComponents({
        /* Button components that match shadcn patterns */
        ".btn-primary": {
          "@apply inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active font-medium h-10 px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none":
            {},
        },

        ".btn-secondary": {
          "@apply inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground font-medium h-10 px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none":
            {},
        },

        ".btn-destructive": {
          "@apply inline-flex items-center justify-center rounded-md bg-destructive text-destructive-foreground hover:bg-destructive-hover active:bg-destructive-active font-medium h-10 px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none":
            {},
        },

        ".btn-outline": {
          "@apply inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium h-10 px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none":
            {},
        },

        ".btn-ghost": {
          "@apply inline-flex items-center justify-center rounded-md bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground font-medium h-10 px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none":
            {},
        },

        /* Form components */
        ".form-input": {
          "@apply flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50":
            {},
        },

        ".form-select": {
          "@apply flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50":
            {},
        },

        ".form-checkbox": {
          "@apply h-4 w-4 rounded border-input text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50":
            {},
        },

        ".form-radio": {
          "@apply h-4 w-4 border-input text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50":
            {},
        },

        ".form-label": {
          "@apply text-sm font-medium text-muted-foreground mb-1 block": {},
        },

        /* Card components */
        ".card": {
          "@apply rounded-lg bg-card text-card-foreground shadow-sm": {},
        },

        ".card-header": {
          "@apply flex flex-col space-y-1.5 p-6": {},
        },

        ".card-title": {
          "@apply text-xl font-semibold leading-none tracking-tight": {},
        },

        ".card-description": {
          "@apply text-sm text-muted-foreground": {},
        },

        ".card-content": {
          "@apply p-6 pt-0": {},
        },

        ".card-footer": {
          "@apply flex items-center p-6 pt-0": {},
        },

        /* Custom QuickBooks components */
        ".badge-info": {
          "@apply inline-flex items-center rounded-full bg-qb-info/10 px-2.5 py-0.5 text-xs font-semibold text-qb-info":
            {},
        },

        ".badge-positive": {
          "@apply inline-flex items-center rounded-full bg-qb-positive/10 px-2.5 py-0.5 text-xs font-semibold text-qb-positive":
            {},
        },

        ".badge-attention": {
          "@apply inline-flex items-center rounded-full bg-qb-attention/10 px-2.5 py-0.5 text-xs font-semibold text-qb-attention":
            {},
        },

        ".alert-info": {
          "@apply relative rounded-md border border-qb-info/20 bg-qb-info/10 p-4 text-qb-info [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-qb-info":
            {},
        },

        ".alert-positive": {
          "@apply relative rounded-md border border-qb-positive/20 bg-qb-positive/10 p-4 text-qb-positive [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-qb-positive":
            {},
        },

        ".alert-attention": {
          "@apply relative rounded-md border border-qb-attention/20 bg-qb-attention/10 p-4 text-qb-attention [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-qb-attention":
            {},
        },

        ".alert-destructive": {
          "@apply relative rounded-md border border-destructive/20 bg-destructive/10 p-4 text-destructive [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-destructive":
            {},
        },
      });
    },
  ],
};
