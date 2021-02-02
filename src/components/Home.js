import React, { useContext } from 'react';
import { MessagesContext } from '../providers/MessagesProvider';
import Message from './Message';
import '../styles.css';
import MessageDetail from './MessageDetail';
import UnselectedConversationDisplay from './UnselectedConversationDisplay';

const Home = () => {
    const [messages, setMessages, setSelectedConversation, sendMessage] = useContext(MessagesContext);
	const conversations = messages.conversations.map((item) => {
		return <Message key={Math.random()} message={item}></Message>;
	});
	return (
		<div className="main-container">
			<div className="messages-container">
				<div className="messages-header">
					<p style={{ fontFamily: 'Arial', fontWeight: 'bolder', fontSize: '25px', padding: '10px', color:"#444"}}>
						Messages
					</p>
				</div>
				{conversations}
			</div>
            <div className="detail-container">
                {messages.selected_conversation ? <MessageDetail conversation={messages.selected_conversation} /> : <UnselectedConversationDisplay />}
            </div>
		</div>
	);
};

export default Home;
