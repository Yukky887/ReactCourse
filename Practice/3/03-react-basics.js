
function CounterApp({count, setCount}) {
	return (
		<>
			<button
				onClick={() => {
					setCount((count) => {
						count++;
						return count
					})
				}}
			> {count === 1 ? `Clicked ${count} time` : `Clicked ${count} times`}</button>
		</>
	);
}

function CounterApp2({count, setCount}) {
	return (
		<>
			<button
				onClick={() => {
					setCount((count) => {
						count++;
						return count
					})
				}}
			> {count === 1 ? `Clicked ${count} time` : `Clicked ${count} times`}</button>
		</>
	);
}



function App() {
	const [count, setCount] = React.useState(0);

	function ResetCounter() {
		return (
			<button
				onClick={() => {
					setCount(0)
				}}
			>Reset</button>
		)
	}

	return (
		<>
			<CounterApp 
				count = {count}
				setCount = {setCount}
			/>
			<CounterApp2 
				count = {count}
				setCount = {setCount}
			/>
			<ResetCounter />
		</>
	);
	
}

const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App />);