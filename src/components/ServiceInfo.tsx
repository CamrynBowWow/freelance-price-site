import { AboutService, HowServiceWorks } from '../content/service';

export default function ServiceInfo() {
	return (
		<section className='w-full flex flex-col gap-20 lg:mt-10'>
			<div className='mx-auto max-w-fit mt-10 md:mt-20 serviceInfo-child-container'>
				<h2 className='text-black serviceInfo-child-container-h2'>How we work</h2>
				<div className='flex flex-col lg:flex-row gap-12 lg:gap-16'>
					{HowServiceWorks.map((value, index) => (
						<div className='bg-light-blue serviceInfo-child-container-child' key={index}>
							<h3 className='text-white  serviceInfo-child-container-h3'>{value.title}</h3>
							<p className='serviceInfo-child-container-p'>{value.content}</p>
						</div>
					))}
				</div>
			</div>
			<div className='bg-light-blue'>
				<div className='mx-auto max-w-fit mt-10 md:mt-20 mb-10 md:mb-20 serviceInfo-child-container'>
					<h2 className='text-white serviceInfo-child-container-h2'>What we offer</h2>

					<div className='grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid gap-y-10 gap-x-10 max-w-7xl'>
						{AboutService.map((value, index) => (
							<div className='bg-white serviceInfo-child-container-child' key={index}>
								<h3 className='serviceInfo-child-container-h3'>{value.title}</h3>
								<p className='serviceInfo-child-container-p'>{value.content}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
