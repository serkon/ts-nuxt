<template>
  <div>
    <Parent :data="dataList">
      <Child column="name" label="Name"><template #default="scope">içerik 1 {scope.row.name}</template></Child>
      <Child column="age" label="Age"><template #default="scope">içerik 2 {scope.row.age}</template></Child>
    </Parent>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  components: {
    Parent: {
      props: ['data'],
      render(h) {
        return h(
          'div',
          { class: 'patates' },
          this.$slots.default.map((slot) => {
            if (slot.componentOptions && slot.componentOptions.propsData) {
              const { column } = slot.componentOptions.propsData;

              return h(
                'div',
                { class: 'col' },
                this.data.map((row) =>
                  h(slot.componentOptions.Ctor, {
                    props: {
                      ...slot.componentOptions.propsData,
                      row,
                    },
                    scopedSlots: slot.componentOptions.scopedSlots,
                  }),
                ),
              );
            }

            return null; // h('div', { class: 'empty-child' }, slot);
          }),
        );
      },
    },
    Child: {
      props: ['column', 'label', 'row'],
      render(h) {
        if (this.$slots.default) {
          return this.$slots.default({ row: this.row });
        }

        return h('div', {}, this.row[this.column]);
      },
    },
  },
  data() {
    return {
      dataList: [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        // ... diğer veriler
      ],
    };
  },
});
</script>
