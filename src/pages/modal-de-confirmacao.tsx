/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';

import stylesModal from '@/styles/modal.module.css';
import stylesModalConfirmation from '@/styles/modal-de-confirmacao.module.css';

import { handleModalClose } from '@/utils/modal';
import { ConfirmationModal } from '@/components/ConfirmationModal';

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleModalConfirm() {
		setModalIsOpen(false);
		alert('Projeto deletado');
	}

	return (
		<>
			<main className={stylesModal.container}>
				<button type="button" onClick={() => setModalIsOpen(true)}>
					Abrir modal de confirmação
				</button>
			</main>

			<ConfirmationModal
				isOpen={modalIsOpen}
				onClose={handleModalClose}
				namedAttrClose={['data-modal-close', 'data-modal-cancel']}
				setState={setModalIsOpen}
				onConfirm={handleModalConfirm}
			>
				<>
					<p className={stylesModalConfirmation.deleteProjectText}>
						Deseja excluir o projeto?
					</p>
				</>
			</ConfirmationModal>
		</>
	);
}
