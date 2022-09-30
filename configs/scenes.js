const path = require('path');

const readdir = require('./readdir');

const main = 'app';

const rootBuild = `../../../../${main}/build`;

const pkgDir = path.resolve(__dirname, '../scenes/packages');

const packages = readdir(pkgDir);

const scenes = {};

packages.map(({name, port}, i) => {
  scenes[`scenes/packages/${name}/app`] = {
    PORT: port ?? 7001 + i,
    PRD_ROOT_DIR: `/scenes/${name}`,
    DEV_ROOT_DIR: `/scenes/${name}`,
    BUILD_DIR: `${rootBuild}/scenes/${name}`,
  };
});

module.exports = {packages, scenes};
