export interface IUser {
	id: number;
	name: string;
	email: string;
}

export type IUserCreate = Omit<IUser, 'id'>;

interface IUsersReturnList {
	details: {
		currentPage: number;
		totalPages: number;
	};
	users: IUser[];
}
