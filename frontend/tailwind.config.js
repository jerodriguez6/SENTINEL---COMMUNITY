/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Colores azules profesionales más suaves
        'professional-blue': '#4A90E2',        // Azul principal profesional
        'professional-blue-light': '#6BA6F0',  // Azul claro para acentos
        'professional-blue-dark': '#2E5F8A',   // Azul oscuro para títulos
        'text-blue': '#5BA3F5',                // Azul para texto general
        'accent-blue': '#3B82F6',              // Azul de acento
        'dark-bg': '#0f1419',                  // Fondo oscuro profesional
        'card-bg': '#1a202c',                  // Fondo de tarjetas
      },
      textColor: {
        'default': '#5BA3F5',                  // Color por defecto del texto
        'title': '#4A90E2',                    // Color para títulos
        'accent': '#3B82F6',                   // Color de acento
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(74, 144, 226, 0.1)',
        'card': '0 4px 15px rgba(74, 144, 226, 0.15)',
        'hover': '0 6px 20px rgba(74, 144, 226, 0.2)',
      }
    },
  },
  plugins: [],
};