const app = {
  HOST: process.env.IP || 'http://localhost',
  PORT: process.env.PORT || 7000,
  PRO_PORT: process.env.PRO_PORT || 7001,
  BUILD_DIR: './build', //'build',
  PUBLIC_DIR: '../public',
  DEV_ROOT_DIR: '/',
  PRD_ROOT_DIR: '/',
  PROXY: {
    url: 'http://47.105.94.51:9202',
    prefix: '/api',
  },
  MOCK: '127.0.0.1:7002',
  SERVER_PORT: 7003,
  projectName: 'scenes_design',
  defProject: {
    name: '场景设计',
    _id: '6098f12b099e1202a287acad',
  },
};

module.exports = app;
