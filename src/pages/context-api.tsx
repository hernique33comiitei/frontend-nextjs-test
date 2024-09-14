import { useToast } from '@/contexts/ToastContext';
import { ToastMessage } from '@/components/ToastMessage';
import styles from '@/styles/context-api.module.css';

export default function ContextApi() {
	const { messages, addMessage } = useToast();

	function handleSuccessButtonClick() {
		addMessage({
			id: new Date().getTime().toString(),
			message: 'Mensagem de sucesso',
			type: 'success',
		});
	}

	function handleErrorButtonClick() {
		addMessage({
			id: new Date().getTime().toString(),
			message: 'Mensagem de erro',
			type: 'error',
		});
	}

	return (
		<>
			<div className={styles.container}>
				<button type="button" onClick={handleSuccessButtonClick}>
					Disparar mensagem de sucesso
				</button>
				<button type="button" onClick={handleErrorButtonClick}>
					Disparar mensagem de erro
				</button>
			</div>

			<div className={styles['toast-container']}>
				{messages.map((message) => (
					<ToastMessage key={message.id} content={message} />
				))}
			</div>
		</>
	);
}
