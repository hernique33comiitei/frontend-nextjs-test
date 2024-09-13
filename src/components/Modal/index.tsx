import styles from './style.module.css';

type ModalProps = {
	children: React.ReactNode;
	title: string;
	isOpen: boolean;
	onClose?: (
		type: 'click' | 'esc',
		target: TargetWithAttributes,
		namedAttrClose?: string[]
	) => void;
	onConfirm?: () => void;
	footer?: {
		hidden?: boolean;
		confirmText?: string;
		cancelText?: string;
	};
};

/**
 * @fileoverview Implementa a lógica para o componente de modal, incluindo o gerenciamento
 * do estado de abertura e fechamento do modal. Esta atualização específica trata do fechamento
 * do modal com base em dois eventos:
 *
 * 1. Pressionamento da tecla ESC quando o foco está dentro de um campo de input.
 * 2. Clique do mouse em um elemento HTML cujo atributo corresponde ao especificado
 *    no terceiro parâmetro da função `onClose`.
 *
 * @author Henrique Oliveira - GitHub<hernique33comiitei>
 * @since 2024-09-13
 */

export const Modal: React.FC<ModalProps> = ({ children, title, isOpen, ...props }) => {
	function handleCloseClick(e: React.MouseEvent) {
		props.onClose?.('click', e.target, ['data-modal-close', 'data-modal-cancel']);
	}

	function handleConfirmClick(e: React.MouseEvent) {
		props.onConfirm?.();
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
		if (e.key === 'Escape') props.onClose?.('esc', e.target);
	}

	if (!isOpen) return null;

	return (
		<div
			data-modal-wrapper
			className={styles.wrapper}
			onClick={handleCloseClick}
			onKeyDown={handleKeyDown}
		>
			<div data-modal-container>
				<header data-modal-header>
					<h2>{title}</h2>

					<button data-modal-close onClick={handleCloseClick}>
						X
					</button>
				</header>

				{children}

				{!props.footer?.hidden && (
					<div data-modal-footer>
						<button data-modal-cancel onClick={handleCloseClick}>
							{props.footer?.cancelText ?? 'Cancelar'}
						</button>

						<button data-modal-confirm onClick={handleConfirmClick} data-type="confirm">
							{props.footer?.confirmText ?? 'Confirmar'}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
