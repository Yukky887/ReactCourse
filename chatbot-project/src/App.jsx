import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import { Chatbot } from 'supersimpledev'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
	const [chatMessages, setChatMessages] = useState([]);

	useEffect(() => {
		console.log("addResponses")
		Chatbot.addResponses({
			"q": "Salam",
			"boobs": "hehehe;)"
		});
	}, []);

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
