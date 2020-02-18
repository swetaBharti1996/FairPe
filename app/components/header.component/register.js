import { Form, Input, Select, Checkbox, Button, message } from "antd";
import _ from "lodash";

const { Option } = Select;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    loading: false
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ loading: true });
    this.props.form.validateFieldsAndScroll((err, values) => {
      this.setState({ loading: false });
      if (!err) {
        this.props.signup(
          {
            name: values.name,
            email: values.email,
            password: values.password,
            password2: values.password2,
            mobile: values.mobile
          },
          bol => {
            if (bol) {
              message.success("Successfully Registered", 1);
              this.props.closeModal();
            } else {
              if (_.isEmpty(this.props.error)) message.error("error", 1);
              else message.error(this.props.error.data.error, 1);
            }
          }
        );
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { changeAuth } = this.props;
    const { loading } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "91"
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
      </Select>
    );

    return (
      <Form
        {...formItemLayout}
        onSubmit={this.handleSubmit}
        style={{ maxWidth: 400, marginTop: 50 }}
      >
        <Form.Item>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your name!",
                whitespace: true
              }
            ]
          })(<Input size="large" placeholder="Name" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input size="large" placeholder="Email" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password size="large" placeholder={"Password"} />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator("password2", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(
            <Input.Password
              onBlur={this.handleConfirmBlur}
              size="large"
              placeholder={"Confirm Password"}
            />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator("mobile", {
            rules: [
              { required: true, message: "Please input your phone number!" }
            ]
          })(
            <Input
              addonBefore={prefixSelector}
              style={{ width: "100%" }}
              size="large"
              placeholder={"Mobile"}
            />
          )}
        </Form.Item>
        {/* 
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked"
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          )}
        </Form.Item> */}
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "100%" }}
            loading={loading}
          >
            Register
          </Button>
          Or <a onClick={() => changeAuth("login")}>login now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default WrappedRegistrationForm;
