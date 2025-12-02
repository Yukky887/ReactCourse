import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

function Clock() {
	const [currentTime, setCurrentTime] = useState(dayjs().format('HH:mm:ss'));
	
	useEffect(() => {
		setInterval(() => {
			setCurrentTime(dayjs().format('HH:mm:ss'));
		}, 1000);
	}, []);

	return (
		<p>Current time: { currentTime }</p>
	);
}

export default Clock;