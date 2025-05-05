import imgUrl from '../assets/website.jpg';
import LeftSideBanner from './LeftSideBanner';

export default function Banner() {
	return (
		<section className='min-w-screen flex flex-col xl:flex-row'>
			<div className='bg-light-blue pt-10 basis-full p-5'>
				<LeftSideBanner />
			</div>
			<div className='basis-full pt-10 p-5'>
				<div className='flex items-center justify-center'>
					<div className='h-[300px] w-[300px] md:w-[380px] xl:h-[500px] xl:w-[500px]'>
						<img src={imgUrl} alt='banner' />
					</div>
				</div>
			</div>
		</section>
	);
}
