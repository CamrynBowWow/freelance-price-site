import Banner from './components/Banner';
import ServiceInfo from './components/ServiceInfo';
import Header from './components/Header';
import { useRef } from 'react';
import Sidebar from './components/Sidebar';

function App() {
	const bannerRef = useRef<HTMLDivElement | null>(null);
	const serviceRef = useRef<HTMLDivElement | null>(null);

	const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	// TODO: looks messy and wrong the onNavClicks. Maybe fix
	return (
		<>
			<Header
				onNavClick={(section) => {
					if (section === 'home') scrollTo(bannerRef);
					if (section === 'services') scrollTo(serviceRef);
				}}
			/>
			<Sidebar
				onNavClick={(section) => {
					if (section === 'home') scrollTo(bannerRef);
					if (section === 'services') scrollTo(serviceRef);
				}}
			/>

			<div ref={bannerRef}>
				<Banner />
			</div>

			<div ref={serviceRef}>
				<ServiceInfo />
			</div>
		</>
	);
}

export default App;
