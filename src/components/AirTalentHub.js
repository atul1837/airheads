import * as React from "react";
import { isMobile } from "react-device-detect";
import { PlusOutlined } from '@ant-design/icons';
import axios from "axios";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function TrackingHeads() {

  // submit form data to api

  const onSubmit = (values) => {
    let BASE_URL = "http://localhost:4000/api";
    console.log(BASE_URL)
    let api = `${BASE_URL}/freelancer`;
    console.log('Received values of form: ', values);
    // make a post request to api using axios
    let config = {
      method: 'post',
      url: api,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(values),
    };
    axios(config).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });

  };

  return (
    <div style={{ background: "#000000", padding: "3rem 3rem" }}>
      <h1
        style={{
          marginBottom: "2rem",
          WebkitTextStroke: "2px #CEFF86",
          fontFamily: "kanit",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: isMobile ? "32px" : "72px",
          lineHeight: "80%",
        }}
      >
        AIR TALENT HUB
      </h1>
      <Form
        onFinish={onSubmit}
        wrapperCol={{ span: 14 }}
        layout="vertical"
        style={{
          marginBottom: "2rem",
          fontFamily: "kanit",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "80%",
        }}
     >
        <Form.Item name="name">
          <Input placeholder="Name" style={{ color: "#828282", width: '100%', backgroundColor: "#000", border: "1px solid #CEFF86" }} />
        </Form.Item>
        <Form.Item name="experience">
          <Input placeholder="Experience in years" style={{ color: "#828282", width: '100%', backgroundColor: "#000", border: "1px solid #CEFF86" }} />
        </Form.Item>
        <Form.Item name="rate">
          <Input placeholder="Rate Per hour" style={{ color: "#828282", width: '100%', backgroundColor: "#000", border: "1px solid #CEFF86" }} />
        </Form.Item>
        <Form.Item name="personal_website">
          <Input placeholder="personal_website" style={{ color: "#828282", width: '100%', backgroundColor: "#000", border: "1px solid #CEFF86" }} />
        </Form.Item>
        <Form.Item name="portfolio">
          <TextArea placeholder="Portfolio description" style={{ color: "#828282", width: '100%', backgroundColor: "#000", border: "1px solid #CEFF86" }} rows={4} />
        </Form.Item>
        <Form.Item name="profile-image">
          <Upload style={{ color: "#828282", width: '100%', backgroundColor: "#000", border: "1px solid #CEFF86" }} action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ color: "#828282", color: "#828282", marginTop: 8 }}>Profile Image</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" style={{ WebkitTextStroke: "#000", backgroundColor: "#CEFF86", color: "#000", border: "1px solid #CEFF86", width: isMobile ? "100%" : "50%" }} >Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

