import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingSpinner from '../assets/loading-spinner.gif'
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
				id: crypto.randomUUID()
			}
		]);

		setChatMessages(prev => [
			...prev,
			{
				message: <img className="loading-spinner" src={LoadingSpinner} />,
				sender: 'robot',
				id: crypto.randomUUID()
			}
		]);

		const response = await Chatbot.getResponseAsync(inputText);

		setChatMessages(prev => [
			...prev.slice(0, prev.length - 1),
			{
				message: response,
				sender: 'robot',
				id: crypto.randomUUID()
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
		</div>
	);
}