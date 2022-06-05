/* eslint-disable */
import React,{useState,useRef} from "react";
import { Row, Col } from "antd";
import logincontainer from "../../../assets/logincontainer.png";
import "./SideLogin.css";
import { Form, Input, Button, Checkbox,Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
// import Image from "../../../assets/images/bg1.jpeg"
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
export default function SideLogin() {
  const [isLogin,setLogin] = useState("");
  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] =useState("");

  const login = async ()=>{

  };
  
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div style={{background: 'linear-gradient(90deg, rgba(214,186,199,1) 0%, rgba(225,229,235,1) 35%)' }}>
        
        <Row style={{height:"100vh",backgroundImage: 'url(' + Image + ')',backgroundSize: 'auto' }}>
          
          <Col md={24} lg={10} sm={24}>
            <div style={{   width: "70%", margin: "12%"}}>
            <div className="form-container">
              <div style={{ marginBottom: "20px" }}>
                <h2>
                  <b>WELCOME TO PITC</b>
                </h2>
              </div>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
              
                <Row>
                  <Col span={24}>
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Username!",
                        },
                      ]}
                    >
                      <label>
                        <b>Enter Username</b>
                      </label>

                      <Input
                        // prefix={<UserOutlined className="site-form-item-icon" />}
                        size="large"
                        onChange={(e)=>{
                          setLoginEmail(e.target.value)
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <label>
                      <b>Your Password</b>
                    </label>

                    <a style={{ float: "right" }} className="login-form-forgot">
                      Forgot password
                    </a>
                  </Col>
                </Row>
                

                <Row>
                  <Col span={24}>
                    <Form.Item
                      rules={[
                        {
                          required: false,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password size="large" 
                       />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item>
                      <Button
                        block
                        size="large"
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        onClick={()=>window.location="/dashboard"}
                      >
                        Log in
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>

            </div>
            </div>
          </Col>
          <Col lg={14}>
            <div className="overflow-hidden bg-blue-100 d-lg-block pl-0 h-100" >
              <div className="login_container-2 d-flex align-items-center justify-content-center h-100 overflow-hidden">
                <img className="login_container_img" src={logincontainer}></img>
              </div>
            </div>
          </Col>
        </Row>
      
      </div>
    </>
  );
}
