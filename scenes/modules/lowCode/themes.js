import {CustomCollapse, Settings, Search, defUser, GithubIcon} from './configs';

const sizes = {
  '--maxWidth': '100vw',
  '--menuWidth': '240px',
  '--collapseWidth': '68px',
  '--collapseMenuWidth': '180px',
  '--headerHeight': '68px',
  '--footerHeight': '60px',
  '--breadHeight': '50px',
  '--menuItemHeight': '48px',
};
const colors = {
  '--bannerBgColor': '#ffffff',
  '--navBgColor': '#ffffff',
  '--menuBgColor': '#ffffff',
  '--appBgColor': '#f3f4f7',
  '--pageBgColor': '#f3f4f7',
  '--panelBgColor': '#ffffff',
  '--appColor': '#343a40',
  '--linkColor': '#4b4b5a',
  '--pageLinkColor': '#343a40',
  '--linkHoverColor': '#5369f8',
  '--linkActiveColor': '#5369f8',
  '--borderColor': '#ebeef5',
};

export const theme = {
  name: 'lowcode',
  key: 'lowcode',
  list: {sizes, colors},
};

export const leftList = [
  {
    key: 'collapse',
    name: 'collapse',
    type: 'collapse',
    Custom: () => <CustomCollapse />,
  },
  {
    key: 'configs',
    type: 'configs',
    Custom: () => <Settings />,
  },
  {
    key: 'search',
    title: '搜索',
    Custom: () => <Search />,
  },
];

export const rightList = [
  {
    key: 'username',
    name: 'admin',
    img: defUser,
    children: [
      {
        key: 'profile',
        name: '个人中心',
        type: 'profile',
        icon: 'UserOutlined',
        // path: '/profile',
      },
      {
        key: 'settings',
        name: '设置',
        type: 'setting',
        icon: 'SettingOutlined',
        // path: '/profile',
      },
      {
        divider: true,
        key: 'logout',
        name: '退出',
        type: 'logout',
        icon: 'PoweroffOutlined',
        /* handle: item => {
          logout();
        }, */
      },
    ],
  },
  {
    key: 'github',
    title: 'Github',
    icon: GithubIcon,
    type: 'link',
    link: 'https://github.com/ahyiru/web-design',
  },
];
