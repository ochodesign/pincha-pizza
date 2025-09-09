import { useEffect } from 'react';

const useVisitTracker = (pagina = '/') => {
  useEffect(() => {
    // Registrar la visita
    const registrarVisita = async () => {
      try {
        await fetch('https://darkslategray-hedgehog-436235.hostingersite.com/backend/registrar-visita.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `pagina=${encodeURIComponent(pagina)}`
        });
      } catch (error) {
        // Silencioso - no queremos que afecte la experiencia del usuario
        console.log('Error registrando visita:', error);
      }
    };

    // Registrar después de un pequeño delay para no interferir con la carga
    const timer = setTimeout(registrarVisita, 1000);
    
    return () => clearTimeout(timer);
  }, [pagina]);
};

export default useVisitTracker;
