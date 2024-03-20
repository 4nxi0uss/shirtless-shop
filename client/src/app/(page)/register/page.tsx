'use client';
import { useState } from 'react';
import type { MouseEvent, ReactElement } from 'react';
import Form from '@/app/components/Form';
import Wrapper from '@/app/components/Wrapper';
import style from '@/app/styles/MainPage.module.css';
import Link from 'next/link';
import { REGISTER_TITLE } from './Register.config';

import { emailValidation, passwordValidation } from '@/app/utils/validation';
import { registerQuery } from '@/app/query/login.query';
import { LOGIN_TITLE } from '@/app/(page)/login/Login.config';

export default function Register(): ReactElement {
	const [formData, setFormData] = useState<RegisterFormDataType>({
		email: '',
		password: '',
		repeatPassword: '',
		userName: '',
		surname: '',
	});

	/**
	 * @param {MouseEvent} e
	 */
	const OnClickSubmit = async (e: MouseEvent) => {
		e.preventDefault();

		const { email, password, repeatPassword } = formData;

		if (
			passwordValidation(password) &&
			emailValidation(email) &&
			password === repeatPassword
		) {
			await registerQuery(formData);
		}
	};

	/**
	 * @param {React.ChangeEvent<HTMLInputElement>} e - event
	 */
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
						href='/login'
						className='text-sky-800 hover:text-sky-500 font-bold'
					>
						{' '}
						{LOGIN_TITLE}
					</Link>
				</p>
			</div>
		);
	};

	/**
	 * @returns {ReactElement}
	 */
	const registerInfo = (): ReactElement => {
		return (
			<div className='flex flex-col items-center relative left-1/2 -translate-x-1/2'>
				<p>Password needs to have:</p>
				<ul>
					<li>min 8 charakters</li>
					<li>min 1 digit</li>
					<li>min 1 capital letter</li>
					<li>min 1 special sign</li>
					<li>min 1 lower-case letter</li>
				</ul>
			</div>
		);
	};

	const { email, password, repeatPassword, userName, surname } = formData;

	return (
		<div className={style.page}>
			<Wrapper className='mt-32'>
				<h2 className='flex justify-center mb-3'>
					{REGISTER_TITLE}
				</h2>
				{registerInfo()}
				<Form className='flex flex-col max-w-[300px] relative left-1/2 -translate-x-1/2'>
					<label className='mt-3' htmlFor='name'>
						Name
					</label>
					<input
						className='border border-black'
						type='text'
						id='name'
						name='userName'
						value={userName}
						onChange={handleFormInput}
					/>
					<label className='mt-3' htmlFor='surname'>
						Surname
					</label>
					<input
						className='border border-black'
						type='surname'
						id='surname'
						name='surname'
						value={surname}
						onChange={handleFormInput}
					/>
					<label className='mt-3' htmlFor='password'>
						Email
					</label>
					<input
						className='border border-black'
						type='email'
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
					<label className='mt-3' htmlFor='password'>
						Repeat Password
					</label>
					<input
						className='border border-black'
						type='password'
						id='repeatPassword'
						name='repeatPassword'
						autoComplete='password'
						value={repeatPassword}
						onChange={handleFormInput}
					/>
					<button
						onClick={OnClickSubmit}
						className='bg-sky-500 mt-3 hover:bg-sky-300'
						type='submit'
					>
						{REGISTER_TITLE}
					</button>
					{decription()}
				</Form>
			</Wrapper>
		</div>
	);
}
