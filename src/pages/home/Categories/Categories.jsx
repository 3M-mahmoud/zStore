import MainSlider from "../../../components/mainSlider/MainSlider";
import { Fragment, useEffect } from "react";
import { fetchCategories } from "../../../store/categorySlice";
import { useDispatch, useSelector } from "react-redux";

export default function Categories() {
  // constants
  const dispatch = useDispatch();
  const products = useSelector(state => state.category.items);

    // Side Effect
    useEffect(() => {
      dispatch(fetchCategories())
    }, [])
  return (
    <Fragment>
      <section
        style={{
          paddingTop: "30px",
          paddingBottom: "20px",
          width: "calc(100% - 20px)",
          margin: "auto",
          background: "#fff",
        }}
      >
        <MainSlider numPerGroup={3} numPerView={6} products={products} />
      </section>
    </Fragment>
  );
}
