import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LINKS } from '../constant';
import { MenuIcon, X } from 'lucide-react';

export default function Sidebar({ onNavClick }: { onNavClick: (value: string) => void }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => setSidebarOpen((prev) => !prev);
	return (
		<div>
			{!sidebarOpen && (
				<button
					onClick={toggleSidebar}
					className='fixed top-4 right-8 z-50 md:hidden bg-gray-100 p-2 rounded shadow hover:bg-gray-200 transition duration-300'
				>
					<MenuIcon size={28} />
				</button>
			)}

			<AnimatePresence>
				{sidebarOpen && (
					<motion.aside
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						className='fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 flex flex-col p-6'
					>
						<button
							onClick={toggleSidebar}
							className='self-start p-1 text-xl font-bold mb-6 bg-gray-200 rounded hover:bg-gray-100 cursor-pointer transition duration-300 hover:scale-95'
						>
							<X />
						</button>

						<nav className='flex flex-col gap-4 items-start'>
							{LINKS.map((link) => (
								<button
									key={link}
									onClick={() => {
										setSidebarOpen(false);
										onNavClick(link);
									}}
									className='text-gray-800 bg-gray-50 hover:bg-gray-300 text-lg font-medium w-full py-2 pl-2 text-start rounded transition duration-500'
								>
									{link.charAt(0).toUpperCase() + link.slice(1)}
								</button>
							))}
						</nav>
					</motion.aside>
				)}
			</AnimatePresence>
		</div>
	);
}
