import { Modal } from "antd";
import React from "react";
import { ModalProps } from "../../sidebar/model";
import { ModalWrapper } from "../../style";

export const ShareModal: React.FC<ModalProps> = ({ visible, setvisible }) => {
  return (
    <>
      <ModalWrapper
        centered
        visible={visible}
        onCancel={() => setvisible(false)}
        width={426}
        footer={""}
      ><h1>content</h1></ModalWrapper>
    </>
  );
};
