import React from "react";

const HomePizzeria = () => (
  <section
    className="relative flex flex-col items-center justify-center text-center p-6 bg-black"
    style={{
      minHeight: '100vh',
      height: '100dvh',
      backgroundImage: 'url(/img/bg-hero/bg-hero-pizza.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '96px',
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 flex flex-col items-center">
  <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white mb-6 font-chewy drop-shadow-lg tracking-wide uppercase shadow-xl" style={{ WebkitTextStroke: '2px black', fontWeight: 900 }}>
        PIZZERIA DEL PINCHA
      </h1>
      <p className="text-xl text-white max-w-xl mb-6 drop-shadow font-montserrat">¡Bienvenido a la mejor pizza de Caseros! Disfrutá nuestras pizzas recién horneadas, ambiente estudiantil y atención rápida. ¡Vení a probarlas!</p>
      <div className="flex gap-4 mt-2">
        <span className="inline-flex items-center gap-1 text-orange-300 text-2xl"><svg xmlns='http://www.w3.org/2000/svg' className='w-7 h-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}><path strokeLinecap='round' strokeLinejoin='round' d='M12 2C7 2 2 7 2 12c0 5 5 10 10 10s10-5 10-10c0-5-5-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8z' /></svg>Pizza artesanal</span>
        <span className="inline-flex items-center gap-1 text-orange-300 text-2xl"><svg xmlns='http://www.w3.org/2000/svg' className='w-7 h-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}><path strokeLinecap='round' strokeLinejoin='round' d='M3 12h18M3 12l4-4m-4 4l4 4' /></svg>Delivery rápido</span>
      </div>
    </div>
  </section>
);

export default HomePizzeria;
