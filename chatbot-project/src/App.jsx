import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import { Chatbot } from 'supersimpledev'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
	const [chatMessages, setChatMessages] = useState(() =>{
		try {
			const savedMessages = localStorage.getItem('messages');
			return savedMessages ? JSON.parse(savedMessages) : [];
		} catch {
			return [];
		}
	});

	useEffect(() => {
		Chatbot.addResponses({
			"q": "Salam",
			"boobs": "hehehe;)"
		});
	}, []);

	useEffect(() => {
		localStorage.setItem('messages', JSON.stringify(chatMessages));
	}, [chatMessages]);

	return (
		<div className="app-container">
			<ChatMessages
				chatMessages={chatMessages}
			/>
			<ChatInput
				chatMessages={chatMessages}
				setChatMessages={setChatMessages}
			/>
		</div>
	);
}

export default App
