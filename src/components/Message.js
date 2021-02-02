import React, {useContext} from 'react';
import moment from 'moment'
import { MessagesContext } from '../providers/MessagesProvider';

const Message = ({ message }) => {
    const [messages, setMessages, setSelectedConversation, sendMessage] = useContext(MessagesContext);

	return (
		<div onClick={() => {setSelectedConversation(message.id)}} className="message">
			<div className="image-container">
				<img alt='Profile' src={`https://source.unsplash.com/user/jeremy/70x70`} />
			</div>
			<div className="name-and-content">
				<div className="name-container">
					<p className="name">{message.name}</p>
				</div>
				<div className="content-container">
					<p className="content truncate">{message.messages[message.messages.length-1].content}</p>
				</div>
			</div>
			<div className="time-container">
				<p className="time">{moment(message.messages[message.messages.length-1].time).format('hh:mm A')}</p>
			</div>
		</div>
	);
};

export default Message;
