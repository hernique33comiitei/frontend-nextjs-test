import { useEffect, useState } from 'react';

import styles from '@/styles/lista.module.css';
import { ICity } from '@/types/city.d';

export default function Lista({ data }: any) {
	const [list, setUsers] = useState<Array<ICity>>([
		{
			id: new Date().getTime().toString(),
			name: 'São Paulo',
		},
	]);

	useEffect(() => {
		setUsers(data);
	}, [data]);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de cidades</h2>

				<div data-list-container>
					{list.map((city) => (
						<div data-list-item key={city.id}>
							{city.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	try {
		const response = await fetch(`${process.env['BASE_URL']}/api/cities/10`);
		const data = await response.json();

		if (!response.ok) throw new Error('Erro ao obter os dados');

		return {
			props: { data },
			revalidate: 60,
		};
	} catch (error) {
		const data: Array<any> = [];
		return {
			props: { data },
			revalidate: 60,
		};
	}
}
