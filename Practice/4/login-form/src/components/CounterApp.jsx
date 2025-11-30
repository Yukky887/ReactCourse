import { useState, useEffect, useRef } from 'react'

function CounterApp() {
	const [count, setCount] = useState(0);
	const [autoClick, setAutoClick] = useState(false);
	const countRef = useRef(null);

	useEffect(() => {
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

export default CounterApp;