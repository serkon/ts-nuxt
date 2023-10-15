<template>
  <div class="pagination">
    <div class="page-meta">
      <span>{{ pagination.page }} / {{ totalPages }}</span>
    </div>
    <div class="pagination-actions">
      <button @click="toFirstPage" :disabled="pagination.page <= 1" class="page-number page-number-first">1</button>
      <button @click="prevPage" :disabled="pagination.page <= 1" class="page-number page-number-prev">&larr;</button>
      <button
        v-for="pageNum in pagesToShow"
        :key="pageNum"
        @click="goToPage(pageNum)"
        :class="{ 'page-active btn-primary': pageNum === pagination.page, 'btn-ghost': false }"
        class="page-number"
      >
        {{ pageNum }}
      </button>
      <button @click="nextPage" :disabled="pagination.page >= totalPages" class="page-number page-number-next">&rarr;</button>
      <button @click="toLastPage" :disabled="pagination.page >= totalPages" class="page-number page-number-last">{{ totalPages }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export default Vue.extend({
  name: 'TnPagination',
  props: ['page', 'limit', 'total'],
  data() {
    return {
      treshold: 2,
      pagination: {
        page: this.page || 1,
        limit: this.limit || 10,
        total: this.total || 0,
      },
      test: 'red',
    };
  },
  computed: {
    totalPages(): number {
      return Math.ceil(this.pagination.total / this.pagination.limit);
    },
    pagesToShow(): number[] {
      const startPage = Math.max(1, this.pagination.page - this.treshold);
      const endPage = Math.min(this.totalPages, this.pagination.page + this.treshold);
      return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    },
  },
  methods: {
    nextPage() {
      if (this.pagination.page < this.totalPages) {
        this.pagination.page++;
        this.$emit('event-pagination', this.pagination);
      }
    },
    prevPage() {
      if (this.pagination.page > 1) {
        this.pagination.page--;
        this.$emit('event-pagination', this.pagination);
      }
    },
    toFirstPage() {
      this.pagination.page = 1;
      this.$emit('event-pagination', this.pagination);
    },
    toLastPage() {
      this.pagination.page = this.totalPages;
      this.$emit('event-pagination', this.pagination);
    },
    goToPage(pageNum: number) {
      this.pagination.page = pageNum;
      this.$emit('event-pagination', this.pagination);
    },
  },
});
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  padding: 6px 0;
  background-color: v-bind(test);
  font-size: 14px;

  .page-meta {
    flex-grow: 1;
    margin-right: 10px;
    color: #606266;
  }

  .pagination-actions {
    display: flex;
    align-items: flex-start;
    @apply btn btn-secondary btn-sm;

    .page-number {
      cursor: pointer;
      transition: 0.3s;

      i {
        font-size: 12px;
      }
    }
  }
}
</style>
