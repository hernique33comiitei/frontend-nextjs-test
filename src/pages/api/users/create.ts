import { NextApiRequest, NextApiResponse } from 'next/types';
import { IUser, IUserCreate } from '@/types/user.d';

const users: IUser[] = [];

export default (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const userData: IUserCreate = req.body;

		if (!userData || !userData.name || !userData.email) {
			return res.status(400).json({ error: 'Nome e e-mail são obrigatórios' });
		}

		const newUser: IUser = {
			id: users.length + 1,
			...userData,
		};

		users.push(newUser);

		return res.status(201).json(newUser);
	} else {
		return res.status(405).json({ error: 'Método não permitido' });
	}
};
