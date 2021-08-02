import { Vue, Component } from 'vue-property-decorator'
import ListTable from './components/ListTable.vue'

@Component({
  name: 'App',
  components: { ListTable },
})
export default class App extends Vue {
  page = {
    pageSize: 10,
    pageNum: 1,
  }
  data: any = []
  columns = [
    {
      id: 'name',
      label: '名称',
      width: '',
      visible: true,
    },
    {
      id: 'age',
      label: '年龄',
      width: '',
      visible: true,
    },
    {
      id: 'sex',
      label: '性别',
      width: '',
      visible: true,
    },
    {
      id: 'desc',
      label: '描述',
      width: '',
      visible: true,
    },
  ]
  total = 100

  // selected = [
  //   {
  //     id: 1,
  //     name: '赵1',
  //     age: '12',
  //     sex: '男',
  //     desc: '搞笑',
  //   },
  //   {
  //     id: 13,
  //     name: '赵1',
  //     age: '12',
  //     sex: '男',
  //     desc: '搞笑',
  //   },
  // ]

  selected = {
    id: 'name',
    label: '名称',
    width: '',
    visible: true,
  }

  mounted() {
    this.data = this.getData(this.page)
  }

  getData({ pageNum, pageSize }: any) {
    let result = []
    for (let i = 0; i < pageSize; i++) {
      result.push({
        id: (pageNum - 1) * pageSize + 1 + i,
        name: '赵' + ((pageNum - 1) * pageSize + 1 + i),
        age: '12',
        sex: '男',
        desc: '搞笑',
      })
    }
    return result
  }

  pageChanged(page: any) {
    this.page = page
    this.data = this.getData(page)
  }

  selectChanged(val: any) {
    this.selected = val
  }
}
