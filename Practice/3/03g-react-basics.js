
function CounterApp() {
	const [count, setCount] = React.useState('');

	function saveTextInput(event) {
		setCount(event.target.value)
	}

	function resetName() {
		setCount('')
	}

	function exampleName() {
		setCount('Egor')
	}

	return (
		<>
			<>
				<input 
					onChange={saveTextInput}
					value={count}
				/>
				<button
					onClick={resetName}
				>Reset</button>
				<button
					onClick={exampleName}
				>Example</button>
			</>
			<p>Hello {count}</p>
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