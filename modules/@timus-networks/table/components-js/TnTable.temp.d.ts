import { Filter, Paging, Sort } from '../';
export interface TnTableEmitOutput {
    sort: Sort[];
    filter: Filter[];
    paging: Paging;
    select: any[];
}
/**
 * TnTable component
 *
 * @emitters
 * eventSort - (sorting: Order[]) Changes sorting and call change event
 */
declare const _default: any;
export default _default;
