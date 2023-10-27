export type Field = {
    id: string;
    field: string | null;
    operator: string | null;
    value: string;
    condition: 'and' | 'or' | null;
};
export type Group = {
    id: string;
    condition: string;
    rules: Field[];
};
declare const _default: any;
export default _default;
