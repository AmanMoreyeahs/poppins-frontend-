import {
  MainContent,
  SubContent,
  ModalTitle,
  ClipBoardDiv,
  LeftClip,
  SubClipBoard,
  CopyTitle,
  LinkTitle,
  ShareBox,
  ShareDiv,
  ShareTitle,
} from "../modalStyle";
import {
  WhatsAppOutlined,
  MailFilled,
  MessageOutlined,
  CopyOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
export const ShopModalContent = () => {
  return (
    <MainContent>
      <SubContent>
        <div>
          <ModalTitle>Share Store Link</ModalTitle>
        </div>
        <ClipBoardDiv>
          <SubClipBoard>
            <LeftClip>
              <div>
                <RetweetOutlined style={{ color: "#8395AE" }} />
              </div>
              <div>
                <CopyTitle>grandbake.catalog.to</CopyTitle>
              </div>
            </LeftClip>
            <div>
              <CopyOutlined style={{ color: "#8395AE" }} />
            </div>
          </SubClipBoard>
        </ClipBoardDiv>
        <div style={{ marginTop: "20px" }}>
          <LinkTitle>Share link via</LinkTitle>
        </div>
        <ShareBox>
          <ShareDiv>
            <WhatsAppOutlined style={{ color: "green", fontSize: "22px" }} />
            <ShareTitle>WhatsApp</ShareTitle>
          </ShareDiv>
          <ShareDiv>
            <MailFilled style={{ color: "#e37826", fontSize: "22px" }} />
            <ShareTitle>Email</ShareTitle>
          </ShareDiv>
          <ShareDiv>
            <MessageOutlined style={{ color: "blue", fontSize: "22px" }} />
            <ShareTitle>Sms</ShareTitle>
          </ShareDiv>
        </ShareBox>
      </SubContent>
    </MainContent>
  );
};
