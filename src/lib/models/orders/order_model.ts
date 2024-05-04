export class OrderModel {
	page_number: number;
	page_size: number;
	total: number;
	total_pages: number;
	destinations: OrderDataModel[];

	constructor(data: Partial<OrderModel> = {}) {
		this.page_number = data.page_number || 0;
		this.page_size = data.page_size || 0;
		this.total = data.total || 0;
		this.total_pages = data.total_pages || 0;
		this.destinations = data.destinations || [];
	}
}

export class OrderDataModel {
	id: string;
	customer_name: string;
	customer_email: string;
	customer_phone: string;
	customer_country: string;
	customer_address: string;
	total_price: string;
	payment_status: string;
	payment_proof: null;
	user_id: string;
	created_at: number;
	updated_at: number;

	constructor(data: Partial<OrderDataModel> = {}) {
		this.id = data.id || '';
		this.customer_name = data.customer_name || '';
		this.customer_email = data.customer_email || '';
		this.customer_phone = data.customer_phone || '';
		this.customer_country = data.customer_country || '';
		this.customer_address = data.customer_address || '';
		this.total_price = data.total_price || '';
		this.payment_status = data.payment_status || '';
		this.payment_proof = data.payment_proof || null;
		this.user_id = data.user_id || '';
		this.created_at = data.created_at || 0;
		this.updated_at = data.updated_at || 0;
	}
}
