<template>
  <div>
    <div v-if="!isMobile" style="text-align: left;position: absolute;line-height: 46px">Tổng số <span class="text-bold primary--text">{{total}}</span> {{nameRecord}} </div>
    <div v-if="total > 0" class="vue-tiny-pagination pagination layout" :style="!isMobile ? 'justify-content: flex-end; -webkit-justify-content: flex-end;' : ''">
      <div v-if="showLimit" class="pr-2 flex" style="width:120px">
        Số hồ sơ mỗi trang:
      </div>
      <div v-if="showLimit" class="pr-3 xs4 sm2 flex" style="max-width: 70px !important;">
        <v-autocomplete
          v-bind:items="limits"
          v-model="numberPerPage"
          @input="onLimitChange"
        ></v-autocomplete>
      </div>
      <div :class="!isMobile ? 'px-3 xs4 flex' : 'pr-3 xs4 flex'">
        <v-select
          v-bind:items="totalPagesData"
          v-model="currentPage"
          item-text="text"
          item-value="value"
          autocomplete
          @input="goToPage"
        ></v-select>
      </div>
      <ul class="tiny-pagination" :class="customClass">
        <li class="page-item" :class="classFirstPage">
          <button @click.prevent="lastPageLast" :class="classFirstPage" class="pagination__navigation">
            <i aria-hidden="true" class="material-icons icon">first_page</i>
          </button>
        </li>
        <li class="page-item" :class="classFirstPage">
          <button @click.prevent="lastPage" :class="classFirstPage" class="pagination__navigation" style="border-left: 0;">
            <i aria-hidden="true" class="material-icons icon">chevron_left</i>
          </button>
        </li>
        <li class="page-item" style="margin-right: 0;">
          <button class="pagination__navigation pagination__navigation--disabled text-bold primary--text" style="border-right: 0; border-left: 0;">
            {{titlePage}}
          </button>
        </li>
        <li class="page-item" :class="classLastPage" style="margin-right: 0;">
          <button @click.prevent="nextPage" :class="classLastPage" class="pagination__navigation" style="border-left: 0;">
            <i aria-hidden="true" class="material-icons icon">chevron_right</i>
          </button>
        </li>
        <li class="page-item" :class="classLastPage">
          <button @click.prevent="nextPageLast" :class="classLastPage" class="pagination__navigation">
            <i aria-hidden="true" class="material-icons icon">last_page</i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'TinyPagination'
export default {
  name: COMPONENT_NAME,
  props: {
    total: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      default: 1
    },
    numberPerPage: {
      type: Number,
      default: 20
    },
    lang: {
      type: String,
      default: 'en'
    },
    customClass: {
      type: String
    },
    limits: {
      type: Array,
      default () {
        return [20, 50, 100]
      }
    },
    showLimit: {
      type: Boolean,
      default: true
    },
    nameRecord: {
      type: String,
      default: 'bản ghi'
    }
  },
  data () {
    return {
      version: '0.2.1',
      currentPage: 1,
      currentLimit: 15,
      translations: {
        en: {
          prev: 'Previous',
          title: 'Page',
          next: 'Next'
        }
      },
      availableLanguages: ['en'],
      isMobile: false
    }
  },
  created () {
    this.currentPage = this.page
  },
  watch: {
    page (val) {
      this.currentPage = parseInt(val)
    }
  },
  computed: {
    translation () {
      return this.availableLanguages.includes(this.lang)
        ? this.translations[this.lang]
        : this.translations['en']
    },
    totalPages () {
      return Math.ceil(this.total / this.numberPerPage)
    },
    totalPagesData () {
      var totalDatas = []
      var data = {}
      for (var index = 1; index <= this.totalPages; ++index) {
        data = {
          value: index,
          text: 'Trang ' + index
        }
        totalDatas.push(data)
      }
      return totalDatas
    },
    titlePage () {
      return `${this.currentPage}`
    },
    classFirstPage () {
      return {
        'c-not-allowed pagination__navigation--disabled': this.currentPage === 1
      }
    },
    classLastPage () {
      return {
        'c-not-allowed pagination__navigation--disabled': this.currentPage === this.totalPages
      }
    },
    // isMobile () {
    //   return this.$store.getters.getIsMobile
    // }
  },
  methods: {
    nextPage () {
      if (this.currentPage !== this.totalPages) {
        this.currentPage += 1
        this.$emit('tiny:change-page', {
          page: this.currentPage
        })
      }
    },
    lastPage () {
      if (this.currentPage > 1) {
        this.currentPage -= 1
        this.$emit('tiny:change-page', {
          page: this.currentPage
        })
      }
    },
    nextPageLast () {
      this.currentPage = this.totalPages
      this.$emit('tiny:change-page', {
        page: this.totalPages
      })
    },
    lastPageLast () {
      this.currentPage = 1
      this.$emit('tiny:change-page', {
        page: 1
      })
    },
    goToPage () {
      this.$emit('tiny:change-page', {
        page: this.currentPage
      })
    },
    onLimitChange () {
      this.currentPage = 1
      this.$emit('tiny:change-page', {
        page: 1,
        numberPerPage: this.numberPerPage
      })
    }
  }
}
</script>
