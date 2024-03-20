'use client';
import type { MouseEvent } from 'react';
import Form from '@/app/components/Form';
import Wrapper from '@/app/components/Wrapper';
import style from '@/app/styles/MainPage.module.css';
import Link from 'next/link';
import { LOGIN_TITLE } from './Login.config';
import { REGISTER_TITLE } from '../register/Register.config';

export default function Login() {
	const test = (e: MouseEvent) => {
		e.preventDefault();
	};

	const decription = () => {
		return (
			<div>
				<p>
					If you do not have account, please
					<Link
						href='/register'
						className='text-sky-800 hover:text-sky-500 font-bold'
					>
						{' '}
						{REGISTER_TITLE}
					</Link>
				</p>
			</div>
		);
	};

	return (
		<div className={style.page}>
			<Wrapper className='mt-32'>
				<h2 className='flex justify-center mb-3'>
					{LOGIN_TITLE}
				</h2>
				<Form className='flex flex-col max-w-[300px] relative left-1/2 -translate-x-1/2'>
					<label className='mt-3' htmlFor='login'>
						Email
					</label>
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
						className='bg-sky-500 mt-3 hover:bg-sky-300'
					>
						{LOGIN_TITLE}
					</button>
					{decription()}
				</Form>
			</Wrapper>
		</div>
	);
}
