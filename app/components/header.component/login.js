import { Form, Icon, Input, Button, Checkbox, message } from "antd";

class NormalLoginForm extends React.Component {
  state = {
    loading: false
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ loading: true });
    this.props.form.validateFields((err, values) => {
      this.setState({ loading: false });
      if (!err) {
        this.props.login(
          { email: values.email, password: values.password },
          bol => {
            if (bol) {
              message.success("Successfully Login", 1);
              this.props.closeModal();
            } else message.error("Email or Password is wrong ", 1);
          }
        );
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { changeAuth } = this.props;
    const { loading } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} style={{ maxWidth: 300 }}>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="E-mail"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          {/* <a style={{ float: "right" }} href="">
            Forgot password
          </a> */}
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            loading={loading}
          >
            Log in
          </Button>
          Or <a onClick={() => changeAuth("register")}>register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
