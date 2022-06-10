import React from "react";
import { ModalProps } from "../../../Model/model";
import { ModalWrapper } from "../../style";
import { ShopModalContent } from "../components/modalComponent";
export const ShareModal: React.FC<ModalProps> = ({ visible, setvisible }) => {
  return (
    <>
      <ModalWrapper
        centered
        visible={visible}
        onCancel={() => setvisible(false)}
        width={426}
        footer={""}
      >
        <ShopModalContent />
      </ModalWrapper>
    </>
  );
};
