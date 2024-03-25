<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Basic</h1>
      <p class="p-lg my-6">
        Use the type attribute to define Tag's type. In addition, the color attribute can be used to set the background color of the Tag.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-tag :disable-transitions="true">default</el-tag>
        <el-tag type="success">success</el-tag>
        <el-tag type="info">info</el-tag>
        <el-tag type="warning">warning</el-tag>
        <el-tag type="danger">danger</el-tag>
        <el-tag type="gray">gray</el-tag>
        <el-tag type="secondary">secondary</el-tag>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-input placeholder="Please input" v-model="input" type="gray" size="medium"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Removable</h1>
      <p class="p-lg my-6">
        Use the type attribute to define Tag's type. In addition, the color attribute can be used to set the background color of the Tag.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
          {{ tag.name }}
        </el-tag>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-input placeholder="Please input" v-model="input"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Sizes</h1>
      <p class="p-lg my-6">Besides default size, Tag component provides three additional sizes for you to choose among different scenarios.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-tag>Default</el-tag>
        <el-tag size="large">Large</el-tag>
        <el-tag size="medium">Medium</el-tag>
        <el-tag size="small">Small</el-tag>
        <el-tag size="mini">Mini</el-tag>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-input placeholder="Please input" v-model="input size="medium"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Edit Dynamically</h1>
      <p class="p-lg my-6">You can use the close event to add and remove tag dynamically.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-tag v-for="tag in dynamicTags" :key="tag" closable :disable-transitions="true" size="mini" @close="handleClose(tag)">
          {{ tag }}
        </el-tag>
        <el-input
          v-if="inputVisible"
          ref="saveTagInput"
          v-model="inputValue"
          class="input-new-tag"
          size="mini"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-input placeholder="Please input" v-model="input"&gt;&lt;/el-input&gt;</code>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TimusButtonSample',
  data() {
    return {
      dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
      inputVisible: false,
      inputValue: '',
      tags: [
        { name: 'Tag 1', type: '' },
        { name: 'Tag 2', type: 'success' },
        { name: 'Tag 3', type: 'info' },
        { name: 'Tag 4', type: 'warning' },
        { name: 'Tag 5', type: 'danger' },
      ],
      items: [
        { type: '', label: 'Tag 1' },
        { type: 'success', label: 'Tag 2' },
        { type: 'info', label: 'Tag 3' },
        { type: 'danger', label: 'Tag 4' },
        { type: 'warning', label: 'Tag 5' },
      ],
    };
  },
  computed: {
    gridSize() {
      const grids = {
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
      };

      return grids;
    },
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      const { inputValue } = this;

      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
  },
});
</script>
