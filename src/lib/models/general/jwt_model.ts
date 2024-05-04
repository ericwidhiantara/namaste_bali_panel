import { UserDataModel } from '$lib/models/users/user_model';

export class JWTModel {
	exp: number;
	sub: number;
	user: UserDataModel;

	constructor(data: Partial<JWTModel> = {}) {
		this.exp = data.exp || 0;
		this.sub = data.sub || 0;
		this.user = data.user || new UserDataModel();
	}
}
