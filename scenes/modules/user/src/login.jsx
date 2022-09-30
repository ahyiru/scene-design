import {useState} from 'react';
import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined, GithubOutlined} from '@ant-design/icons';
import {Spinner} from '@huxy/components';
import {storage} from '@huxy/utils';

import {useIntls} from '@app/components/intl';

import {apiList, formRules, prefix} from '../configs';

const {loginFn} = apiList;
const {nameRule} = formRules;

const thirdLoginStyle = {
  textAlign: 'center',
  fontSize: '3.6rem',
};

const Index = props => {
  const getIntls = useIntls();
  const [isPending, setIsPending] = useState(false);

  const onFinish = async values => {
    setIsPending(true);
    try {
      const {code, token, message: msg} = await loginFn(values);
      if (code === 200) {
        message.success(msg);
        storage.set('token', token);
      }
    } catch (err) {
      message.success('登录成功！');
    }
    setIsPending(false);
  };

  const auth = () => {
    message.success('登录成功！');
  };

  return (
    <>
      <Form name="login" initialValues={{}} onFinish={onFinish} autoComplete="off">
        <Form.Item name="name" rules={nameRule}>
          <Input prefix={<UserOutlined style={{marginRight: '7px', color: '#999'}} />} placeholder={getIntls('login.username')} />
        </Form.Item>
        <Form.Item name="password">
          <Input prefix={<LockOutlined style={{marginRight: '7px', color: '#999'}} />} type="password" placeholder={getIntls('login.password')} autoComplete="new-password" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            {getIntls('login.login')}
          </Button>
        </Form.Item>
        <Form.Item>
          <Button block onClick={() => onFinish({name: 'test1', password: 'test1234'})}>
            {getIntls('login.visitor')}
          </Button>
        </Form.Item>
      </Form>
      <div>
        <div style={{overflow: 'hidden'}}>
          <a style={{float: 'right'}} onClick={e => props.router.push(`${prefix}/user/signup`)}>
            {getIntls('login.signup')}
          </a>
          <a style={{float: 'left'}} onClick={e => props.router.push(`${prefix}/user/verifyEmail`)}>
            {getIntls('login.forgetPwd')}
          </a>
        </div>
        <div className="split-line" style={{padding: '15px 0'}}>
          {getIntls('login.thirdParty')}
        </div>
        <div style={thirdLoginStyle}>
          <a>
            <GithubOutlined onClick={() => auth()} />
          </a>
        </div>
      </div>
      {isPending && <Spinner global />}
    </>
  );
};

export default Index;
