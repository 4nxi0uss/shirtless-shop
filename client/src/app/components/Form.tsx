function Form({
	children,
	className = '',
}: Readonly<{ children: React.ReactNode; className?: string }>) {
	const classes = `Form ${className}`;

	return <form className={classes}>{children}</form>;
}

export default Form;
