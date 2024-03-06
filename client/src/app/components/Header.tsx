import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/Header.module.css';
import Wrapper from './Wrapper';
import type { ReactElement } from 'react';

/**
 * @returns {ReactElement}
 */
export default function Header(): ReactElement {
	return (
		<header className='h-16 border-b border-b-black'>
			<Wrapper>
				<div className='flex flex-row flex-nowrap relative left-1/2 -translate-x-1/2 max-w-5xl justify-between h-full items-center px-5'>
					<div>
						<Image
							src='/t-shirt.svg'
							width='50'
							height='50'
							alt='logo'
						/>
					</div>
					<nav className=' w-auto'>
						<Link href='/' className={style.Link}>
							Home
						</Link>
						<Link href='/men' className={style.Link}>
							Men
						</Link>
						<Link href='/women' className={style.Link}>
							Women
						</Link>
						<Link href='/login' className={style.Link}>
							Login
						</Link>
					</nav>
				</div>
			</Wrapper>
		</header>
	);
}
