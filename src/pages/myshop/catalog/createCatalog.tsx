import React, { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { InputField } from "../../../components/shared/input/input";
import { PlusOutlined } from "@ant-design/icons";
import { PNG } from "../../../assets";
import { CButton, HeaderTitle } from "../../component";
import { UploadBox, UploadButtonBox } from "../../component/style";

export const CreateCatalog: React.FC = () => {
  const [avatar, setAvatar] = useState<string>("");
  const [avatarPreview, setAvatarPreview] = useState<any>(PNG.CATALOg);
  const onUpload = (e: any) => {
    if (e.target.name === "avatar") {
      const reader: any = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      console.log("error");
    }
  };
  return (
    <div>
      <HeaderTitle
        type="create-catalog"
        logo={<LeftOutlined />}
        title={"Create Catalogue"}
        subIcon={<CButton title={"Create Catalog"} />}
      />
      <div className="create-div">
        <div>
          <div className="file-box-div">
            <div>
              <h2 className="file-title mt-15">Add Catalog image</h2>
            </div>
            <UploadBox>
              <div>
                <img src={avatarPreview} className="image-preview" alt="" />
                <UploadButtonBox>
                  <div className="upload-icon">
                    <label htmlFor="file-input">
                      <PlusOutlined />
                    </label>
                  </div>
                </UploadButtonBox>
                <input
                  type="file"
                  accept="image*/"
                  name="avatar"
                  id="file-input"
                  onChange={onUpload}
                />
              </div>
            </UploadBox>
          </div>
          <div className="form-div">
            <Form layout="vertical">
              <Form.Item
                label={<label className="form-label">Catalog Name</label>}
              >
                <InputField placeholder="eg: Cakes,Grocery,Skincare" />
              </Form.Item>
              <Form.Item
                label={
                  <label className="form-label">Description (Optional)</label>
                }
              >
                <InputField />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
