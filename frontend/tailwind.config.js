/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Colores neón futuristas
        'neon-blue': '#00BFFF',         // Azul neón principal para texto
        'neon-blue-bright': '#0080FF',  // Azul más intenso para títulos
        'neon-cyan': '#00FFFF',         // Cyan neón para acentos
        'neon-blue-glow': '#4DA6FF',    // Para efectos de glow
        'dark-bg': '#0a0a0a',           // Fondo oscuro futurista
        'card-bg': '#111111',           // Fondo de tarjetas
      },
      textColor: {
        'default': '#00BFFF',           // Color por defecto del texto
        'title': '#0080FF',             // Color para títulos
        'accent': '#00FFFF',            // Color de acento
      },
      boxShadow: {
        'neon': '0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #00BFFF',
        'neon-title': '0 0 15px #0080FF, 0 0 30px #0080FF, 0 0 45px #0080FF',
        'neon-hover': '0 0 20px #00FFFF, 0 0 40px #00FFFF',
      }
    },
  },
  plugins: [],
};