/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Colores azules profesionales
        'professional-blue': '#4A90E2',        // Azul profesional para títulos
        'professional-blue-light': '#6BA6F0',  // Azul claro para acentos
        'professional-blue-dark': '#2E5F8A',   // Azul oscuro para títulos
        'aqua-blue': '#40E0D0',                // Azul aguamarina para texto general
        'aqua-light': '#7FFFD4',               // Aguamarina claro
        'aqua-dark': '#20B2AA',                // Aguamarina oscuro
        'accent-blue': '#3B82F6',              // Azul de acento
        'dark-bg': '#0f1419',                  // Fondo oscuro profesional
        'card-bg': '#1a202c',                  // Fondo de tarjetas
      },
      textColor: {
        'default': '#40E0D0',                  // Color aguamarina por defecto del texto
        'title': '#4A90E2',                    // Color azul profesional para títulos
        'accent': '#3B82F6',                   // Color de acento
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(74, 144, 226, 0.1)',
        'card': '0 4px 15px rgba(74, 144, 226, 0.15)',
        'hover': '0 6px 20px rgba(74, 144, 226, 0.2)',
        'aqua': '0 2px 10px rgba(64, 224, 208, 0.2)',
      }
    },
  },
  plugins: [],
};