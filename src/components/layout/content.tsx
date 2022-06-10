import React from "react";
import { Layout } from "antd";
import Sidebar from "../sidebar/sidebar";
import { Children } from "../../Model/model";

const { Content } = Layout;

export const AppContent: React.FC<Children> = ({ children }) => {
  return (
    <Content
      style={{
        background: "#F4F5FD",
        minHeight: "calc(100vh - 135px)",
      }}
    >
      <div className=" flex-d mb-20" style={{ marginTop: "5%" }}>
        <div>
          <Sidebar />
        </div>
        <div className="content-div">{children}</div>
        {/* <div className="break-content-div">{children}</div> */}
      </div>
    </Content>
  );
};
