import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import SendInfo from './views/nav2/SendInfo.vue'
import Setting from './views/Setting.vue'
import stuNews from './views/dongtai/stuNews.vue'
import ApplyForm from './views/nav1/ApplyForm.vue'
import organization from './views/dongtai/organization.vue'
import Page5 from './views/nav2/Page5.vue'
import userTable from './views/nav3/userTable'
import activityTable from './views/nav3/activityTable'
import articleTable from './views/nav3/articleTable'
import  role from './views/nav3/role'
import  resource from './views/nav3/resource'
import echarts from './views/charts/echarts.vue'
import singleNews from './views/dongtai/singleNews'
import teachersNews from './views/dongtai/teachersNews.vue'
import adminNews from './views/dongtai/adminNews.vue'

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
        name: '动态',
        iconCls: 'fa fa-universal-access',
        // leaf: true,//只有一个节点
        children: [
            { path: '/organization', component: organization, name: '组织动态'},
            { path: '/stuNews', component: stuNews, name: '学生动态'},
            { path: '/teachersNews', component: teachersNews, name: '教师动态'},
            { path: '/adminNews', component: adminNews, name: '管理员动态'},
            { path: '/singleNews', component: singleNews, name: '我的动态'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '动态发布',
        iconCls: 'fa fa-edit',//图标样式class
        children: [
            // { path: '/table', component: Table, name: 'Table' },
            { path: '/SendInfo', component: SendInfo,name: "发布动态"}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '活动',
        iconCls: 'fa fa-grav',
        children: [
            { path: '/ApplyForm', component: ApplyForm, name: '活动申请'},
            { path: '/page5', component: Page5, name: '活动审批' }
        ]
    },

    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'fa fa-gears',
        children: [
            { path: '/userTable', component: userTable, name: '用户管理'},
            { path: '/activityTable', component: activityTable, name: '活动管理' },
            { path: '/articleTable',component:articleTable,name:'动态管理'},
            { path: '/role', component:role, name:'角色管理'},
            { path: '/resource', component:resource, name:'资源管理'},
            { path: '/echarts', component: echarts, name: 'echarts' }

        ]
    },
    {
        path: '/',
        component: Home,
        name: '个人设置',
        iconCls: 'fa fa-cog',
        leaf: true,//只有一个节点
        children: [
            { path: '/Setting', component: Setting, name: '个人设置'}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;