import {defProject as project} from '@app/configs';
import apis from '@app/utils/getApis';
import * as configs from '@app/utils/configs';
import * as rules from '@app/utils/rules';

export {PROXY} from '@app/configs';

export {testFetcher} from '@app/apis/fetcher';

export const defProject = project;
export const apiList = apis;
export const formConfigs = configs;
export const formRules = rules;
