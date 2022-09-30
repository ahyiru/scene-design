import {Modal, Form, Select} from 'antd';

import {formLayout, nameList} from '../../configs';

const ModalForm = props => {
  const {form, item, isEdit, addFormText} = props;
  return (
    <Form form={form} {...formLayout} initialValues={{}}>
      <Form.Item name="type" label={addFormText.type}>
        <Select placeholder={addFormText.type} showSearch>
          {nameList.map(name => (
            <Select.Option key={name} value={name}>
              {name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      {/* <Form.Item name="props" label="属性">
      <Input placeholder="请输入" />
    </Form.Item> */}
    </Form>
  );
};

const HandleModal = props => {
  const [form] = Form.useForm();
  const {onModalOk, modalVisible, onModalCancel, type, item, addFormText} = props;
  const title = {add: addFormText.add_title, edit: addFormText.edit_title};
  const isEdit = type === 'edit';
  const handleSubmit = () => {
    form
      .validateFields()
      .then(values => {
        onModalOk(values);
        onModalCancel();
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Modal
      title={title[type]}
      visible={modalVisible}
      onOk={() => handleSubmit()}
      // width={600}
      onCancel={() => onModalCancel()}
      okText={addFormText.ok_text}
      cancelText={addFormText.cancel_text}
    >
      <div>
        <ModalForm form={form} item={item} isEdit={isEdit} addFormText={addFormText} />
      </div>
    </Modal>
  );
};

export default HandleModal;
