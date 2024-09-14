import { IToastMessage } from '@/types/toast-message.d';

import styles from './style.module.css';
import { useToast } from '@/contexts/ToastContext';

type ToastMessageProps = {
	content: IToastMessage;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({ content: data }) => {
	const { removeMessage } = useToast();

	return (
		<div className={styles.container} data-toast-type={data.type} data-toast-id={data.id}>
			<span data-content>{data.message}</span>

			<span
				onClick={() => {
					removeMessage(data.id);
				}}
				data-close
			>
				╳
			</span>
		</div>
	);
};
