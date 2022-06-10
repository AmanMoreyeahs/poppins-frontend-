import { Modal } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const primaryPurple = "#974098";
export const colorGrey = "#4a4a4a";
export const colorWhite = "#ffffff";
export const SidebarLink = styled(Link)`
  display: flex;
  color: #000000;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  &:hover {
    background: ${primaryPurple};
    cursor: pointer;
    color: ${colorWhite};
    border-radius:5px;
  }
`;
export const SidebarLabel = styled.span`
  margin-left: 16px;
`;
export const DropdownLink = styled(Link)`
  background: ${colorWhite};
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  font-family: Roboto;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  &:hover {
    cursor: pointer;
    color: ${primaryPurple};
  }
`;
export const SidebarNav = styled.nav`
  background: ${colorWhite};
  width: 300px;
  height: 100vh;
  display: flex;
  padding: 0px 20px;
  justify-content: center;
  top: 1;
  transition: 350ms;
  z-index: 10;
  border-radius: 0 12px 12px 0;
`;

export const SidebarWrap = styled.div`
  width: 100%;
  margin-top: 10px;
`;
export const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    background-color: ${colorWhite};
    border-radius: 9px;
    box-shadow: 0 0 22px 0 rgba(0, 0, 0, 0.16);
    width: 426px;
    height: 370px;
  }
`;
