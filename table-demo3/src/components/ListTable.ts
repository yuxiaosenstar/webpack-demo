import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component({
  name: 'listTable',
  components: {},
})
export default class ListTable extends Vue {
  @Prop({ type: Boolean, default: false })
  selectable: boolean
  @Prop({ type: Boolean, default: false })
  multiple: boolean
  @Prop({ type: Boolean, default: true })
  hasPage: boolean
  @Prop({ type: Boolean, default: true })
  hasColumnSetting: boolean
  @Prop({ type: String, default: '' })
  rowKey: string
  @Prop({ type: [String, Number] })
  height: string | number
  @Prop({ type: String, default: '没有数据' })
  emptyText: string
  @Prop({ type: Boolean, default: true })
  stripe: boolean
  @Prop({ type: Boolean, default: false })
  border: boolean
  @Prop({ type: Array, default: () => [] })
  columns: Array<any>
  @Prop({ type: Array, default: () => [] })
  data: Array<any>
  @Prop({
    type: Object,
    default: () => {
      return {
        pageSize: 10,
        pageNum: 1,
      }
    },
  })
  page: any
  @Prop({ type: Number, default: 0 })
  total: number
  @Prop()
  selected: any

  $refs: any
  pageSize = 10
  pageNum = 1
  pageSizes = [10, 20, 50, 100]

  multipleSelection: any[] = []
  singleSelected = null

  mounted() {
    if (this.selectable) {
      if (this.multiple) {
        this.$refs.table.store.states.selection = this.selected || []
        this.multipleSelection = this.selected || []
      } else {
        this.singleSelected = this.selected
      }
    }
  }

  get columnsConfig() {
    return this.columns.filter((val) => val.visible)
  }

  @Watch('page', { deep: true })
  pagingChanged() {
    this.downPaging()
  }

  downPaging() {
    this.pageNum = this.page.pageNum
    this.pageSize = this.page.pageSize
  }

  popupPaging({ pageNum, pageSize }: any) {
    let paging = {
      pageNum,
      pageSize,
    }
    this.$emit('update:page', paging)
    this.$emit('page-changed', paging)
  }

  handleSizeChange(val: number) {
    this.popupPaging({
      pageNum: this.page.pageNum,
      pageSize: val,
    })
  }

  handleCurrentChange(val: number) {
    this.popupPaging({
      pageNum: val,
      pageSize: this.page.pageSize,
    })
  }

  handleSelectionChange(val: any) {
    this.multipleSelection = val
    this.$emit('update:selected', val)
    this.$emit('select-change', val)
  }
}
