import { NextApiRequest, NextApiResponse } from 'next/types';
import { IUser } from '@/types/user.d';

const paginate = (array: Array<IUser>, page: number, limit: number) => {
	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;
	return array.slice(startIndex, endIndex);
};

export default (req: NextApiRequest, res: NextApiResponse) => {
	const users: Array<IUser> = [
		{ id: 1, name: 'John Doe', email: 'john.doe@gmail.com' },
		{ id: 2, name: 'Jane Smith', email: 'jane.smith@yahoo.com' },
		{ id: 3, name: 'Alice Johnson', email: 'alice.johnson@outlook.com' },
		{ id: 4, name: 'Robert Brown', email: 'robert.brown@gmail.com' },
		{ id: 5, name: 'Emma Davis', email: 'emma.davis@protonmail.com' },
		{ id: 6, name: 'Michael Miller', email: 'michael.miller@hotmail.com' },
		{ id: 7, name: 'Sophia Wilson', email: 'sophia.wilson@icloud.com' },
		{ id: 8, name: 'William Moore', email: 'william.moore@gmail.com' },
		{ id: 9, name: 'Olivia Taylor', email: 'olivia.taylor@yahoo.com' },
		{ id: 10, name: 'Liam Anderson', email: 'liam.anderson@outlook.com' },
		{ id: 11, name: 'Charlotte Harris', email: 'charlotte.harris@gmail.com' },
		{ id: 12, name: 'James Walker', email: 'james.walker@yahoo.com' },
		{ id: 13, name: 'Benjamin Carter', email: 'benjamin.carter@outlook.com' },
		{ id: 14, name: 'Mia Robinson', email: 'mia.robinson@protonmail.com' },
		{ id: 15, name: 'Noah Martinez', email: 'noah.martinez@hotmail.com' },
		{ id: 16, name: 'Ava Lewis', email: 'ava.lewis@icloud.com' },
		{ id: 17, name: 'Logan Clark', email: 'logan.clark@gmail.com' },
		{ id: 18, name: 'Elijah Young', email: 'elijah.young@yahoo.com' },
		{ id: 19, name: 'Harper King', email: 'harper.king@outlook.com' },
		{ id: 20, name: 'Lucas Scott', email: 'lucas.scott@protonmail.com' },
		{ id: 21, name: 'Isabella Green', email: 'isabella.green@hotmail.com' },
		{ id: 22, name: 'Mason Adams', email: 'mason.adams@icloud.com' },
		{ id: 23, name: 'Amelia Nelson', email: 'amelia.nelson@gmail.com' },
		{ id: 24, name: 'Henry White', email: 'henry.white@yahoo.com' },
	];

	if (req.method === 'GET') {
		const { page = '1' } = req.query;

		const pageNumber = parseInt(page as string, 10);
		const limit = 5;
		const paginatedUsers = paginate(users, pageNumber, limit);

		if (paginatedUsers.length === 0) {
			return res.status(404).json({ error: 'Página não encontrada' });
		}

		return res.status(200).json({
			details: {
				currentPage: parseInt(page as string),
				totalPages: Math.ceil(users.length / limit),
			},
			users: paginatedUsers,
		});
	} else {
		return res.status(405).json({ error: 'Método não permitido' });
	}
};
