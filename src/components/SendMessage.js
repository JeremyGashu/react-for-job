import React, { useState, useContext } from 'react';
import send_button from '../assets/send-button.svg';
import { MessagesContext } from '../providers/MessagesProvider';


const SendMessage = () => {
    const [message, setMessage] = useState('')
    const [messages, setMessages, setSelectedConversation, sendMessage] = useContext(MessagesContext);


    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(message !== '') {
            sendMessage(messages.user_id, messages.selected_conversation, message)
            setMessage('')
        }   
    }

    const handleClick = () => {
        if(message !== '') {
            sendMessage(messages.user_id, messages.selected_conversation, message)
            setMessage('')
        }  
    }

	return (
		<div className="send-message-area">
			<form onSubmit={e => handleSubmit(e)}>
				<div className="input-wrapper">
					<input autoComplete='off' onChange={(e) => handleOnChange(e)} value={message} type="text" id="date" name="message" placeholder="Enter your message here" />
				</div>
                <span onClick={handleClick}><img style={{width:'40px',cursor:'pointer', padding:'5px', position:'fixed',right:'20px', bottom:'15px'}} src={send_button} alt=""/></span>
			</form>
		</div>
	);
};

export default SendMessage;
