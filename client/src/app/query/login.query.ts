/**
 * @async
 * @param {LoginFormDataType} data - [login data email and password]
 */
export const loginQuery = async (data: LoginFormDataType) => {
	const serializedData = JSON.stringify(data);

	try {
		const res = await fetch('http://localhost:3022/users/login', {
			method: 'POST',
			body: serializedData,
			headers: {
				'content-type': 'application/json',
			},
		});

		console.log(res);
		if (res.ok) {
			console.log('Yeai!');
		} else {
			console.error('Oops! Something is wrong.');
		}
	} catch (error) {
		console.error(error);
	}
};

export const registerQuery = async (data: RegisterFormDataType) => {
	const { repeatPassword, ...rest } = data;
	const serializedData = JSON.stringify(rest);

	try {
		const res = await fetch('http://localhost:3022/users/register', {
			method: 'POST',
			body: serializedData,
			headers: {
				'content-type': 'application/json',
			},
		});

		console.log(res);
		if (res.ok) {
			console.log('test-4', res.formData);
			console.log('test-41', res.data);
		} else {
			console.error('Oops! Something is wrong.');
		}
	} catch (error) {
		console.error(error);
	}
};
