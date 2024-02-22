function Wrapper({
	children,
	className = '',
}: Readonly<{ children: React.ReactNode; className?: string }>) {
	const classes = `Wrapper relative max-w-7xl left-1/2 -translate-x-1/2  w-screen ${className}`;

	return <div className={classes}>{children}</div>;
}

export default Wrapper;
