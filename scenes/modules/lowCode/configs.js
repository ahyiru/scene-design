import * as configs from '@app/utils/configs';
import * as rules from '@app/utils/rules';
import apis from '@app/utils/getApis';
import {defProject} from '@app/configs';
import components from './components/components';
import setGlobalConfigs from './components/setGlobalConfigs';
export {default as customRender} from './components/render';

export const globalCfgs = configs;

setGlobalConfigs(globalCfgs);

export const formLayout = globalCfgs.layout;

export const formRules = rules;

export const apiList = apis;

export const pageSchema = async ({id}) => {
  const {result} = await apiList.listSchemaFn({projectId: defProject?._id, routerId: id});
  return {result};
};

export const designPath = id => `/scenes/modules/lowCode/${id}/design`;


export {default as Settings} from '@app/components/settings';
export {default as CustomCollapse} from '@app/components/customCollapse';
export {default as Search} from '@app/components/search';
export {default as GithubIcon} from '@app/components/githubIcon';
export {default as defUser} from '@app/assets/images/user/3.png';


const ele = [
  'div',
  'section',
  'article',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
  'b',
  'i',
  's',
  'u',
  'em',
  'pre',
  'img',
  'a',
  'button',
  'form',
  'input',
  'select',
  'option',
  'radio',
  'checkbox',
  'label',
  'ul',
  'li',
  'table',
  'tbody',
  'thead',
  'tr',
  'th',
  'td',
  'video',
  'audio',
];

const compNames = Object.keys(components);

export const nameList = [...compNames, ...ele];

