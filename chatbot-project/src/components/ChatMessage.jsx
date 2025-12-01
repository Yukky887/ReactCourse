import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import LoadingSpinner from '../assets/loading-spinner.gif'
import './ChatMessage.css'

export function ChatMessage({ message, sender, time, isSpinner }) {
	console.log('ChatMessage props:', { message, sender, time, isSpinner });
	return (
		<div className={
			sender === "user"
				? "chat-message-user"
				: "chat-message-robot"
		}>
			{sender === "robot" && (
				<img src={RobotProfileImage} className="chat-message-profile" />
			)}
			<div className="chat-message-text">
				{isSpinner ?
					<img className="loading-spinner" src={LoadingSpinner} /> :
					message
				}
				<div className="chat-message-time">
					{time}
				</div>
			</div>
			
			{sender === "user" && (
				<img src={UserProfileImage} className="chat-message-profile" />
			)}
		</div>
	);
}