import Image from 'next/image';

function HeroBaner() {
	return (
		<div className=''>
			<Image
				src='/1000_F_304025842_YkdBbxD8C0rO1sHCvC8qM1LOSGVy7tvV.jpg'
				width={1000}
				height={376}
				alt='hero banner'
				className='relative left-1/2 -translate-x-1/2 aspect-auto'
			/>
		</div>
	);
}

export default HeroBaner;
