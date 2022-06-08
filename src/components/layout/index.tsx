import React from "react";
import { AppFooter } from "./footer";
import { AppHeader } from "./header";
import { Layout } from "antd";
import { AppContent } from "./content";
import "./index.css";
import { Children } from "../sidebar/model";

export const AppLayout: React.FC<Children> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh", overflow: "hidden" }}>
      <AppHeader />
      <AppContent>{children}</AppContent>
      <AppFooter />
    </Layout>
  );
};
