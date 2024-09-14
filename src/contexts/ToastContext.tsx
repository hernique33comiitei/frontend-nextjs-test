import React, { createContext, useContext, useState } from 'react';
import { IToastMessage } from '@/types/toast-message';

type ToastContextType = {
	messages: Array<IToastMessage>;
	addMessage: (message: IToastMessage) => void;
	removeMessage: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
	const [messages, setMessages] = useState<Array<IToastMessage>>([]);

	function addMessage(message: IToastMessage) {
		setMessages((prevMessages) => [...prevMessages, message]);

		setTimeout(() => {
			setMessages((prevMessages) => prevMessages.filter((m) => m.id !== message.id));
		}, 3000);
	}

	function removeMessage(id: string) {
		setMessages((prevMessages) => prevMessages.filter((m) => m.id !== id));
	}

	return (
		<ToastContext.Provider value={{ messages, addMessage, removeMessage }}>
			{children}
		</ToastContext.Provider>
	);
};

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return context;
};
