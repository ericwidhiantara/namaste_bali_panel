export class DashboardModel {
	total_orders: number;
	total_unpaid: number;
	total_paid: number;
	total_canceled: number;
	total_teams: number;
	total_users: number;
	total_destinations: number;

	constructor(data: Partial<DashboardModel> = {}) {
		this.total_orders = data.total_orders ?? 0;
		this.total_unpaid = data.total_unpaid ?? 0;
		this.total_paid = data.total_paid ?? 0;
		this.total_canceled = data.total_canceled ?? 0;
		this.total_teams = data.total_teams ?? 0;
		this.total_users = data.total_users ?? 0;
		this.total_destinations = data.total_destinations ?? 0;
	}
}
