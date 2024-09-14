import { RegisterOptions } from 'react-hook-form';

const nameObjConfig: RegisterOptions<Inputs, 'name'> = {
	required: {
		value: true,
		message: 'O campo Name é obrigatório',
	},
	minLength: {
		value: 10,
		message: 'O nome deve ter no mínimo 10 caracteres.',
	},
};

const emailObjConfig: RegisterOptions<Inputs, 'email'> = {
	required: {
		value: true,
		message: 'O campo Email é obrigatório',
	},
	pattern: {
		value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		message: 'Digite um email válido',
	},
};

export { nameObjConfig, emailObjConfig };
