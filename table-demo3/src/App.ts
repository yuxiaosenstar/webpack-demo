import { Vue, Component } from 'vue-property-decorator'
import ListTable from './components/ListTable.vue'
import Demo from './components/Demo.vue'

@Component({
  name: 'App',
  components: { ListTable, Demo },
})
export default class App extends Vue {
  $refs: any
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

  onClick() {
    if (this.$refs.content.style.height) {
      this.$refs.content.style.height = ''
    } else {
      this.$refs.content.style.height = '1000px'
    }
  }
  selectValue = ''

  options = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
  ]
}
