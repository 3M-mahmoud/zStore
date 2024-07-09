import { Box, Button } from "@mui/material";
import cat1 from "../../assets/images/Categories/Games Club.png";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";

const baseUrl = "http://localhost:1337";

const CatCard = ({ product }) => {
  const { t, i18n } = useTranslation();
  return (
    <Fragment>
      <Box
        sx={{
          bgColor: "#fff",
          cursor: "pointer",
          boxShadow: "0 5px 50px -10px rgba(0, 0, 0, 0.05)",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          "&:hover": { boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" },
          "&:hover img": { transform: "scale(1.1)" },
        }}
      >
        <img
          src={`${baseUrl}${product.attributes.categoriesImage.data.attributes.url}`}
          alt="Game Club"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transition: "all .3s",
          }}
        />
      </Box>
      <Button
        sx={{
          zIndex: 99,
          position: "absolute",
          bottom: -20,
          width: "calc(100% - 20px)",
          marginLeft: "10px",
          marginRight: "10px",
          textTransform: "uppercase",
          color: "black",
          background: "#FFE700",
          boxShadow: "none",
          fontSize: "15px",
          padding: "4px 20px",
          textWrap: "nowrap",
          "&:hover": { background: "#FFE700", boxShadow: "none" },
        }}
        variant="contained"
      >
        {t(`DeskTopMenu${product.attributes.categoriesName}`)}
      </Button>
    </Fragment>
  );
};

export default CatCard;
