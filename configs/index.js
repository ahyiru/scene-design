const appName = require('./appName');
const app = require('./app');
const {scenes} = require('./scenes');
const cfg = {
  app,
  ...scenes,
};

const configs = cfg[appName] || app;
configs.appName = appName;

module.exports = configs;
