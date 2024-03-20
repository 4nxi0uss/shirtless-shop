interface LoginFormDataType {
	email: string;
	password: string;
}

interface RegisterFormDataType extends LoginFormDataType {
	repeatPassword: string;
	userName: string;
	surname: string;
}
