function LoginForm() {
	const [showPassword, setShowPassword] = React.useState(false);

	return (
		<>
			<p className="title-text">Hello, welcome to my website</p>
			<div className="input-email-container">
				<input className="input-email" placeholder="Email" />
			</div>
			<div>
				<input className="input-email" placeholder="Password" type={showPassword ? "text" : "password"} />
				<button 
					className="button" 
					onClick={() => {
						setShowPassword((prev) => !prev)
					}}
				>Show</button>
			</div>
			<button className="button" >Login</button>
			<button className="button" >Sign up</button>
		</>
	);
}

function Clock() {
	const [currentTime, setCurrentTime] = React.useState(dayjs().format('HH:mm:ss'));
	
	React.useEffect(() => {
		setInterval(() => {
			setCurrentTime(dayjs().format('HH:mm:ss'));
		}, 1000);
	}, []);

	return (
		<p>Current time: { currentTime }</p>
	);
}

function CounterApp() {
	const [count, setCount] = React.useState(0);
	const [autoClick, setAutoClick] = React.useState(false);
	const countRef = React.useRef(null);

	React.useEffect(() => {
		if (!autoClick) return;

		const buttonElement = countRef.current;

		setInterval(() => {
			buttonElement.click();
		}, 1000)
	}, [autoClick]);


	return (
		<>
			<button
				ref={countRef}
				onClick={() => {
					setCount((prevCount) => prevCount + 1);
				}}
			> {count === 1 ? `Clicked ${count} time` : `Clicked ${count} times`}</button>
			<button onClick={() => setCount(0)}> Reset </button>

			<button
				onClick={() => setAutoClick((prev) => !prev)}
			>{autoClick ? "Stop Auto Click" : "Start Auto Click"}</button>
		</>
	);
}

function App() {
	return (
		<>
			<LoginForm />
			<Clock />
			<CounterApp />
		</>
	);
	
}

const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App />);