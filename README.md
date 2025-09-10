# PIZZERIA DEL PINCHA

Sitio web realizado en React para la pizzería "PIZZERIA DEL PINCHA". Incluye menú de productos, carrito visual con pedido por WhatsApp, promos, ubicación, formulario de contacto y diseño responsive con TailwindCSS.

## Características principales
- Menú de pizzas, empanadas y otros productos
- Filtros por categoría y paginación "ver más"
- Carrito visual con suma/resta de cantidades
- Envío de pedido directo a WhatsApp
- Alias MercadoPago personalizado para transferencias
- Promociones destacadas
- Formulario de contacto integrado
- Ubicación con botón "Cómo llegar" a Google Maps
- Header y footer personalizados, diseño mobile-first
- Scroll-up flotante inteligente (desaparece con el carrito y en scroll down)
- Animaciones de entrada en secciones y cards (servicios, promos, contacto, ubicación)
- CTA animados en el hero
- Fondos personalizados en secciones clave
- Mejoras de UX mobile: padding, visibilidad, botones grandes, sin solapamientos
- Colores y tipografías de marca

## Requisitos previos
- Node.js (v16 o superior recomendado)
- npm (v8 o superior)

## Instalación y uso

1. **Clona el repositorio o copia la carpeta del proyecto:**
   
  ```bash
  git clone https://github.com/ochodesign/pincha-pizza.git
  cd pincha-pizza
#
Repositorio oficial: [https://github.com/ochodesign/pincha-pizza](https://github.com/ochodesign/pincha-pizza)
  ```
  O simplemente copia la carpeta a tu PC.

2. **Instala las dependencias:**
   
  ```bash
  npm install
  ```

3. **Inicia el servidor de desarrollo:**
   
  ```bash
  npm start
  ```
  Esto abrirá la app en `http://localhost:3000`.

4. **Compila para producción (opcional):**
   
  ```bash
  npm run build
  ```
  Los archivos finales estarán en la carpeta `/build`.

### Dependencias necesarias para desarrollo

Asegúrate de tener instalados estos paquetes para que Babel, React y Webpack funcionen correctamente:

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server
```

Esto instalará todo lo necesario para compilar y ejecutar el proyecto en modo desarrollo y producción.

## Personalización
- Cambia el número de WhatsApp en `src/App.jsx` (constante `WHATSAPP_NUMBER`).
- Cambia el alias de MercadoPago en `CartPizzeria.jsx`.
- Cambia imágenes en `/public/img/`.
- Edita productos, promos y textos en los componentes dentro de `src/components/Pizzeria/`.
- El favicon se encuentra en `/public/img/pizza.ico`.

## Tecnologías usadas
- React 18
- React Router
- TailwindCSS
- Framer Motion (animaciones)
- Webpack
- Babel

## Autor
- ochodesign

---
¡Listo para usar y adaptar a tu pizzería!
