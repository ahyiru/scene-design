const getName = () => {
  let name = process.env.npm_config_dirname || 'app';
  const arr = name.split('/');
  if (arr.length === 2 && arr[0] === 'scenes') {
    name = `${arr[0]}/packages/${arr[1]}/app`;
  }
  return name;
};

module.exports = getName();
