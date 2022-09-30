const routes = [
  {
    path: '/apis',
    name: '接口管理',
    icon: 'ico-flag',
    children: [
      {
        path: '/list',
        name: '接口列表',
        component: () => import('./src'),
      },
      {
        path: '/list/add',
        name: '添加接口',
        hideMenu: true,
        component: () => import('./src/add'),
      },
      {
        path: '/list/edit/:id',
        name: '编辑接口',
        component: () => import('./src/add'),
      },
      {
        path: '/list/test/:id',
        name: '接口测试',
        component: () => import('./src/test'),
      },
    ],
  },
];

export default routes;
