import { Modal } from '../Modal';

type ConfirmationModalProps = {
	children: React.ReactNode;
	isOpen: boolean;
	setState: React.Dispatch<React.SetStateAction<boolean>>;
	onClose?: (
		type: 'click' | 'esc',
		target: TargetWithAttributes,
		setState: React.Dispatch<React.SetStateAction<boolean>>,
		namedsAttrClose?: string[]
	) => void;
	namedAttrClose?: string[];
	onConfirm?: () => void;
	footer?: {
		hidden?: boolean;
		confirmText?: string;
		cancelText?: string;
	};
};

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
	children,
	isOpen,
	...props
}) => {
	return (
		<>
			<Modal title="Confirmação" children={children} isOpen={isOpen} {...props} />
		</>
	);
};
