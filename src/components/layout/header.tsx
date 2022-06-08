import { LogoutOutlined, WechatFilled, AlertFilled } from "@ant-design/icons";
import React from "react";
import { Badge } from "antd";
import { PNG } from "../../assets";
export const AppHeader: React.FC = () => {
  return (
    <div className="header">
      <div>
        <img src={PNG.POPIN_LOGO} className="poppin-logo" alt="" />
      </div>
      <div className="icon-div">
        <div>
          <WechatFilled className="head-icon" />
        </div>
        <div>
          <Badge count={5}>
            <AlertFilled className="head-icon" />
          </Badge>
        </div>
        <div>
          <LogoutOutlined className="head-icon" />
        </div>
      </div>
    </div>
  );
};
