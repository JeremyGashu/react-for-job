import React, { useContext } from 'react';
import moment from 'moment';
import { MessagesContext } from '../providers/MessagesProvider';
import '../styles.css';
import SendMessage from './SendMessage';

const MessageDetail = ({ conversation }) => {
	const [messages, setMessages, setSelectedConversation, sendMessage] = useContext(MessagesContext);
	const selectedConversation = messages.conversations.filter((message) => {
		return message.id === conversation;
	});
	const convs = selectedConversation[0].messages.map((mes) => {
		// const classnames = 'messages

		let cn = messages.user_id === mes.sender_id ? 'mine' : 'external';
		return (
			<div key={Math.random()} className={`${cn}`}>
				<p
					message-time={moment(mes.time).fromNow()}
					className="message-content"
				>
					{mes.content}
				</p>
				{/* <p className='message-time'>{}</p> */}
			</div>
		);
	});

	return (
		<div className="detail-container">
			<div className="details">
				<div className="profile">
					<div className="profile-pic">
						<img alt="Profile" src={`https://source.unsplash.com/user/jeremy/70x70`} />
					</div>

					<div className="name">
						<p>{selectedConversation[0].name}</p>
					</div>
				</div>
			</div>
			<div className="messages">{convs}</div>
            <SendMessage />
		</div>
	);
};

export default MessageDetail;
