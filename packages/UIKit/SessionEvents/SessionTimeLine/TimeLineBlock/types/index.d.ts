type GroupType = {
    isError?: boolean;
    name?: string;
    page_url?: string;
    timeStamp?: string;
    type?: string;
    duration?: string;
    method?: string;
    status?: number;
    custom_data?: Array<{
        definitionName: string;
        value: string;
    }> | null;
};
export type { GroupType };
