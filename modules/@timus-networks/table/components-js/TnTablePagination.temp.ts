
import Vue from 'vue';

enum PaginationLanguage {
  TotalRecords = 'Total Records',
  GoTo = 'GoTo',
  Page = 'page',
  RecordsPerPage = 'Records per page',
}

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
      translator: this.translate || ((v: string): string => v),
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
