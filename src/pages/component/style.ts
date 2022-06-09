import styled from "styled-components";
import { Button } from "antd";

export const ShopButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
`;
export const ShopButton = styled(Button)`
  background-color: #f8f8f8;
  border: 1px solid #555555;
  border-radius: 6px;
  color: #555555;
  font-size: 16px;
  letter-spacing: 0.12px;
  line-height: 19px;
  text-align: center;
  height: 48px;
  width: 214px;
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
    border: 1px solid #555555;
    color: #555555;
  }
`;
export const ShopCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
export const UploadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UploadButtonBox = styled.div`
  position: relative;
  top: -20px;
  bottom: 10px;
  left: 45px;
  z-ndex: 10;
`;
export const CatalogButton = styled(Button)`
  background-color: #4a4a4a;
  border-radius: 2px;
  width: 124px;
  height: 34px;
  letter-spacing: 0.12px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background-color: #4a4a4a;
    color: #ffffff;
  }
`;
