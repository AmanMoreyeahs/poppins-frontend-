import React from "react";
import { Button, Header } from "../../Model/model";
import { CatalogButton, ShopButton } from "./style";
export const HeaderTitle: React.FC<Header> = ({
  logo,
  title,
  subTitle,
  Icon,
  subIcon,
  type,
}) => {
  return (
    <div className="shop-header">
      <div className="shop-header-left">
        <div>
          <p
            className={type === "create-catalog" ? "catalog-back" : "shop-logo"}
          >
            {logo}
          </p>
        </div>
        <div>
          <div className="shop-title">{title}</div>
          <div className="shop-sub-title">{subTitle}</div>
        </div>
      </div>
      <div className="shop-div">
        {Icon}
        {subIcon}
      </div>
    </div>
  );
};

export const CreateButton: React.FC<Button> = ({ title, icon }) => {
  return (
    <ShopButton>
      {icon}
      {title}
    </ShopButton>
  );
};
export const CButton = ({ title }: { title: any }) => {
  return <CatalogButton>{title}</CatalogButton>;
};


