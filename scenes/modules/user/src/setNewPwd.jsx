import {Form, Input, Button, message} from 'antd';
import {LockOutlined, LeftOutlined} from '@ant-design/icons';
import {useIntls} from '@app/components/intl';
import {apiList, formRules, prefix} from '../configs';

const {passwordRule, confirmRule} = formRules;

const Index = props => {
  const getIntls = useIntls();
  const onFinish = async values => {
    try {
      const query = props.params?.token;
      const {code, token, message: msg} = await apiList.setNewPwdFn({password: values.password, token: query});
      if (code === 200) {
        message.success(msg);
        props.router.push(`${prefix}/user/signin`);
      }
    } catch (err) {
      props.router.push(`${prefix}/user/signin`);
    }
  };

  return (
    <>
      <Form name="setNewPwd" autoComplete="off" onFinish={onFinish}>
        <Form.Item name="password" rules={passwordRule}>
          <Input prefix={<LockOutlined style={{marginRight: '7px', color: '#999'}} />} type="password" placeholder={getIntls('login.password')} autoComplete="new-password" />
        </Form.Item>
        <Form.Item name="confirm" rules={confirmRule}>
          <Input prefix={<LockOutlined style={{marginRight: '7px', color: '#999'}} />} type="password" placeholder={getIntls('login.confirmPwd')} autoComplete="new-password" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            {getIntls('login.resetPwd')}
          </Button>
        </Form.Item>
      </Form>
      <div>
        <div style={{textAlign: 'center'}}>
          <Button onClick={e => props.router.push(`${prefix}/user/signin`)} type="link" size="small" icon={<LeftOutlined />}>
            {getIntls('login.backLogin')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Index;
