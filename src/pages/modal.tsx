import { useState } from 'react';

import styles from '@/styles/modal.module.css';
import { Modal } from '@/components/Modal';
import { handleModalClose } from '@/utils/modal';

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleModalConfirm() {
		setModalIsOpen(false);
		alert('confirmado');
	}

	function renderModalContent() {
		return (
			<div data-modal-content className={styles['modal-form']}>
				<form onSubmit={() => false}>
					<div>
						<label htmlFor="input-name">Nome</label>
						<input type="text" id="input-name" placeholder="Insira um nome" />
					</div>

					<div>
						<label htmlFor="input-name">E-mail</label>
						<input type="email" id="input-name" placeholder="Insira um e-mail válido" />
					</div>
				</form>
			</div>
		);
	}

	return (
		<>
			<main className={styles.container}>
				<button type="button" onClick={() => setModalIsOpen(true)}>
					Abrir modal
				</button>
			</main>

			{/* modal */}
			<Modal
				isOpen={modalIsOpen}
				title="Criar novo usuário"
				onClose={handleModalClose}
				namedAttrClose={['data-modal-close', 'data-modal-cancel']}
				onConfirm={handleModalConfirm}
				setState={setModalIsOpen}
				footer={{ confirmText: 'Criar usuário' }}
			>
				{renderModalContent()}
			</Modal>
		</>
	);
}
