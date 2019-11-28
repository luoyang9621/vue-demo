import Vue from 'vue';
import Router from 'vue-router';
import Store from '../store';
import Global from './../untils/global';
import {permission} from './permission';

Vue.use(Router);
const routes = [
    {
        path: '/',
        name: '',
        redirect: '/demo1',
        meta: {
            isAlive: false,
        },
    },
    {
        path: '/demo1',
        name: 'demo1',
        meta: {
            isAlive: false,
        },
        component: () => import(/*webpackChunkName: 'demo1' */ '../views/demo1'),
    },
    {
        path: '/demo2',
        name: 'demo2',
        meta: {
            isAlive: false,
        },
        component: () => import(/*webpackChunkName: 'demo2' */ '../views/demo2'),
    },{
        path: '/demo3',
        name: 'demo3',
        meta: {
            isAlive: false,
        },
        component: () => import(/*webpackChunkName: 'demo3' */ '../views/demo3'),
    },
    {
        path: '/demo4',
        name: 'demo4',
        meta: {
            isAlive: false,
        },
        component: () => import(/*webpackChunkName: 'demo4' */ '../views/demo4'),
    },
    {
        path: '/demo5',
        name: 'demo5',
        meta: {
            isAlive: false,
        },
        component: () => import(/*webpackChunkName: 'demo5' */ '../views/demo5'),
    },
    {
        path: '/demo6',
        name: 'demo6',
        meta: {
            isAlive: false,
        },
        component: () => import(/*webpackChunkName: 'demo6' */ '../views/demo6'),
    },
    {
        path: '/demo7',
        name: 'demo7',
        meta: {
            isAlive: false,
        },
        component: () => import(/*webpackChunkName: 'demo7' */ '../views/demo7'),
    },
    {
        path: '/demo8',
        name: 'demo8',
        meta: {
            isAlive: false,
        },
        component: () => import(/*webpackChunkName: 'demo8' */ '../views/demo8'),
    },
    {
        path: '/demo9',
        name: 'demo9',
        meta: {
            isAlive: false,
        },
        component: () => import(/*webpackChunkName: 'demo9' */ '../views/demo9'),
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            isAlive: true,
        },
        component: () => import(/*webpackChunkName: 'login' */ '../views/login'),
    },
    {
        path: '/404',
        name: '404',
        meta: {
            isAlive: true,
        },
        component: () => import(/*webpackChunkName: '404' */ '../views/404'),
    }
];
const newRoutes = routes.concat(permission);
const router = new Router({
    // mode: 'history',
    routes: newRoutes,
});

const pathKey = 'APP-KEY';
let touchEndTime = Date.now();
window.addEventListener('touchend', () => {
    touchEndTime = Date.now();
});
// 路由权限跳转判断
/***
*
*一般有两种方式，第一种是显示全部路由，然后再routerBeforeEach中判断，判断是否需要权限进入。
 * 第二种是先列出基本路由，然后需要权限的路由则需要根据后端返回的权限来判断哪些需要添加进来，可以使用addRouter来实现
* ***/

function permissionAuth(to, next, query) {
    const getPermissionList = Global.getPermissionList();
    const getPermissionObj = Global.getPermissionObj();
    console.log(1, to.meta, getPermissionObj);
    if (!to.meta.permission) {
        console.log(4);
        next();
    } else {
        console.log(2);
        if (!Global.getToken()) {
            next({ name: 'login' });
        } else {
            console.log(3);
            if (getPermissionObj[to.meta.permission]) {
                next();
            } else {
                console.log(6);
                let flag = false;
                console.log('getPermissionList', getPermissionList);
                newRoutes.forEach(item => {
                    if (getPermissionObj[item.meta.permission]) {
                        console.log('name7', getPermissionObj[item.permission]);
                        flag = true;
                        next({ name: item.name, query });
                    }
                });
                if (!flag) {
                    next({ name: '404' });
                }
            }
        }
    }
}

let { historyList } = Store.state.moduleA;
router.beforeEach((to, from, next) => {
    const query = { ...to.query };
    const index= historyList.findIndex(e => e === (to.name + '&' + query[pathKey]));
    const len = historyList.length - 1;
    console.log('index=', index); // demo1
    /***
    // 首先进入路由中，首先判断是否存在,不存在则跳转404，
    // 然后判断链接是否带有pathKey标记，有则判断是否存在过，
    // 存在过则代表是回退的，没有则是代表前进的了。
    // 有的话判断是否是记录中的最后一个，是则代表刷新，否则回退到记录中的那个路由，并且删除存在过的路由后面的记录。
    // 如果要跳转的页面，是当前最新一个页面
     **/
    if (index > -1) {
        if (index === len) {
            console.log('刷新');
        } else {
            console.log(Date.now() - touchEndTime);
            // ios手势滑动的时间差在300左右，而点击事件的时间差在30左右，
            if (Date.now() - touchEndTime < 377 && Date.now() - touchEndTime > 100) {
                Store.commit('moduleA/changeDirection', '');
            } else {
                Store.commit('moduleA/changeDirection', 'back');
            }
            historyList = historyList.slice(0, index + 1);
        }
        Store.commit('moduleA/changeHistory', historyList);
        permissionAuth(to, next);
    } else {
        // console.log(1111);
        Store.commit('moduleA/changeDirection', 'forward');
        if (!query[pathKey]) {
            // console.log(2222);
            query[pathKey] = Math.random().toString(36).substring(2);
            historyList.push(`${to.name}&${query[pathKey]}`);
            Store.commit('moduleA/changeHistory', historyList);
            // next({ name: to.name, query });
            permissionAuth(to, next, query);
        } else {
            historyList.push(`${to.name}&${query[pathKey]}`);
            Store.commit('moduleA/changeHistory', historyList);
            // console.log(3333);
            permissionAuth(to, next);
        }
    }
});
export default router;