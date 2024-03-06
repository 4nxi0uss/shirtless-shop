import { ReactElement } from 'react';

/**
 * @param {React.ReactNode} children
 * @param {string}
 * @returns {ReactElement}
 */
function Form({
	children,
	className = '',
}: Readonly<{ children: React.ReactNode; className?: string }>): ReactElement {
	const classes = `Form ${className}`;

	return <form className={classes}>{children}</form>;
}

export default Form;
