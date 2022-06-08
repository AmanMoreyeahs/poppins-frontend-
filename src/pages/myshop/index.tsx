import "./index.css";
import {
  ShareAltOutlined,
  HeatMapOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { PNG } from "../../assets";
import { CreateButton, HeaderTitle } from "../component";
import { ShopButtonSection, ShopCart } from "../component/style";
export const MyShop = () => {
  return (
    <div>
      <HeaderTitle
        logo={"GS"}
        title={"Grand Shop Bake"}
        subTitle={"grandbake.catalog.to"}
        Icon={<ShareAltOutlined className="f-22" />}
        subIcon={<HeatMapOutlined className="f-22" />}
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
            <div>
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
