import {formatTime} from '@huxy/utils';

const setGlobalConfigs = globalCfgs => {
  window.utils = {formatTime};
  window.configs = globalCfgs;
};

export default setGlobalConfigs;
