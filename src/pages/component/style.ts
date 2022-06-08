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
