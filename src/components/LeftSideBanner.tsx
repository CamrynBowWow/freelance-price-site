export default function LeftSideBanner() {
	return (
		<div className='max-w-xl h-[400px] xl:h-full mx-auto flex flex-col gap-5 sm:gap-10 items-center text-center justify-center'>
			<h1 className='text-pretty capitalize text-2xl sm:text-3xl md:text-4xl font-semibold'>
				We <span className='font-bold text-white tracking-wider'>kick start</span> your{' '}
				<span className='font-bold text-white tracking-wider uppercase'>business</span> into the
				next <span className='font-bold uppercase text-white tracking-wider'>level</span>
			</h1>
			<h2 className='text-pretty w-80 sm:w-full text-sm sm:text-lg md:text-xl tracking-normal sm:tracking-tight font-semibold sm:font-light'>
				Getting your local business on the map for all the world to see. Check out what we offer and
				how we can help you grow!
			</h2>
		</div>
	);
}
