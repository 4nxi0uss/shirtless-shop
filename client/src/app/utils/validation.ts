/**
 * @param {Readonly<string>} email
 * @returns {Boolean}
 */
export const emailValidation = (email: Readonly<string>): Boolean => {
	const val = email
		.toLowerCase()
		.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

	return Boolean(val);
};

/**
 * @param {Readonly<string>} pass
 * @returns {Boolean}
 */
export const passwordValidation = (pass: Readonly<string>): Boolean => {
	const oneDigit = '(?=.*?[0-9])';
	const oneUpper = '(?=.*?[A-Z])';
	const oneLower = '(?=.*?[a-z])';
	const oneSpecial = '(?=.*?[#?!@$%^&*-])';
	const min8 = '.{8,}';

	const conditionList = [oneDigit, oneUpper, oneLower, oneSpecial, min8];
	const res = { val: true };

	conditionList.forEach((el) => (pass.match(el) ? '' : (res.val = false)));

	const { val: resVal } = res;

	return resVal;
};
