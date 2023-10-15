<template>
  <div class="pagination" v-if="pagination.total > pagination.limit">
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
        :class="pageNum === pagination.page ? 'page-active' : 'page-number'"
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

export interface Paging {
  page: number;
  limit: number;
  total: number;
}

export default Vue.extend({
  name: 'TnPagination',
  props: ['page', 'limit', 'total'],
  data() {
    return {
      threshold: 3,
      pagination: {
        page: this.page || 1,
        limit: this.limit || 10,
        total: this.total || 0,
      },
    };
  },
  computed: {
    totalPages(): number {
      return Math.ceil(this.pagination.total / this.pagination.limit);
    },
    pagesToShow(): number[] {
      const startPage = Math.max(1, this.pagination.page - this.threshold);
      const endPage = Math.min(this.totalPages, this.pagination.page + this.threshold);
      const limit = endPage - startPage + 1; // +1 to include startPage
      const start = startPage > endPage - this.threshold * 2 && startPage - this.threshold * 2 > 0 ? endPage - this.threshold * 2 : startPage;
      return Array.from({ length: this.threshold * 2 < limit ? limit : this.threshold * 2 + 1 }, (_, index) => start + index);
    },
  },
  methods: {
    nextPage() {
      if (this.pagination.page < this.totalPages) {
        this.pagination.page++;
        this.emit();
      }
    },
    prevPage() {
      if (this.pagination.page > 1) {
        this.pagination.page--;
        this.emit();
      }
    },
    toFirstPage() {
      this.pagination.page = 1;
      this.emit();
    },
    toLastPage() {
      this.pagination.page = this.totalPages;
      this.emit();
    },
    goToPage(pageNum: number) {
      this.pagination.page = pageNum;
      this.emit();
    },
    emit() {
      this.$emit('event-paging', this.pagination);
    },
  },
});
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  padding: 6px 0;
  font-size: 14px;

  .page-meta {
    flex-grow: 1;
    margin-right: 10px;
    color: #606266;
  }

  .pagination-actions {
    display: flex;
    align-items: flex-start;

    .page-number {
      cursor: pointer;
      transition: 0.3s;
      @apply btn-xs btn btn-primary-ghost;
    }

    .page-active {
      @apply btn-xs btn-primary;
    }
  }
}
</style>
