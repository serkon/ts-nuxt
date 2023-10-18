<template>
  <div class="pagination" v-if="pagination.total > pagination.limit">
    <div class="page-meta">
      <span>Total {{ pagination.total }} Records</span>
      <!--<span>{{ pagination.page }}/{{ totalPages }}</span>-->
    </div>
    <div class="pagination-actions">
      <template v-if="totalPages > threshold * 2 + 1">
        <button @click="toFirstPage" :disabled="pagination.page <= 1" class="page-number page-number-first">1</button>
        <button @click="prevPage" :disabled="pagination.page <= 1" class="page-number page-number-prev">&larr;</button>
      </template>
      <button
        v-for="pageNum in pagesToShow"
        :key="pageNum"
        @click="goToPage(pageNum)"
        :class="pageNum === pagination.page ? 'page-active' : 'page-number'"
      >
        {{ pageNum }}
      </button>
      <template v-if="totalPages > threshold * 2 + 1">
        <button @click="nextPage" :disabled="pagination.page >= totalPages" class="page-number page-number-next">&rarr;</button>
        <button @click="toLastPage" :disabled="pagination.page >= totalPages" class="page-number page-number-last">{{ totalPages }}</button>
      </template>
    </div>
    <div class="pagination-goto">
      <span>Go to</span>
      <input
        type="number"
        v-model="goToInput"
        @keyup.enter="goToPage(goToInput)"
        class="form-control form-control-sm pagination-goto-input"
        :min="1"
        :max="totalPages"
      />
    </div>
    <div class="paging-limits">
      <span v-if="false">Records per page:</span>
      <select v-model="pageLimit" @change="emit" class="pagination-limit form-control form-control-sm">
        <option value="10">10/page</option>
        <option value="20">20/page</option>
        <option value="50">50/page</option>
        <option value="100">100/page</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TnPagination',
  props: ['page', 'limit', 'total'],
  data() {
    return {
      goToInput: this.page || 1,
      threshold: 3,
      pagination: {
        page: this.page || 1,
        limit: this.limit || 10,
        total: this.total || 0,
      },
    };
  },
  watch: {
    'pagination.page'(newPage) {
      this.goToInput = newPage;
    },
  },
  computed: {
    pageLimit: {
      get(): number {
        return this.pagination.limit;
      },
      set(limit: number) {
        this.pagination.limit = limit;
        this.pagination.page = this.pagination.page > this.totalPages ? this.totalPages : this.pagination.page;
      },
    },
    totalPages(): number {
      return Math.ceil(this.pagination.total / this.pagination.limit);
    },
    pagesToShow(): number[] {
      const { page } = this.pagination;
      // Basit bir aralık oluşturmak için yardımcı fonksiyon
      const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, index) => start + index);
      // Eğer toplam sayfa sayısı threshold'un iki katından azsa tüm sayfaları göster
      if (this.totalPages <= this.threshold * 2) {
        return range(1, this.totalPages);
      }
      // Mevcut sayfa başlangıçta ise
      if (page <= this.threshold) {
        return range(1, this.threshold * 2 + 1);
      }
      // Mevcut sayfa sondaysa
      if (page >= this.totalPages - this.threshold + 1) {
        return range(this.totalPages - this.threshold * 2, this.totalPages);
      }
      // Mevcut sayfa ortadaysa
      return range(page - this.threshold, page + this.threshold);
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
      const pNumber = Number(pageNum);
      this.pagination.page = pNumber < 1 ? 1 : pNumber > this.totalPages ? this.totalPages : pNumber;
      this.emit();
    },
    emit() {
      this.$emit('event-paging', this.pagination);
    },
  },
});
</script>
<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  padding: 16px 0;
  font-size: 14px;
  gap: 16px;

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

  .pagination-goto {
    display: flex;
    gap: 16px;
    align-items: center;

    .pagination-goto-input {
      width: 50px;
      text-align: center;
      @apply form-control form-control-sm;
    }
  }
}
</style>
