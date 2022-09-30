import {Form, Input, Button, message, InputNumber, Select} from 'antd';
import {Row, Col} from '@huxy/components';
import Back from '@app/components/goBack';
import Panel from '@app/components/panel';

import {useIntls} from '@app/components/intl';

import {apiList, formRules, formConfigs} from '../configs';

const {addUser, editUser, projectList} = apiList;
const {layout, tailLayout} = formConfigs;
const {nameRule, emailRule, passwordRule, roleRule} = formRules;

const Index = props => {
  const getIntls = useIntls();
  const [form] = Form.useForm();
  const {getState} = props.history;
  const {item, backState} = getState() || {};
  const onFinish = async values => {
    const handler = item ? editUser : addUser;
    values = item ? {...item, ...values} : values;
    const projectName = projectList.find(v => v._id === values.projectId)?.name;
    try {
      const {code, message: msg} = await handler({...values, projectName});
      if (code === 200) {
        message.success(msg);
        props.router.push(`/playground/configTable`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const back = () => {
    backState ? props.router.push(backState) : props.history.back();
  };
  return (
    <div>
      <Row>
        <Col>
          <Back back={back} />
        </Col>
        <Col>
          <Panel>
            <Form name="addUser" onFinish={onFinish} form={form} initialValues={item ?? {}} {...layout} style={{width: '50%'}} autoComplete="off">
              <Form.Item label={getIntls('main.users.addFormText.name')} name="name" rules={nameRule}>
                <Input placeholder={getIntls('main.users.addFormText.name')} />
              </Form.Item>
              <Form.Item label={getIntls('main.users.addFormText.email')} name="email" rules={emailRule}>
                <Input placeholder={getIntls('main.users.addFormText.email')} />
              </Form.Item>
              <Form.Item label={getIntls('main.users.addFormText.password')} name="password" rules={passwordRule}>
                <Input type="password" placeholder={getIntls('main.users.addFormText.password')} autoComplete="new-password" />
              </Form.Item>
              <Form.Item label={getIntls('main.users.addFormText.role')} name="role" rules={roleRule}>
                <InputNumber placeholder={getIntls('main.users.addFormText.role')} />
              </Form.Item>
              <Form.Item label={getIntls('main.users.addFormText.avatar')} name="avatar">
                <Input placeholder={getIntls('main.users.addFormText.avatar')} />
              </Form.Item>
              <Form.Item label={getIntls('main.users.addFormText.projectId')} name="projectId">
                <Select placeholder={getIntls('main.users.addFormText.projectId')} allowClear style={{width: '80%'}}>
                  {projectList.map(v => (
                    <Select.Option key={v._id} value={v._id}>
                      {v.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  {getIntls('main.users.addFormText.submit')}
                </Button>
                <Button style={{marginLeft: '12px'}} onClick={() => form.resetFields()}>
                  {getIntls('main.users.addFormText.reset')}
                </Button>
              </Form.Item>
            </Form>
          </Panel>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
