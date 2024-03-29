<template>
  <div class="pagination w-full" v-if="pagination.total > pagination.limit">
    <div class="pagination-meta">
      <span>{{ translator(language.TotalRecords, { total: pagination.total }) }}</span>
    </div>
    <div class="pagination-actions hidden-sm-and-down">
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
      <span>{{ translator(language.GoTo) }}</span>
      <!--
        <input
        type="number"
        v-model="goToInput"
        @keyup.enter="goToPage(goToInput)"
        class="form-control form-control-sm pagination-goto-input"
        :min="1"
        :max="totalPages"
        />
      -->
      <el-input class="pagination-goto-input" size="mini" v-model="goToInput" @change="goToPage(goToInput)" :min="1" :max="totalPages"></el-input>
    </div>
    <div class="pagination-limits">
      <span v-if="false">{{ translator(language.RecordsPerPage) }}</span>
      <!--
        <select v-model="pageLimit" @change="emit" class="pagination-limit form-control form-control-sm">
        <option value="10">10/page</option>
        <option value="20">20/page</option>
        <option value="50">50/page</option>
        <option value="100">100/page</option>
        </select>
      -->
      <el-select v-model="pageLimit" collapse-tags size="mini" @change="emit" class="pagination-limit-selection">
        <el-option v-for="item in [10, 20, 50, 100]" :key="item" :label="`${item}/${translator(language.Page)}`" :value="item"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>import Vue from 'vue';
var PaginationLanguage;
(function (PaginationLanguage) {
    PaginationLanguage["TotalRecords"] = "Total Records";
    PaginationLanguage["GoTo"] = "GoTo";
    PaginationLanguage["Page"] = "page";
    PaginationLanguage["RecordsPerPage"] = "Records per page";
})(PaginationLanguage || (PaginationLanguage = {}));
export default Vue.extend({
    name: 'TnTablePagination',
    props: ['page', 'limit', 'total', 'translate'],
    data() {
        return {
            goToInput: this.page || 1,
            threshold: 2,
            pagination: {
                page: this.page || 1,
                limit: this.limit || 10,
                total: this.total || 0,
            },
            translator: this.translate || ((v) => v),
            language: PaginationLanguage,
        };
    },
    watch: {
        'pagination.page'(newPage) {
            this.goToInput = newPage;
        },
        page(value) {
            this.pagination.page = value;
        },
        limit(value) {
            this.pagination.limit = value;
        },
        total(value) {
            this.pagination.total = value;
        },
    },
    computed: {
        pageLimit: {
            get() {
                return this.pagination.limit;
            },
            set(limit) {
                this.pagination.limit = limit;
                this.pagination.page = this.pagination.page > this.totalPages ? this.totalPages : this.pagination.page;
            },
        },
        totalPages() {
            return Math.ceil(this.pagination.total / this.pagination.limit);
        },
        pagesToShow() {
            const { page } = this.pagination;
            // Basit bir aralık oluşturmak için yardımcı fonksiyon
            const range = (start, end) => Array.from({ length: end - start + 1 }, (_, index) => start + index);
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
        goToPage(pageNum) {
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

  .pagination-meta {
    flex-grow: 1;
    margin-right: 10px;
    color: #c1c0c7;
    font-size: 14px;
    font-weight: 400;
  }

  .pagination-actions {
    display: flex;
    align-items: flex-start;
    gap: 6px;

    .page-number {
      min-width: 16px;
      color: #c1c0c7;
      font-weight: 400;
      text-align: center;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        color: #8169e0;
      }
    }

    .page-active {
      min-width: 16px;
      color: #5737d6;
    }
  }

  .pagination-goto {
    display: flex;
    gap: 16px;
    align-items: center;
    color: #c1c0c7;
    font-size: 14px;
    font-weight: 400;

    .pagination-goto-input {
      width: 50px;
      text-align: center;

      input {
        text-align: center;
      }
    }
  }

  .pagination-limits {
    display: flex;
    flex-grow: 0;
    flex-shrink: 1;

    .pagination-limit-selection {
      width: 100px;
    }
  }
}
</style>
