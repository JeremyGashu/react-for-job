import { createContext, useState } from 'react';

export const MessagesContext = createContext();

const MessagesProvider = (props) => {
	
	const [messages, setMessage] = useState({
		user_id: 'gearmias',
		name: 'Ermias Gashu',
		selected_conversation: null,
		conversations: [
			{
				id: '1',
				name: 'Ariana Grande',
				isOnline : true,
				messages: [
					{
						time: new Date(),
						content: 'Hi Jeremy this is just to say Hi.',
						sender_id: 'arianagrande',
					},
					{ time: new Date(), content: "Hi Ariana What's up", sender_id: 'gearmias' },
					{ time: new Date(), content: 'I am good, what is new?', sender_id: 'arianagrande' },
					{
						time: new Date(),
						content: 'Nothing is new. I will call you sometime',
						sender_id: 'gearmias',
					},
				],
			},
			{
				id: '2',
				isOnline : false,
				name: 'Selena Gomez',
				messages: [
					{
						time: new Date(),
						content: 'Hi Jeremy this is just to say Hi.',
						sender_id: 'arianagrande',
					},
					{ time: new Date(), content: "Hi Selena What's up", sender_id: 'gearmias' },
					{ time: new Date(), content: 'I am good, what is new?', sender_id: 'arianagrande' },
					{
						time: new Date(),
						content: 'Nothing is new. I will call you sometime',
						sender_id: 'gearmias',
					},
				],
			},
			{
				id: '3',
				name: 'Kim Kardashian',
				isOnline : true,
				messages: [
					{
						time: new Date(),
						content: 'Hi Jeremy this is just to say Hi.',
						sender_id: 'arianagrande',
					},
					{ time: new Date(), content: "Hi Kim What's up", sender_id: 'gearmias' },
					{ time: new Date(), content: 'I am good, what is new?', sender_id: 'arianagrande' },
					{
						time: new Date(),
						content: 'Nothing is new. I will call you sometime',
						sender_id: 'gearmias',
					},
				],
			},
			{
				id: '4',
				name: 'Miley Cyrus',
				isOnline : true,
				messages: [
					{
						time: new Date(),
						content: 'Hi Jeremy this is just to say Hi.',
						sender_id: 'arianagrande',
					},
					{ time: new Date(),content: "Hi Miley What's up", sender_id: 'gearmias' },
					{ time: new Date(), content: 'I am good, what is new?', sender_id: 'arianagrande' },
					{
						time: new Date(),
						content: 'Nothing is new. I will call you sometime',
						sender_id: 'gearmias',
					},
				],
			},
			{
				id: '5',
				name: 'Michael Jacksn',
				messages: [
					{
						time: new Date(),
						content: 'Hi Jeremy this is just to say Hi.',
						sender_id: 'arianagrande',
					},
					{ time: new Date(), content: "Hi Michael What's up", sender_id: 'gearmias' },
					{ time: new Date(),content: 'I am good, what is new?', sender_id: 'arianagrande' },
					{
						time: new Date(),
						content: 'Nothing is new. I will call you sometime',
						sender_id: 'gearmias',
					},
				],
			},
			{
				id: '6',
				name: 'Tom Cruise',
				isOnline : false,
				messages: [
					{
						time: new Date(),
						content: 'Hi Jeremy this is just to say Hi.',
						sender_id: 'arianagrande',
					},
					{ time: new Date(), content: "Hi Tom What's up", sender_id: 'gearmias' },
					{ time: '01 Feb 2021 00:12:05', content: 'I am good, what is new?', sender_id: 'arianagrande' },
					{
						time: new Date(),
						content: 'Nothing is new. I will call you sometime',
						sender_id: 'gearmias',
					},
				],
			},
			{
				id: '7',
				name: 'Taylor Swift',
				isOnline : true,
				messages: [
					{
						time: new Date(),
						content: 'Hi Jeremy this is just to say Hi.',
						sender_id: 'arianagrande',
					},
					{ time: new Date(), content: "Hi Taylor What's up", sender_id: 'gearmias' },
					{ time: new Date(), content: 'I am good, what is new?', sender_id: 'arianagrande' },
					{
						time: new Date(),
						content: 'Nothing is new. I will call you sometime',
						sender_id: 'gearmias',
					},
				],
			},
			{
				id: '8',
				name: 'Beyonce',
				isOnline : false,
				messages: [
					{
						time: new Date(),
						content: 'Hi Jeremy this is just to say Hi.',
						sender_id: 'arianagrande',
					},
					{ time: new Date(), content: "Hi B What's up", sender_id: 'gearmias' },
					{ time: new Date(), content: 'I am good, what is new?', sender_id: 'arianagrande' },
					{
						time: new Date(),
						content: 'Nothing is new. I will call you sometime ',
						sender_id: 'gearmias',
					},
				],
			},
		],
	});

	const setSelectedConversation = (id) => {
		setMessage({...messages, selected_conversation : id})
	}
	
	const sendMessage = (sender, conversation_id, content) => {
		
		setMessage({
			...messages,
			conversations : messages.conversations.map(conversation => {
				if(conversation.id === conversation_id) {
					conversation.messages = [...conversation.messages, {time : new Date(), content, sender_id:sender}]
					return conversation
				}
				else{
					return conversation
				}
			})
		})
	}

	return <MessagesContext.Provider value={[messages, setMessage, setSelectedConversation, sendMessage]}>{props.children}</MessagesContext.Provider>;
};

export default MessagesProvider;
