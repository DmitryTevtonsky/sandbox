import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';

import './index.css';
import AuthWith from '../auth-with';

const { Title, Text } = Typography;

const App = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="form-layout">
      <Title level={4}>Введите свои данные</Title>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item className="form-item" name="username">
          <Input placeholder="E-mail" className="input-item" />
        </Form.Item>

        <Form.Item className="form-item" name="password">
          <Input.Password
            visibilityToggle={false}
            placeholder="Password"
            className="input-item"
          />
        </Form.Item>

        <Form.Item
          className="form-item-remember"
          name="remember"
          valuePropName="checked"
        >
          <Checkbox className="remember-checkbox-item">
            <Text className="secondary-text-field">Запомнить</Text>
          </Checkbox>
        </Form.Item>

        <Form.Item className="form-item">
          <Button
            className="enter-button-item"
            type="primary"
            htmlType="submit"
            block
          >
            Вход
          </Button>
        </Form.Item>
        <Form.Item className="form-item">
          <Text className="secondary-text-field">Или войдите с помощью</Text>
        </Form.Item>
        <AuthWith />
      </Form>
    </div>
  );
};

export default App;
