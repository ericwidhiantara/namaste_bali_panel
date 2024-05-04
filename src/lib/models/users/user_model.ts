export class UserModel {
	page_number: number;
	page_size: number;
	total: number;
	total_pages: number;
	users: UserDataModel[];

	constructor(data: Partial<UserModel> = {}) {
		this.page_number = data.page_number || 0;
		this.page_size = data.page_size || 0;
		this.total = data.total || 0;
		this.total_pages = data.total_pages || 0;
		this.users = data.users || [];
	}
}

export class UserDataModel {
	id: string;
	name: string;
	username: string;
	email: string;
	phone: string;
	picture: string;
	created_at: number;
	updated_at: number;

	constructor(data: Partial<UserDataModel> = {}) {
		this.id = data.id || '';
		this.name = data.name || '';
		this.username = data.username || '';
		this.email = data.email || '';
		this.phone = data.phone || '';
		this.picture = data.picture || '';
		this.created_at = data.created_at || 0;
		this.updated_at = data.updated_at || 0;
	}
}
