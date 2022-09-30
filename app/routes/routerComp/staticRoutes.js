import userRoutes from '@app/views/user/routes';
import scenesRoutes from './scenesRoutes';

const routes = [
  ...userRoutes,
  {
    path: '/404',
    name: '404',
    component: import('@app/views/404'),
    hideMenu: true,
  },
  ...scenesRoutes,
];

export default routes;
