export class TeamModel {
	page_number: number;
	page_size: number;
	total: number;
	total_pages: number;
	teams: TeamDataModel[];

	constructor(data: Partial<TeamModel> = {}) {
		this.page_number = data.page_number || 0;
		this.page_size = data.page_size || 0;
		this.total = data.total || 0;
		this.total_pages = data.total_pages || 0;
		this.teams = data.teams || [];
	}
}

export class TeamDataModel {
	id: string;
	name: string;
	email: string;
	whatsapp: string;
	facebook: string;
	instagram: string;
	twitter: string;
	tiktok: string;
	role: string;
	address: string;
	image: string;
	created_at: number;
	updated_at: number;

	constructor(data: Partial<TeamDataModel> = {}) {
		this.id = data.id || '';
		this.name = data.name || '';
		this.email = data.email || '';
		this.whatsapp = data.whatsapp || '';
		this.facebook = data.facebook || '';
		this.instagram = data.instagram || '';
		this.twitter = data.twitter || '';
		this.tiktok = data.tiktok || '';
		this.role = data.role || '';
		this.address = data.address || '';
		this.image = data.image || '';
		this.created_at = data.created_at || 0;
		this.updated_at = data.updated_at || 0;
	}
}
