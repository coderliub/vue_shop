import { createApp } from 'vue'
import {
  Alert,
  Aside,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Cascader,
  Checkbox,
  CheckboxGroup,
  Col,
  Container,
  Dialog,
  Form,
  FormItem,
  Header,
  Input,
  Loading,
  Main,
  Menu,
  MenuItem,
  Message,
  MessageBox,
  Option,
  Pagination,
  Row,
  Select,
  Step,
  Steps,
  Submenu,
  Switch,
  Table,
  TableColumn,
  TabPane,
  Tabs,
  Tag,
  Timeline,
  TimelineItem,
  Tooltip,
  Tree,
  Upload
} from 'element-ui'

const app = createApp({})

app.use(Button)
app.use(Form)
app.use(FormItem)
app.use(Input)
app.use(Container)
app.use(Header)
app.use(Aside)
app.use(Main)
app.use(Submenu)
app.use(Menu)
app.use(MenuItem)
app.use(Breadcrumb)
app.use(BreadcrumbItem)
app.use(Card)
app.use(Row)
app.use(Col)
app.use(Table)
app.use(TableColumn)
app.use(Switch)
app.use(Tooltip)
app.use(Pagination)
app.use(Dialog)
app.use(Tag)
app.use(Tree)
app.use(Select)
app.use(Option)
app.use(Cascader)
app.use(Alert)
app.use(Tabs)
app.use(TabPane)
app.use(Steps)
app.use(Step)
app.use(CheckboxGroup)
app.use(Checkbox)
app.use(Upload)
app.use(Timeline)
app.use(TimelineItem)
// 使用服务方式的话，只安装Loading即可
app.use(Loading)
// 指令方式(v-loading)的话这两行都得有
app.use(Loading.directive)
// 把这个弹框组件挂载到Vue.message中
app.prototype.$message = Message
// 需要单独引入Message, 并挂载到Vue.message中
app.prototype.$confirm = MessageBox.confirm
// 按需导入: 加载数据时显示动效
app.prototype.$loading = Loading.service
