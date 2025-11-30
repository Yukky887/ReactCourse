import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useAutoScroll(chatMessages)

    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.length === 0 ? (
                <p className="welcome-paragraph">
                    Welcome to the chatbot project! Send a message using the textbox below.
                </p>
            ) : (
                chatMessages.map((chatMessage) => (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        time={chatMessage.time}
                        key={chatMessage.id}
                    />
                ))
            )}
        </div>
    );
}

function useAutoScroll(dependencies) {
    const chatMessagesRef = useRef(null);


    useEffect(() => {
        const containerElem = chatMessagesRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [dependencies]);

    return chatMessagesRef
}

export default ChatMessages;