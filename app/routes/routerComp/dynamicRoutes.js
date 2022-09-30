export const sceneRoutes = {
  path: '/design',
  name: '设计',
  icon: 'ico-layout',
  children: [
    {
      path: '/scene',
      name: '场景设计',
      icon: 'ico-square',
      component: () => import('@app/views/design/scene'),
    },
    {
      path: '/scene/add',
      name: '添加场景',
      hideMenu: true,
      component: () => import('@app/views/design/scene/add'),
    },
    {
      path: '/scene/edit/:id',
      name: '编辑场景',
      component: () => import('@app/views/design/scene/add'),
    },
    {
      path: '/tags',
      name: '标签管理',
      icon: 'ico-flag',
      component: () => import('@app/views/design/tags'),
    },
    {
      path: '/tags/add',
      name: '添加标签',
      hideMenu: true,
      component: () => import('@app/views/design/tags/add'),
    },
    {
      path: '/tags/edit/:id',
      name: '编辑标签',
      component: () => import('@app/views/design/tags/add'),
    },
  ],
};
