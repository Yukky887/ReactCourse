
function CounterApp() {
	const [isButtonOn, setIsButtonOn] = React.useState(false);

	return (
		<>
			<button
				onClick={() => {
					setIsButtonOn((prev) => !prev);
				}}
				className={isButtonOn ? "button-on" : "button-off"}
			>{isButtonOn ? 'ON' : 'OFF'}</button>
		</>
	);
}

function App() {
	return (
		<>
			<CounterApp />
		</>
	);
	
}

const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App />);