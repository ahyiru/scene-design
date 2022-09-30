// import {browserRouter} from '@app/configs';
import lowCodeRoutes from '@scenes/modules/lowCode/routes';
import apisRoutes from '@scenes/modules/apis/routes';
import userRoutes from '@scenes/modules/user/routes';
import configListRoutes from '@scenes/modules/configList/routes';
import ConfigLayout from '@scenes/modules/configLayout/src';
import CanvasTest from '@scenes/modules/canvas/src';
import ChartTest from '@scenes/modules/charts/src';

import Panel from '@app/components/panel';
// import Back from '@app/components/goBack';

import {Link} from '@huxy/router';

const breadStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  padding: 0,
  background: 'var(--appBgColor)',
};

const Bread = ({current}) => <ul className="left-bar bread">
  <li><Link to="/">Home</Link></li>
  {current?.map(({path, name}) => <li key={path}><Link to={path}>{name}</Link></li>)}
</ul>;

const scenesRoutes = [
  {
    path: '/scenes',
    name: '场景展示',
    // denied: browserRouter,
    children: [
      {
        path: '/modules',
        name: '模块',
        icon: 'ico-layout',
        component: props => {
          const {hasLayout} = props.current[2] ?? {};
          return hasLayout ? props.children : <div style={{overflow: 'auto', '--screenvh': 'calc(100vh - var(--breadHeight) - 10px)'}}>
            <div className="main-top" style={breadStyle}><Bread {...props} /></div>
            <div style={{marginTop: 'calc(var(--breadHeight) + 10px)'}}>{props.children}</div>
          </div>;
        },
        children: [
          ...lowCodeRoutes,
          ...apisRoutes,
          ...userRoutes,
          ...configListRoutes,
          {
            path: '/configLayout',
            name: '框架配置',
            icon: 'ico-flag',
            component: props => <Panel>
              <span style={{marginRight: 10}}>{props.name}按钮</span>
              <ConfigLayout {...props} />
            </Panel>,
          },
          {
            path: '/canvas',
            name: '画板',
            icon: 'ico-flag',
            component: <CanvasTest />,
          },
          {
            path: '/charts',
            name: '仪表盘',
            icon: 'ico-flag',
            component: <ChartTest />,
          },
        ],
      },
      {
        path: '/packages',
        name: 'packages',
        icon: 'ico-layout',
        children: [],
      },
      {
        path: '/statics',
        name: 'statics',
        icon: 'ico-layout',
        children: [],
      },
    ],
  },
];

export default scenesRoutes;
