import { useState } from 'react'
import './LoginForm.css'

function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);

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

export default LoginForm;