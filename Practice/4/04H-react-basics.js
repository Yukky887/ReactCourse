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

function App() {
	return (
		<>
			<LoginForm />
		</>
	);
	
}

const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App />);