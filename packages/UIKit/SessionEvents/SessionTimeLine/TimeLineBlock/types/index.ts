type GroupType = {
	isError?: boolean;
	name?: string;
	page_url?: string;
	timeStamp?: string;
	type?: string;
	duration?: string;
	method?: string;
	status?: number;
	custom_data?:
		| Array<{ definitionName: string; value: string }>
		| string
		| null;
	error_message: string;
	[key: string]:
		| string
		| undefined
		| number
		| null
		| boolean
		| Array<{ definitionName: string; value: string }>;
};

export type { GroupType };
