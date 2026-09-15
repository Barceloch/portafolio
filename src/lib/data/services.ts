export type ServiceCategoryKey = 'web' | 'ecommerce' | 'erp' | 'backend' | 'devops' | 'automation' | 'design' | 'mobile';

export interface ServiceItem {
	title: string;
	description: string;
	tech: string[];
	highlight?: boolean;
}

export interface ServiceCategory {
	key: ServiceCategoryKey;
	num: string;
	title: string;
	tag: string;
	summary: string;
	items: ServiceItem[];
}