export const permission = [
  {
    path: '/p1',
    name: 'p1',
    meta: {
      isAlive: true,
      permission: 'p1'
    },
    component: () => import(/*webpackChunkName: 'p1' */ '../views/permission/p1'),
  },
  {
    path: '/p2',
    name: 'p2',
    meta: {
      isAlive: true,
      permission: 'p2'
    },
    component: () => import(/*webpackChunkName: 'p2' */ '../views/permission/p2'),
  },
  {
    path: '/s1',
    name: 's1',
    meta: {
      isAlive: true,
      permission: 's1'
    },
    component: () => import(/*webpackChunkName: 's1' */ '../views/permission/s1'),
    children: [
      {
        path: 'n1',
        name: 'n1',
        meta: {
          isAlive: true,
          permission: 'n1'
        },
        component: () => import(/*webpackChunkName: 's2' */ '../views/demo4'),
      },
      {
        path: 'n1',
        name: 'n1',
        meta: {
          isAlive: true,
          permission: 'n1'
        },
        component: () => import(/*webpackChunkName: 's2' */ '../views/demo5'),
      }
    ]
  },
  {
    path: '/s2',
    name: 's2',
    meta: {
      isAlive: true,
      permission: 's2'
    },
    component: () => import(/*webpackChunkName: 's2' */ '../views/permission/s2'),
    children: [
      {
        path: 'm1',
        name: 'm1',
        meta: {
          isAlive: true,
          permission: 'm1'
        },
        component: () => import(/*webpackChunkName: 's2' */ '../views/demo1'),
      },
      {
        path: 'm2',
        name: 'm2',
        meta: {
          isAlive: true,
          permission: 'm2'
        },
        component: () => import(/*webpackChunkName: 's2' */ '../views/demo2'),
      }
    ]
  }
];
