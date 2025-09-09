import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Palette, Printer, Truck } from 'lucide-react';

const pasos = [
	{
		titulo: "1. Consulta y asesoramiento",
		desc: "Nos contactamos, escuchamos tu necesidad y te asesoramos en el producto gráfico ideal."
	},
	{
		titulo: "2. Diseño personalizado",
		desc: "Creamos el diseño visual adaptado a tu marca, institución o empresa."
	},
	{
		titulo: "3. Impresión profesional",
		desc: "Utilizamos materiales de calidad y tecnología de impresión avanzada."
	},
	{
		titulo: "4. Entrega y seguimiento",
		desc: "Recibís tus productos gráficos en tiempo y forma."
	}
];

const iconos = [
	<MessageCircle size={28} strokeWidth={2} />,
	<Palette size={28} strokeWidth={2} />,
	<Printer size={28} strokeWidth={2} />,
	<Truck size={28} strokeWidth={2} />
];

const ProcesoGrafico = () => {
	const timelineRef = useRef(null);
	const [activeStep, setActiveStep] = useState(-1);

	useEffect(() => {
		const handleScroll = () => {
			if (!timelineRef.current) return;
			const rect = timelineRef.current.getBoundingClientRect();
			if (rect.top < window.innerHeight - 100) {
				setActiveStep(pasos.length - 1);
			} else {
				setActiveStep(-1);
			}
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section
			className="py-16 bg-fixed relative overflow-hidden"
			style={{
				background: 'linear-gradient(90deg, #fff 0%, #fee2e2 35%, #fee2e2 65%, #fff 100%)',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				backgroundSize: 'cover',
				minHeight: '100vh'
			}}
		>
			<div className="max-w-2xl mx-auto px-4">
				<h2 className="text-3xl font-bold mb-10 text-center" style={{color: '#7a1f2a'}}>¿Cómo trabajamos?</h2>
				<div className="flex flex-col gap-10 w-full pt-4 pb-8">
					{pasos.map((paso, idx) => (
						<motion.div
							key={idx}
							className="bg-white rounded-2xl shadow-2xl border border-[#7a1f2a]/20 flex flex-col md:flex-row items-center gap-6 px-6 py-8"
							initial={{ opacity: 0, y: 40, scale: 0.98 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.7, delay: idx * 0.15 }}
						>
							<div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-[#7a1f2a]/10 border-2 border-[#7a1f2a]/30 shadow-lg">
								{iconos[idx]}
							</div>
							<div className="flex-1 text-center md:text-left">
								<h3 className="text-2xl font-bold text-[#7a1f2a] mb-2 tracking-tight">{paso.titulo}</h3>
								<p className="text-gray-700 text-lg leading-relaxed">{paso.desc}</p>
							</div>
						</motion.div>
					))}
					<style>{`
            /* Animación ahora con framer-motion */
          `}</style>
				</div>
				<div className="mt-10 text-center">
					<a href="#contacto" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all duration-300">
						¡Solicitá tu presupuesto!
					</a>
				</div>
			</div>
		</section>
	);
};

export default ProcesoGrafico;
// Scroll suave para toda la web
if (typeof window !== 'undefined') {
	document.documentElement.style.scrollBehavior = 'smooth';
}
