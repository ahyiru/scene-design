import {pageSchema} from './configs';
import LowCode from './src';
import ScenesLayout from './layout';

import {theme, leftList, rightList} from './themes';

const routes = [
  {
    path: '/lowCode',
    name: '低代码',
    icon: 'ico-flag',
    theme,
    leftList,
    rightList,
    component: ScenesLayout,
    hasLayout: true,
    children: [
      {
        path: '/dom',
        name: '原生dom',
        id: '60f842f05ce53002d3bd35d7',
        component: LowCode,
        loadData: {
          pageSchema,
        },
      },
      {
        path: '/ui',
        name: 'UI组件',
        id: '60f842e15ce53002d3bd35d2',
        component: LowCode,
        loadData: {
          pageSchema,
        },
      },
      {
        path: '/users',
        name: '业务组件',
        id: '60f842b65ce53002d3bd35cd',
        component: LowCode,
        loadData: {
          pageSchema,
        },
      },
      {
        path: '/users/add',
        name: '新增用户',
        id: '60f8428c5ce53002d3bd35c8',
        component: LowCode,
        hideMenu: true,
        loadData: {
          pageSchema,
        },
      },
      {
        path: '/users/edit/:id',
        name: '编辑用户',
        id: '60f842705ce53002d3bd35c3',
        component: LowCode,
        loadData: {
          pageSchema,
        },
      },
    ],
  },
  {
    path: '/lowCode/:id/design',
    name: '页面设计',
    component: () => import('./src/design'),
  },
];

export default routes;
