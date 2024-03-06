import type { ReactElement } from 'react';

/**
 * @returns {ReactElement}
 */
function Footer(): ReactElement {
	return (
		<footer className='h-10 flex flex-row justify-center'>
			<p className='flex flex-row items-center'>
				Created by Artur Zaczek 2024
			</p>
		</footer>
	);
}

export default Footer;
