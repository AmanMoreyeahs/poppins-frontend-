import "./login.less";
import { Button, Card, Form, Input, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import FormItem from "antd/lib/form/FormItem";
import { PNG } from "../../../assets";
// import Box from '@mui/material/Box';
// import { inject, observer } from 'mobx-react';

// import AccountStore from '../../stores/accountStore';
// import AuthenticationStore from '../../stores/authenticationStore';
// import { FormInstance } from 'antd/lib/form';
// import { L } from '../../lib/abpUtility';
// import { Redirect } from 'react-router-dom';
// import SessionStore from '../../stores/sessionStore';
// import Stores from '../../stores/storeIdentifier';
// import TenantAvailabilityState from '../../services/account/dto/tenantAvailabilityState';
// import rules from './index.validation';

//Images
// import logo from '../../images/small_logo.png';
// import popinLogo from '../../images/popin_logo.png';

// export interface ILoginProps {
//   authenticationStore?: AuthenticationStore;
//   sessionStore?: SessionStore;
//   accountStore?: AccountStore;
//   history: any;
//   location: any;
// }

export const Login = () => {
  //   changeTenant = async () => {
  //     let tenancyName = this.formRef.current?.getFieldValue('tenancyName');
  //     const { loginModel } = this.props.authenticationStore!;

  //     if (!tenancyName) {
  //       abp.multiTenancy.setTenantIdCookie(undefined);
  //       window.location.href = '/';
  //       return;
  //     } else {
  //       await this.props.accountStore!.isTenantAvailable(tenancyName);
  //       const { tenant } = this.props.accountStore!;
  //       switch (tenant.state) {
  //         case TenantAvailabilityState.Available:
  //           abp.multiTenancy.setTenantIdCookie(tenant.tenantId);
  //           loginModel.tenancyName = tenancyName;
  //           loginModel.toggleShowModal();
  //           window.location.href = '/';
  //           return;
  //         case TenantAvailabilityState.InActive:
  //           Modal.error({ title: L('Error'), content: L('TenantIsNotActive') });
  //           break;
  //         case TenantAvailabilityState.NotFound:
  //           Modal.error({
  //             title: L('Error'),
  //             content: L('ThereIsNoTenantDefinedWithName{0}', tenancyName),
  //           });
  //           break;
  //       }
  //     }
  //   };

  //   handleSubmit = async (values: any) => {
  //     const { loginModel } = this.props.authenticationStore!;
  //     console.log('login', values, loginModel);

  //     await this.props.authenticationStore!.login(values);
  //     sessionStorage.setItem('rememberMe', loginModel.rememberMe ? '1' : '0');
  //     const { state } = this.props.location;
  //     window.location = state ? state.from.pathname : '/';
  //   };

  // let { from } = this.props.location.state || { from: { pathname: '/' } };
  // if (this.props.authenticationStore!.isAuthenticated) return <Redirect to={from} />;

  // const { loginModel } = this.props.authenticationStore!;
  return (
    <div className="flex-container">
      <Form className="form w3-animate-zoom">
        <img src={PNG.POPIN_LOGO} className="logo" alt="" />
        <p className="welcome">Hi there, Welcome!</p>
        <Row style={{ width: "100%", marginTop: -10 }}>
          <Card
            style={{
              borderRadius: 8,
              width: "100%",
              height: 250,
              backgroundColor: "#f1f1f1",
            }}
          >
            <Row style={{ width: "100%" }}>
              <Col>
                <h3>{"Merchant name"}</h3>
              </Col>
              <Col style={{ width: "100%", borderWidth: 1 }}>
                <FormItem name={"tenancyName"}>
                  <Input
                    placeholder={"Merchant Name"}
                    prefix={
                      <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    size="large"
                    style={{
                      boxShadow: "none",
                      WebkitBoxShadow: "none",
                      backgroundColor: "#f1f1f1",
                    }}
                  />
                </FormItem>
              </Col>
              <Button
                className="button"
                style={{
                  width: "50%",
                }}
                htmlType={"submit"}
                //   onClick={this.changeTenant}
              >
                {"Change Tenant"}
              </Button>
            </Row>
          </Card>
        </Row>
        <p className="text">Enter the information below to login.</p>
        <Card style={{ borderRadius: 8, backgroundColor: "#f1f1f1" }}>
          <FormItem
            name={"userNameOrEmailAddress"}
            //   rules={rules.userNameOrEmailAddress}
            style={{
              marginLeft: -25,
            }}
          >
            <Input
              placeholder={"UserNameOrEmail"}
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              style={{
                boxShadow: "none",
                WebkitBoxShadow: "none",
                width: "110%",
                backgroundColor: "#f1f1f1",
              }}
            />
          </FormItem>
          <FormItem
            name={"password"}
            //   rules={rules.password}
            style={{
              marginLeft: -25,
            }}
          >
            <Input
              placeholder={"Password"}
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              size="large"
              style={{
                boxShadow: "none",
                WebkitBoxShadow: "none",
                width: "110%",
                backgroundColor: "#f1f1f1",
              }}
            />
          </FormItem>
          <a href="#" className="Forgot_link">
            {"Forgot Password?"}
          </a>
          <Button className="button" htmlType={"submit"}>
            {"Login"}
          </Button>
          <p className="powerd">
            Powered by :{" "}
            <span>
              <img src={PNG.REWARD} alt="" />
            </span>
          </p>
        </Card>
      </Form>
    </div>
  );
};

/* <Form onFinish={this.handleSubmit} ref={this.formRef}>
          <Row style={{ marginTop: 100 }}>
            <Col span={8} offset={8}>
              <Card style={{ borderRadius: 8 }}>
                <Row>
                  {!!this.props.sessionStore!.currentLogin.tenant ? (
                    <Col span={24} offset={0} style={{ textAlign: 'center' }}>
                      <Button type="link" onClick={loginModel.toggleShowModal}>
                        {L('Current Tenant')} :{' '}
                        {this.props.sessionStore!.currentLogin.tenant.tenancyName}
                      </Button>
                    </Col>
                  ) : (
                    <Col span={24} offset={0} style={{ textAlign: 'center' }}>
                      <Button
                        type="link"
                        onClick={loginModel.toggleShowModal}
                        style={{ color: '#E37826' }}
                      >
                        {L('Tenancy name not selected')}
                      </Button>
                    </Col>
                  )}
                </Row>
              </Card>
            </Col>
          </Row>

          <Row>
            <Modal
              visible={loginModel.showModal}
              onCancel={loginModel.toggleShowModal}
              onOk={this.changeTenant}
              title={L('ChangeTenant')}
              okText={L('OK')}
              cancelText={L('Cancel')}
            >
              <Row>
                <Col span={8} offset={8}>
                  <h3>{L('TenancyName')}</h3>
                </Col>
                <Col>
                  <FormItem name={'tenancyName'}>
                    <Input
                      placeholder={L('TenancyName')}
                      prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                      size="large"
                    />
                  </FormItem>
                  {!this.formRef.current?.getFieldValue('tenancyName') ? (
                    <div>{L('LeaveEmptyToSwitchToHost')}</div>
                  ) : (
                    ''
                  )}
                </Col>
              </Row>
            </Modal>
          </Row>
          <Row style={{ marginTop: 10 }}>
            <Col span={8} offset={8}>
              <Card style={{ borderRadius: 8 }}>
                <div style={{ textAlign: 'center' }}>
                  <h3>{L('Hi there, Welcome')}</h3>
                </div>
                <FormItem name={'userNameOrEmailAddress'} rules={rules.userNameOrEmailAddress}>
                  <Input
                    placeholder={L('UserNameOrEmail')}
                    prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    size="large"
                  />
                </FormItem>

                <FormItem name={'password'} rules={rules.password}>
                  <Input
                    placeholder={L('Password')}
                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    size="large"
                  />
                </FormItem>
                <Row style={{ margin: '0px 0px 10px 15px ' }}>
                  <Col span={12} offset={0}>
                    <Checkbox
                      checked={loginModel.rememberMe}
                      onChange={loginModel.toggleRememberMe}
                      style={{ paddingRight: 8 }}
                    />
                    {L('RememberMe')}
                    <br />
                    <a style={{ color: '#E37826' }}>{L('ForgotPassword')}</a>
                  </Col>

                  <Col span={8} offset={4}>
                    <Button
                      style={{
                        backgroundColor: '#E37826',
                        color: 'white',
                        borderColor: '#E37826',
                        borderRadius: 8,
                      }}
                      htmlType={'submit'}
                      danger
                    >
                      {L('LogIn')}
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Form> */
