import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          accent: "hsl(var(--secondary-accent))",
        },
        
        // Medical status colors
        critical: {
          DEFAULT: "hsl(var(--critical))",
          foreground: "hsl(var(--critical-foreground))",
          light: "hsl(var(--critical-light))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          light: "hsl(var(--warning-light))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
          light: "hsl(var(--success-light))",
        },
        
        // Glass morphism
        glass: {
          card: "hsl(var(--glass-card))",
          border: "hsl(var(--glass-border))",
        },
        
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      
      // Custom gradients
      backgroundImage: {
        "gradient-medical": "var(--gradient-medical)",
        "gradient-glass": "var(--gradient-glass)",
        "gradient-critical": "var(--gradient-critical)",
        "gradient-success": "var(--gradient-success)",
      },
      
      // Custom shadows
      boxShadow: {
        glass: "var(--shadow-glass)",
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)",
      },
      
      // Backdrop filters for glassmorphism
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        
        // Medical app animations
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "1",
            boxShadow: "0 0 20px hsl(var(--primary-glow) / 0.5)"
          },
          "50%": { 
            opacity: "0.8",
            boxShadow: "0 0 30px hsl(var(--primary-glow) / 0.8)"
          },
        },
        "slide-up": {
          from: { 
            opacity: "0", 
            transform: "translateY(20px)" 
          },
          to: { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        "slide-in": {
          from: { 
            opacity: "0", 
            transform: "translateX(-20px)" 
          },
          to: { 
            opacity: "1", 
            transform: "translateX(0)" 
          },
        },
        "scan-line": {
          "0%": { 
            transform: "translateY(-100%)" 
          },
          "100%": { 
            transform: "translateY(200%)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-up": "slide-up 0.4s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "scan-line": "scan-line 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
