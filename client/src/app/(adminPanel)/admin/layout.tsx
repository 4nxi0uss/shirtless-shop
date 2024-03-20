import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { Inter } from 'next/font/google';
import '@/app/styles/globals.css';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Admin page',
	description: 'Admin page',
};

const rootRender = ({children}: {children: React.ReactNode}): ReactElement => {

	console.log('test-6', children);
	
	return (
		<html lang='en'>
			<body className={inter.className}>
				<p>ewq</p>
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default rootRender;
