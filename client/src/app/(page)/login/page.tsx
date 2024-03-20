'use client';
import { useState, type MouseEvent, type ReactElement } from 'react';
import Form from '@/app/components/Form';
import Wrapper from '@/app/components/Wrapper';
import style from '@/app/styles/MainPage.module.css';
import Link from 'next/link';
import { LOGIN_TITLE } from './Login.config';
import { REGISTER_TITLE } from '@/app/(page)/register/Register.config';
import { loginQuery } from '@/app/query/login.query';

/**
 * @returns {ReactElement}
 */
export default function Login(): ReactElement {
	const [formData, setFormData] = useState<LoginFormDataType>({
		email: '',
		password: '',
	});

	/**
	 * @param {MouseEvent} e
	 */
	const test = async (e: MouseEvent) => {
		e.preventDefault();

		console.log('test-1', e.target, formData);

		await loginQuery(formData);
	};

	const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	/**
	 * @returns {ReactElement}
	 */
	const decription = (): ReactElement => {
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

	const { email, password } = formData;

	return (
		<div className={style.page}>
			<Wrapper className='mt-32'>
				<h2 className='flex justify-center mb-3'>
					{LOGIN_TITLE}
				</h2>
				<Form className='flex flex-col max-w-[300px] relative left-1/2 -translate-x-1/2'>
					<label className='mt-3' htmlFor='email'>
						Email
					</label>
					<input
						className='border border-black'
						type='text'
						id='email'
						name='email'
						value={email}
						onChange={handleFormInput}
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
						value={password}
						onChange={handleFormInput}
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
