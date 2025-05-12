import { motion } from 'framer-motion';
import { LINKS } from '../constant';

export default function Header({ onNavClick }: { onNavClick: (value: string) => void }) {
	return (
		<header className='hidden fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow z-50 md:flex justify-center items-center h-10 py-10'>
			<nav className='flex gap-8'>
				{LINKS.map((section) => (
					<motion.button
						key={section}
						onClick={() => onNavClick(section)}
						className='relative text-gray-800 transition-all duration-100 hover:text-gray-400 hover:underline underline-offset-2 font-semibold tracking-wide text-sm lg:text-base cursor-pointer hover:scale-95'
					>
						{section.charAt(0).toUpperCase() + section.slice(1)}
					</motion.button>
				))}
			</nav>
		</header>
	);
}
