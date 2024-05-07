import { UserDataModel } from '$lib/models/users/user_model';
import type { JwtPayload } from 'jwt-decode';

export interface ExtendedJwt extends JwtPayload {
	exp: number;
	sub: string;
	user: UserDataModel;
}

export class JWTModel {
	exp: number;
	sub: string;
	user: UserDataModel;

	constructor(data: Partial<JWTModel> = {}) {
		this.exp = data.exp || 0;
		this.sub = data.sub || '';
		this.user = data.user || new UserDataModel();
	}
}
