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
// login
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
`;
export const Main_div = styled.div`
  background-color: #ffffff;
  border: 4px solid #ffffff;
  border-radius: 21px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.2);
  width: 406px;
  height: 640px;
  padding: 40px;
  align-items: end;
  flex-wrap: wrap;
`;
export const Footer_container = styled.div`
    background-color: #2B478B;
    border: 1px solid #2B478B;
    width: 100%
    height: auto;
`;
export const Save_button = styled.div`
  color: #ffffff;
  border: none;
  background-color: #e37826;
  border-radius: 8px;
  width: 100%;
  height: 48px;
  padding: 10px;
  text-align: center;
`;
