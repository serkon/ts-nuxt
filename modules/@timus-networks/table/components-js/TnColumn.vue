<!-- TnColumn.vue -->
<template>
  <td v-if="!hide.includes(field)" class="column">
    <slot :row="row" :field="field" :label="label" :hide="hide">{{ row[field] }}</slot>
  </td>
</template>

<script>"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.default = vue_1.default.extend({
    name: 'TnColumn',
    props: {
        field: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        row: {
            type: Object,
            default: function () { },
        },
        hide: {
            type: Array,
            default: function () { return []; },
        },
    },
    methods: {
        sort: function () {
            return this.label;
        },
    },
});
</script>
