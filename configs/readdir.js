const fs = require('fs');

const readdir = dir => {
  if (!fs.existsSync(dir)) {
    return [];
  }
  const files = fs.readdirSync(dir);
  const result = [];
  for(let i = 0, l = files.length; i < l; i++) {
    const name = files[i];
    const stats = fs.statSync(`${dir}/${name}`);
    if (stats.isDirectory()) {
      result.push({name});
    }
  }
  return result;
};

module.exports = readdir;
