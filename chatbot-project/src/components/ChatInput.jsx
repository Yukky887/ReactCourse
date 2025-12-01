import { useState } from 'react'
import { Chatbot } from 'supersimpledev'

import dayjs from 'dayjs'
import './ChatInput.css'

export function ChatInput({ setChatMessages }) {
	const [inputText, setInputText] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	function saveInputText(event) {
		setInputText(event.target.value);
	}

	async function sendMessage() {
		if (isLoading) {
			return;
		}

		setIsLoading(true);

		setChatMessages(prev => [
			...prev,
			{
				message: inputText,
				sender: 'user',
				time: dayjs().format('HH:mm'),
				id: crypto.randomUUID(),
				isSpinner: false
			}
		]);

		setChatMessages(prev => [
			...prev,
			{
				message: null,
				sender: 'robot',
				time: dayjs().format('HH:mm'),
				id: crypto.randomUUID(),
				isSpinner: true
			}
		]);

		const response = await Chatbot.getResponseAsync(inputText);

		setChatMessages(prev => [
			...prev.slice(0, prev.length - 1),
			{
				message: response,
				sender: 'robot',
				time: dayjs().format('HH:mm'),
				id: crypto.randomUUID(),
				isSpinner: false
			}
		])

		setIsLoading(false);

	}

	return (
		<div className="chat-input-container">
			<input
				placeholder="Send message to Chatbot"
				size="30"
				onChange={saveInputText}
				value={inputText}
				onKeyDown={(event) => {
					if (event.key === 'Enter' && inputText !== "" && !isLoading) {
						sendMessage();
						setInputText('');
					}

					if (event.key === "Escape") {
						setInputText('');
					}
				}}
				className="chat-input"
			/>
			<button
				onClick={() => {
					if (inputText !== "") {
						sendMessage();
						setInputText('');
					}
				}}
				className="send-button"
			>Send</button>
			<button
				onClick={() => {
					localStorage.clear();
					setChatMessages([]);
				}}
				className="clear-button"
			>Clear</button>
		</div>
	);
}