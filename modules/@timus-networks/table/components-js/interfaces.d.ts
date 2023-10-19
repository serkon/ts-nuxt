export interface Paging {
    page: number;
    limit: number;
    total: number;
}
export interface Column {
    field: string;
    label: string;
    width?: string;
    filterConfig?: FilterConfig;
}
export interface Sort {
    field: string;
    alignment: 'asc' | 'desc';
}
export interface Filter {
    field: string;
    value: string | string[];
}
export interface FilterConfig {
    options?: FilterOption[];
    type?: 'text' | 'dropdown' | 'select';
    multi?: boolean;
    callback?: (value: any) => void;
    disable?: boolean;
}
export interface FilterOption {
    label: string;
    value: any;
    group?: string;
}
export interface TnTableEmitOutput {
    sort: Sort[];
    filter: Filter[];
    paging: Paging;
    select: any[];
}
