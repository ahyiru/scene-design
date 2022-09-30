const express = require('express');
const path = require('path');
const {appName, BUILD_DIR} = require('../configs');
const {packages} = require('../configs/scenes');

const build = path.resolve(appName, BUILD_DIR);

const appScenes = app => {
  packages.map(scene => {
    const {name} = scene;
    const route = `/scenes/${name}`;
    const sceneDist = `${build}${route}`;
    app.use(route, express.static(sceneDist));
    app.get(`${route}/*`, function (request, response) {
      response.sendFile(path.resolve(sceneDist, 'index.html'));
    });
  });
};

module.exports = appScenes;
