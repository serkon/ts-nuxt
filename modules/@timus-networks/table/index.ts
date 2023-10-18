import TnTable from './components-ts/TnTable.vue';
import TnHead from './components-ts/TnHead.vue';
import TnFilter from './components-ts/TnFilter.vue';
import TnColumn from './components-ts/TnColumn.vue';
import TnPagination from './components-ts/TnPagination.vue';
import { Utils, utils } from './components-ts/utils';

export default { TnTable, TnColumn, TnFilter, TnHead, TnPagination, Utils, utils };

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

interface FilterOption {
  label: string;
  value: any;
  group?: string;
}

export interface TnTableEmitOutput {
  sort: Sort[];
  filter: Filter[];
  paging: Paging;
}
