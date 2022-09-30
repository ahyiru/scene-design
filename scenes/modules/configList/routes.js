const routes = [
  {
    path: '/configList',
    name: '可配置列表',
    icon: 'ico-flag',
    children: [
      {
        path: '/list',
        name: '列表',
        component: () => import('./src'),
      },
      {
        path: '/list/add',
        name: '添加用户',
        hideMenu: true,
        component: () => import('./src/add'),
      },
      {
        path: '/list/edit/:id',
        name: '编辑用户',
        component: () => import('./src/add'),
      },
      {
        path: '/list/auth/:id',
        name: '路由权限设置',
        component: () => import('./src/auth'),
      },
    ],
  },
];

export default routes;
