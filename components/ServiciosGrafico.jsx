import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, FileText, CreditCard, Image, Megaphone, Video } from 'lucide-react';

const servicios = [
	{
		icon: <CalendarDays size={40} strokeWidth={1.5} className="text-[#7a1f2a] mb-1" />,
		titulo: "Almanaques y calendarios personalizados",
		desc: "Diseño e impresión de almanaques y calendarios para instituciones, empresas y comercios.",
		img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
	},
	{
		icon: <FileText size={40} strokeWidth={1.5} className="text-[#7a1f2a] mb-1" />,
		titulo: "Membretes y papelería institucional",
		desc: "Papelería profesional: membretes, sobres, carpetas y más para tu marca.",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
	},
	{
		icon: <CreditCard size={40} strokeWidth={1.5} className="text-[#7a1f2a] mb-1" />,
		titulo: "Tarjetas personales y empresariales",
		desc: "Tarjetas de presentación y credenciales con acabados premium.",
		img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
	},
	{
		icon: <Image size={40} strokeWidth={1.5} className="text-[#7a1f2a] mb-1" />,
		titulo: "Cuadros y foto cuadros",
		desc: "Impresión de cuadros, foto cuadros y decoración visual personalizada.",
		img: "https://images.unsplash.com/photo-1526178613658-3f1622045544?auto=format&fit=crop&w=400&q=80"
	},
	{
		icon: <Megaphone size={40} strokeWidth={1.5} className="text-[#7a1f2a] mb-1" />,
		titulo: "Folletería y banners publicitarios",
		desc: "Flyers, folletos, banners y material promocional para tu negocio o institución.",
		img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
	},
	{
		icon: <Video size={40} strokeWidth={1.5} className="text-[#7a1f2a] mb-1" />,
		titulo: "Edición de video y material visual",
		desc: "Videos institucionales, presentaciones y contenido multimedia profesional.",
		img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
	}
];

const ServiciosGrafico = () => (
	<section
		id="servicios"
		className="py-16 relative bg-white overflow-hidden"
		style={{
			background: 'linear-gradient(90deg, #fee2e2 0%, #fff 35%, #fff 65%, #fee2e2 100%)',
			backgroundRepeat: 'no-repeat',
			backgroundAttachment: 'fixed',
			backgroundSize: 'cover',
			minHeight: '100vh'
		}}
	>
		<div className="relative z-10">
			<div className="max-w-5xl mx-auto px-4">
				<h2 className="text-3xl font-bold mb-10 text-center drop-shadow-lg" style={{ color: '#7a1f2a' }}>Servicios gráficos destacados</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{servicios.map((serv, idx) => (
						<motion.div
							key={idx}
							className="bg-[#f8f8fa] rounded-xl shadow p-6 flex flex-col items-center text-center border-2 border-[#7a1f2a]/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#7a1f2a]/30"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.7, delay: idx * 0.15 }}
							style={{ zIndex: 11, position: 'relative' }}
						>
							<div className="mb-4">{serv.icon}</div>
							<h3 className="text-xl font-semibold mb-2 text-[#7a1f2a]">{serv.titulo}</h3>
							<p className="text-gray-700 mb-4">{serv.desc}</p>
							<a href="#contacto" className="mt-auto bg-[#7a1f2a] text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-[#5a1620] transition-colors">Solicitar presupuesto</a>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	</section>
);

export default ServiciosGrafico;
