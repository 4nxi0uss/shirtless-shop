'use client';
import type { MouseEvent } from 'react';
import Form from '../components/Form';
import Wrapper from '../components/Wrapper';
import style from '../styles/MainPage.module.css';

export default function Login() {
	const test = (e: MouseEvent) => {
		e.preventDefault();
	};

	return (
		<div className={style.page}>
			<Wrapper className='mt-32'>
				<h2 className='text-center'>Login</h2>
				<Form className='flex flex-col max-w-64 relative left-1/2 -translate-x-1/2'>
					<label htmlFor='login'>login</label>
					<input
						className='border border-black'
						type='text'
						id='login'
						name='login'
					/>
					<label className='mt-3' htmlFor='password'>
						Password
					</label>
					<input
						className='border border-black'
						type='password'
						id='password'
						name='password'
						autoComplete='password'
					/>
					<button
						onClick={test}
						className='bg-sky-300 mt-3 hover:bg-sky-500'
					>
						Login
					</button>
				</Form>
			</Wrapper>
		</div>
	);
}
