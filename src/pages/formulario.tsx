import { useForm, SubmitHandler } from 'react-hook-form';

import styles from '@/styles/formulario.module.css';
import { emailObjConfig, nameObjConfig } from '@/utils/form';

export default function Form() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const url = `/api/users/create`;

		const postCreateUser = await fetch(url, {
			method: 'post',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		const responseCreatedUser = await postCreateUser.json();

		console.log(responseCreatedUser);

		// Aqui poderiamos, chamar o toastMsg, limpar os inputs, fazer redirects
		// Tudo depende da regra de negócio
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* Esses input poderiam ser refatorados para um componente separado. 
    				Dessa forma, poderíamos passar todas as propriedades necessárias 
    				por meio de props, tornando o código mais modular e reutilizável. */}
					<input type="text" placeholder="Name" {...register('name', nameObjConfig)} />
					{errors.name && (
						<span className={styles.textFieldRequired}>{errors.name.message}</span>
					)}

					<input
						type="text"
						placeholder="E-mail"
						{...register('email', emailObjConfig)}
					/>
					{errors.email && (
						<span className={styles.textFieldRequired}>{errors.email.message}</span>
					)}

					<button type="submit" data-type="confirm">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
}
