import { useEffect, useState } from 'react';

import styles from '@/styles/lista.module.css';
import { IUser, IUsersReturnList } from '@/types/user';

export default function Lista() {
	const [users, setUsers] = useState<Array<IUser>>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);

	async function getUsersList(page: number) {
		try {
			const response = await fetch(`/api/users?page=${page}`);
			const data: IUsersReturnList = await response.json();

			if (!response.ok) throw new Error('Erro ao obter os dados');

			setUsers(data.users);
			setTotalPages(data.details.totalPages);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getUsersList(page);
	}, [page]);

	const nextPage = () => {
		if (page < totalPages) {
			setPage(page + 1);
		}
	};

	const prevPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de usuários</h2>

				<div data-list-container>
					{users &&
						users.map((userData) => (
							<div key={userData.id} data-list-item>
								{userData.id} - {userData.name} ({userData.email})
							</div>
						))}
				</div>

				<div className={styles.pagination}>
					<button onClick={prevPage} disabled={page === 1}>
						Anterior
					</button>
					<span>
						Página {page} de {totalPages}
					</span>
					<button onClick={nextPage} disabled={page === totalPages}>
						Próxima
					</button>
				</div>
			</div>
		</div>
	);
}
