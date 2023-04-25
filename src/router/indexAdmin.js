import NoticeList from '@/views/admin/notice/NoticeList.vue'
import NoticeDetailView from '@/views/admin/notice/NoticeDetailView.vue'

const routesAdmin = [
  {
    path: '/admin/notice/List',
    name: 'NoticeList',
    component: NoticeList
  },
  {
    path: '/admin/notice/view',
    name: 'NoticeDetailView',
    component: NoticeDetailView
  },
]

export default routesAdmin
