import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Sendinfo from './views/nav3/Sendinfo.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page5 from './views/nav2/Page5.vue'
import userTable from './views/nav3/userTable'
import activityTable from './views/nav3/activityTable'
import  role from './views/nav3/role'
import  resource from './views/nav3/resource'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '动态首页',
        iconCls: 'fa fa-telegram',
        leaf: true,//只有一个节点
        children: [
            { path: '/main', component: Main, name: '动态首页'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '动态发布',
        iconCls: 'fa fa-id-card-o',//图标样式class
        children: [
            // { path: '/table', component: Table, name: 'Table' },
            // { path: '/user', component: user, name: '列表' },
            { path: '/sendinfo', component: Sendinfo,name: "发布动态"}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '活动',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/form', component: Form, name: '活动申请' },
            { path: '/page5', component: Page5, name: '活动审批' }
        ]
    },

    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'fa fa-gear',
        children: [
            { path: '/usertable', component: userTable, name: '用户管理' },
            { path: '/activitytable', component: activityTable, name: '活动管理' },
            { path: '/role', component:role, name:'角色管理'},
            { path: '/resource', component:resource, name:'资源管理'},
            { path: '/echarts', component: echarts, name: 'echarts' }

        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;