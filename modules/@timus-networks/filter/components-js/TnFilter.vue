<template>
  <div class="filter-group">
    <div class="filter-actions" :class="{ 'filter-header-first': !index }">
      <select v-model="filters.condition" class="filter-condition form-control form-control-sm" :disabled="!index">
        <option v-for="(c, index) in ['and', 'or']" :key="index" :value="c">{{ c }}</option>
      </select>
      <div class="filter-buttons">
        <button @click="groupAdd" class="filter-add-group btn btn-primary-outline btn-xs">Add Group</button>
        <button @click="fieldAdd" class="filter-add-field btn btn-primary-outline btn-xs">Add Fields</button>
        <button @click="groupRemove" class="filter-remove-group btn btn-primary-outline btn-xs">X</button>
      </div>
    </div>
    <div class="filter-item-todo" v-for="(item, index) in currentFilters" :key="item.id">
      <TnFilter
        :fields="fields"
        :filters="item"
        v-if="isGroup(item)"
        :index="index"
        :isTopLevel="false"
        @group-remove="eventRemove"
        @trigger-parent="emitter"
      ></TnFilter>
      <TnFilterItem
        v-else
        :fields="fields"
        :value="item"
        :index="index"
        :class="{ 'filter-item-first': index === lastField }"
        @field-remove="eventRemove"
        @trigger-parent="emitter"
      >
      </TnFilterItem>
    </div>
  </div>
</template>

<script>import Vue from 'vue';
import { utils } from './utils';
export default Vue.extend({
    props: {
        fields: {
            type: Array,
            required: true,
        },
        filters: {
            type: [Array, Object],
            default: () => [],
        },
        index: {
            // TODO: parent index ile güncelle
            type: Number,
            default: 0,
        },
        isTopLevel: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        currentFilters() {
            return 'rules' in this.filters ? this.filters.rules : this.filters;
        },
        lastField() {
            for (let i = this.currentFilters.length - 1; i >= 0; i--) {
                if (!this.isGroup(this.currentFilters[i])) {
                    return i;
                }
            }
            return null;
        },
    },
    methods: {
        isGroup(item) {
            return 'rules' in item;
        },
        fieldAdd() {
            this.currentFilters.push({
                id: utils.generateRandomId(),
                field: null,
                operator: null,
                value: '',
                condition: null,
            });
        },
        groupAdd() {
            this.currentFilters.push({
                id: utils.generateRandomId(),
                condition: this.currentFilters.length === 0 ? 'and' : 'or',
                rules: [],
            });
        },
        groupRemove() {
            Array.isArray(this.filters)
                ? (this.currentFilters.splice(0, this.currentFilters.length), this.emitter()) // herşeyi sıfırlama butonu sağ üstteki (2 method çalışıyor dikkat et: splice ve emitter methodları. Virgül ile ayırdım)
                : this.$emit('group-remove', this.filters);
        },
        eventRemove($event) {
            // Burası parent gibi düşün alttan trigger edilen burada yakalanır ve listeden silinir
            const index = this.currentFilters.findIndex((item) => item.id === $event.id);
            index > -1 && this.currentFilters.splice(index, 1);
            this.emitter();
        },
        emitter() {
            this.isTopLevel ? this.$emit('emit', this.convertToJQL(this.currentFilters)) : this.$emit('trigger-parent');
        },
        convertToJQL(rules) {
            return rules
                .reduce((acc, rule, idx) => {
                if (rule.rules) {
                    const nestedJQL = this.convertToJQL(rule.rules);
                    if (nestedJQL) {
                        acc.push(`(${nestedJQL})`);
                    }
                }
                else {
                    const operatorMapping = {
                        equals: '=',
                        'not equals': '!=',
                        contains: '~',
                    };
                    const operator = operatorMapping[rule.operator] || '=';
                    const value = rule.value;
                    acc.push(`${rule.field} ${operator} "${value}"`);
                }
                const nextRule = rules[idx + 1];
                if (nextRule && nextRule.condition && ((nextRule.rules && nextRule.rules.length > 0) || !nextRule.rules)) {
                    acc.push(nextRule.condition.toUpperCase());
                }
                return acc;
            }, [])
                .join(' ')
                .trim()
                .replace(/^(AND|OR) /, ''); // Başlangıçtaki 'AND' veya 'OR' ifadelerini kaldır
        },
    },
});
</script>

<style>
.filter-actions {
  display: flex;
  align-items: center;

  .filter-buttons {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    gap: 4px;
  }
}

.filter-group,
.filter-item {
  display: flex;
  padding: 8px;
  border-radius: 6px;
  gap: 8px;
}

.filter-group {
  flex-direction: column;
  border: 1px solid rgba(250, 0, 0, 15%);
  background-color: rgba(250, 0, 0, 1%);
}

.filter-item {
  border: 1px solid rgba(0, 179, 107, 20%);
  background-color: rgba(0, 179, 107, 5%);
}
</style>
