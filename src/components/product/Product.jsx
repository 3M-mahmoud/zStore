import {
  CompareArrows,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  ZoomIn,
} from "@mui/icons-material";
import { Tooltip, tooltipClasses } from "@mui/material";
import React from "react";
import "./style.css";

const Product = ({item}) => {
  return (
    <div className="card">
      <div className="image">
        <Tooltip
          title="QuickView"
          placement="top"
          slotProps={{
            popper: {
              sx: {
                [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                  {
                    marginBottom: "8px",
                  },
              },
            },
          }}
          arrow
        >
          <div className="zoom-icon">
            <ZoomIn className="icon" />
          </div>
        </Tooltip>
        <div className="card-image">
          <div className="card-inner">
            <div className="card-front">
              <img
                src={item.images[0].image_link}
                alt="product-1"
              />
            </div>

            <div className="card-back">
              <img
                src={item.images[1].image_link}
                alt="product-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <h4>{item.product_disc}</h4>
        <div className="price">
          <span>{item.product_discount} د.ك</span>
          <del>{item.product_price} د.ك</del>
        </div>
      </div>
      <div className="buttons-group">
        <div className="button-cart">
          <ShoppingCartOutlined className="icon" />
          <span>add to cart</span>
        </div>
        <div className="button-icons">
          <FavoriteBorderOutlined className="icon" />
          <CompareArrows className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Product;
