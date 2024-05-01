export class DestinationModel {
	page_number: number;
	page_size: number;
	total: number;
	total_pages: number;
	destinations: DestinationDataModel[];

	constructor(data: any) {
		this.page_number = data.page_number;
		this.page_size = data.page_size;
		this.total = data.total;
		this.total_pages = data.total_pages;
		this.destinations = data.destinations;
	}
}

export class DestinationDataModel {
	id: string;
	title: string;
	slug: string;
	description: string;
	image: string;
	created_at: number;
	updated_at: number;

	constructor(data: Partial<DestinationDataModel> = {}) {
		// Initialize properties with default values or provided data
		this.id = data.id || '';
		this.title = data.title || '';
		this.slug = data.slug || '';
		this.description = data.description || '';
		this.image = data.image || '';
		this.created_at = data.created_at || 0;
		this.updated_at = data.updated_at || 0;
	}

	// Add any additional methods or functionality as needed
}
