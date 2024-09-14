export interface IUser {
	id: number;
	name: string;
	email: string;
}

export type IUserCreate = Omit<IUser, 'id'>;
