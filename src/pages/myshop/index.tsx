import "./index.css";
import { useState } from "react";
import {
  ShareAltOutlined,
  HeatMapOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { PNG } from "../../assets";
import { CreateButton, HeaderTitle } from "../component";
import { ShopButtonSection, ShopCart } from "../component/style";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../route/constant";
import { ShareModal } from "../../components/modal/shopModal/shopModal";

export const MyShop = () => {
  const navigate = useNavigate();
  const [show, setshow] = useState<boolean>(false);
  return (
    <div>
      <ShareModal visible={show} setvisible={setshow} />
      <HeaderTitle
        logo={"GS"}
        title={"Grand Shop Bake"}
        subTitle={"grandbake.catalog.to"}
        Icon={<ShareAltOutlined className="f-22" />}
        subIcon={
          <HeatMapOutlined className="f-22" onClick={() => setshow(true)} />
        }
      />
      <ShopCart>
        <div>
          <div className="cart-image-section ">
            <img src={PNG.SHOP_CART} alt="" className="cart-image" />
          </div>
          <div className="mt-20">
            <h5 className="cart-title">Your shop is empty!</h5>
            <p className="cart-sub-title ">
              Start by adding products in a catalog.
            </p>
          </div>
          <ShopButtonSection>
            <div onClick={() => navigate(ROUTES.CREATE_CATALOG)}>
              <CreateButton title={"Create Catalog"} />
            </div>
            <div>
              <CreateButton title={"Add Product"} icon={<PlusOutlined />} />
            </div>
          </ShopButtonSection>
        </div>
      </ShopCart>
    </div>
  );
};
