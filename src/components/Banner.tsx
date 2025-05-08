import imgUrl from '../assets/website.jpg';
import LeftSideBanner from './LeftSideBanner';

export default function Banner() {
	return (
		<section className='min-w-screen flex flex-col xl:flex-row'>
			<div className='bg-light-blue pt-10 basis-full p-5'>
				<LeftSideBanner />
			</div>
			<div className='basis-full lg:pt-10 lg:p-5'>
				<div className='hidden lg:flex items-center justify-center'>
					<div className='h-[300px] w-[300px] md:w-[380px] xl:h-[500px] xl:w-[500px]'>
						<img src={imgUrl} alt='banner' />
					</div>
				</div>
			</div>
		</section>
	);
}
