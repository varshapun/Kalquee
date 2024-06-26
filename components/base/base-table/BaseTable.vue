<script lang="ts" setup>
import get from 'lodash/get'
import Row from './Row'
import Column from './Column'
import BaseTablePagination from './BaseTablePagination.vue'

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  data: {
    type: [Array, Function],
    required: true,
  },
  sortBy: { type: String, default: '' },
  sortOrder: { type: String, default: '' },
  tableClass: {
    type: String,
    default:
        'min-w-full divide-y divide-gray-200 dark:divide-gray-600 relative z-5',
  },
  theadClass: {
    type: String,
    default: 'bg-gray-50 dark:bg-gray-800 dark:text-white',
  },
  tbodyClass: { type: String, default: '' },
  noResultsMessage: {
    type: String,
    default: 'No Results Found',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingType: {
    type: String,
    default: 'placeholder',
    validator(value) {
      return ['placeholder', 'spinner'].includes(value)
    },
  },
  placeholderCount: {
    type: Number,
    default: 3,
  },
  darkHighlight: {
    type: Boolean,
    default: false,
  },
})

const rows = reactive([])
const isLoading = ref(false)

const tableColumns = reactive(props.columns.map(column => new Column(column)))

const sort = reactive({
  fieldName: '',
  order: '',
})

const pagination = ref('')

const usesLocalData = computed(() => {
  return Array.isArray(props.data)
})

const sortedRows = computed(() => {
  if (!usesLocalData.value)
    return rows.value

  if (sort.fieldName === '')
    return rows.value

  if (tableColumns.length === 0)
    return rows.value

  const sortColumn = getColumn(sort.fieldName)

  if (!sortColumn)
    return rows.value

  const sorted = [...rows.value].sort(
    sortColumn.getSortPredicate(sort.order, tableColumns),
  )

  return sorted
})

function getColumn(columnName) {
  return tableColumns.find(column => column.key === columnName)
}

function getThClass(column) {
  let classes
      = 'whitespace-nowrap px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white'

  if (column.defaultThClass)
    classes = column.defaultThClass

  if (column.sortable)
    classes = `${classes} cursor-pointer`
  else
    classes = `${classes} pointer-events-none`

  if (column.thClass)
    classes = `${classes} ${column.thClass}`

  return classes
}

function getTdClass(column) {
  let classes
      = 'break-words md:break-normal px-4 md:px-6 py-4 text-sm text-gray-500 md:whitespace-nowrap dark:text-gray-300'

  if (column.defaultTdClass)
    classes = column.defaultTdClass

  if (column.tdClass)
    classes = `${classes} ${column.tdClass}`

  return classes
}

function getPlaceholderClass(column) {
  let classes = 'w-full'

  if (column.placeholderClass)
    classes = `${classes} ${column.placeholderClass}`

  return classes
}

function prepareLocalData() {
  pagination.value = null
  return props.data
}

async function fetchServerData() {
  const page = (pagination.value && pagination.value.currentPage) || 1

  isLoading.value = true

  const response = await props.data({
    sort,
    page,
  })

  isLoading.value = false

  pagination.value = response.pagination
  return response.data
}

function changeSorting(column) {
  if (sort.fieldName !== column.key) {
    sort.fieldName = column.key
    sort.order = 'asc'
  }
  else {
    sort.order = sort.order === 'asc' ? 'desc' : 'asc'
  }
  if (!usesLocalData.value) {
    if (pagination.value)
      pagination.value.currentPage = 1
    mapDataToRows()
  }
}

async function mapDataToRows() {
  const data = usesLocalData.value
    ? prepareLocalData()
    : await fetchServerData()

  rows.value = data.map(rowData => new Row(rowData, tableColumns))
}

async function pageChange(page) {
  pagination.value.currentPage = page
  await mapDataToRows()
}
async function refresh(isPreservePage = false) {
  if (pagination.value && !isPreservePage)
    pagination.value.currentPage = 1
  await mapDataToRows()
}

function lodashGet(array, key) {
  return get(array, key)
}

if (usesLocalData.value) {
  watch(
    () => props.data,
    () => {
      mapDataToRows()
    },
  )
}

onMounted(async () => {
  await mapDataToRows()
})

defineExpose({ refresh, isLoading })
</script>

<template>
  <div class="flex flex-col">
    <div class="pb-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 lg:pb-0">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div
          class="relative overflow-hidden bg-white border-b border-gray-200 rounded-lg shadow dark:shadow-glass dark:border dark:border-white/10 dark:bg-gray-800/70"
        >
          <!-- <BaseDarkHighlight v-if="darkHighlight" class="z-[-1]" /> -->

          <slot name="header" />

          <table :class="tableClass">
            <thead :class="theadClass">
              <tr>
                <th
                  v-for="column in tableColumns"
                  :key="column.key"
                  :class="[
                    getThClass(column),
                    {
                      'text-bold text-black': sort.fieldName === column.key,
                    },
                  ]"
                  @click="changeSorting(column)"
                >
                  {{ column.label }}
                  <span
                    v-if="sort.fieldName === column.key && sort.order === 'asc'"
                    class="asc-direction"
                  >
                    ↑
                  </span>
                  <span
                    v-if="
                      sort.fieldName === column.key && sort.order === 'desc'
                    "
                    class="desc-direction"
                  >
                    ↓
                  </span>
                </th>
              </tr>
            </thead>
            <tbody
              v-if="loadingType === 'placeholder' && (loading || isLoading)"
            >
              <tr
                v-for="placeRow in placeholderCount"
                :key="placeRow"
                :class="
                  placeRow % 2 === 0
                    ? 'bg-white dark:bg-gray-800'
                    : 'bg-gray-50 dark:bg-gray-800'
                "
              >
                <td
                  v-for="column in columns"
                  :key="column.key"
                  class=""
                  :class="getTdClass(column)"
                >
                  <base-content-placeholders
                    :class="getPlaceholderClass(column)"
                    :rounded="true"
                  >
                    <base-content-placeholders-text
                      class="w-full h-6"
                      :lines="1"
                    />
                  </base-content-placeholders>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr
                v-for="(row, index) in sortedRows"
                :key="index"
                :class="
                  index % 2 === 0
                    ? 'bg-white dark:bg-transparent'
                    : 'bg-gray-50 dark:bg-gray-700/20 dark:border-y dark:border-gray-600'
                "
              >
                <td
                  v-for="column in columns"
                  :key="column.key"
                  class=""
                  :class="getTdClass(column)"
                >
                  <slot :name="`cell-${column.key}`" :row="row">
                    {{ lodashGet(row.data, column.key) }}
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>

          <div
            v-if="loadingType === 'spinner' && (loading || isLoading)"
            class="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-white bg-opacity-60 dark:bg-gray-700 dark:bg-opacity-60"
          >
            <SpinnerIcon class="w-10 h-10 text-primary-500" />
          </div>

          <div
            v-else-if="
              !loading && !isLoading && sortedRows && sortedRows.length === 0
            "
            class="
              text-center text-gray-500
              pb-2
              flex
              h-[160px]
              justify-center
              items-center
              flex-col
            "
          >
            <BaseIcon
              name="ExclamationCircleIcon"
              class="w-6 h-6 text-gray-400"
            />

            <span class="block mt-1">{{ noResultsMessage }}</span>
          </div>

          <BaseTablePagination
            v-if="pagination"
            :pagination="pagination"
            @pageChange="pageChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>
