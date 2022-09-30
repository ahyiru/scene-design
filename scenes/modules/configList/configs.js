import {Tag, Space, Button} from 'antd';
import {formatTime} from '@huxy/utils';
import Ellipsis from '@app/components/ellipsis';

import {defProject as project} from '@app/configs';
import * as configs from '@app/utils/configs';
import * as rules from '@app/utils/rules';

import * as apis from './mock';

export const defProject = project;
export const formConfigs = configs;
export const formRules = rules;
export const apiList = apis;

export const tabs = [
  {
    key: 1,
    value: '已激活',
  },
  {
    key: 0,
    value: '未激活',
  },
];

export const formList = [
  {
    type: 'input',
    name: 'name',
    label: '用户名',
    props: {
      placeholder: '请输入',
      allowClear: true,
      style: {width: '120px'},
    },
  },
  {
    type: 'select',
    name: 'role',
    label: '等级',
    props: {
      placeholder: '请选择',
      allowClear: true,
      style: {width: '100px'},
      options: formConfigs.roleList,
    },
  },
];

export const actionList = (actions, disabled) => [
  {
    key: 'add',
    type: 'primary',
    label: '新增',
    action: actions['handleAdd'],
  },
  {
    key: 'export',
    type: 'default',
    label: '导出',
    action: actions['handleExport'],
  },
  {
    key: 'handleDelete',
    type: 'default',
    label: '批量删除',
    action: actions['handleDelete'],
    disabled,
  },
];

export const colActions = [
  {
    key: 'handleCheck',
    type: 'link',
    label: '设置',
  },
  {
    key: 'handleEdit',
    type: 'link',
    label: '编辑',
  },
  {
    key: 'handleDelete',
    type: 'link',
    label: '删除',
  },
];

export const tableHeader = [
  {
    dataIndex: 'name',
    title: '用户名',
  },
  {
    dataIndex: 'email',
    title: '邮箱',
  },
  {
    dataIndex: 'active',
    title: '状态',
  },
  {
    dataIndex: 'github',
    title: '绑定GitHub',
  },
  {
    dataIndex: 'role',
    title: '等级',
  },
  {
    dataIndex: 'updatetime',
    title: '更新时间',
  },
  {
    dataIndex: 'updater',
    title: '更新人',
  },
  {
    dataIndex: 'action',
    title: '操作',
    align: 'center',
  },
];

export const colsCfg = actions => [
  {
    dataIndex: 'name',
    render: (text, record) => <a onClick={() => actions.handleCheck(record)}>{text}</a>,
  },
  {
    dataIndex: 'email',
    render: text => text.replace(/\S+(@\S+)/, '*****$1'),
  },
  {
    dataIndex: 'active',
    render: text => (text ? <Tag color="green">已激活</Tag> : <Tag color="red">未激活</Tag>),
  },
  {
    dataIndex: 'github',
    render: text => (text ? <Tag color="green">已激活</Tag> : <Tag color="red">未激活</Tag>),
  },
  {
    dataIndex: 'role',
    render: (text, record) => {
      return formConfigs.roleList.find(v => v.value === text)?.label ?? '-';
    },
  },
  {
    dataIndex: 'updatetime',
    render: (text, record) => {
      const time = text || record.createtime || record.signuptime || +new Date();
      return formatTime(new Date(time));
    },
  },
  {
    dataIndex: 'updater',
    render: (text, record) => text || record.creator,
  },
  {
    dataIndex: 'action',
    render: (text, record) => {
      const disabled = false; // !profile.role && record._id !== profile._id;
      const color = disabled ? 'var(--light-color)' : 'var(--red2)';
      const acList = Object.keys(actions).map(key => ({...colActions.find(item => item.key === key), action: actions[key]}));
      return (
        <Space>
          {acList.map(({key, action, type, label}) => (
            <Button key={key} type={type} size="small" disabled={disabled} style={{color: key === 'handleDelete' ? color : ''}} onClick={() => action(record)}>
              {label}
            </Button>
          ))}
        </Space>
      );
    },
  },
];

const defCols = () => ({render: text => <Ellipsis>{text}</Ellipsis>});

export const getColumns = (columns, colsCfg, initCols = defCols()) => columns.map(col => ({...initCols, ...col, ...colsCfg?.find(({dataIndex}) => dataIndex === col.dataIndex)}));

export const RenderItem = ({index, style, item, isItemLoaded}) => {
  let content;
  if (!isItemLoaded(index)) {
    content = 'Loading...';
  } else {
    content = item.name;
  }
  return <div style={{...style, borderBottom: '1px solid #333'}}>
    <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>{content}</div>
  </div>;
};
