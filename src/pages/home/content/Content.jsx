import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentProducts from "../../../components/contentProducts/ContentProducts";
import Product from "../../../components/product/Product";
import { fetchProducts } from "../../../store/productsSlice";

import "./style.css";
const Content = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <section style={{ background: "#f8f8f8" }}>
      <Container>
        <ContentProducts products={products.productsData} name="trending" site="left" />
        <ContentProducts products={products.productsData} name="specials" site="bottom" />
        <ContentProducts products={products.productsData} name="latest" site="bottom" />
      </Container>
    </section>
  );
};

export default Content;
