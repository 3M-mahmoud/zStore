import { SearchOutlined } from "@mui/icons-material";
import { InputBase, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginRight: theme.spacing(2),
  backgroundColor: "#FFF",
  marginLeft: 0,
  flexGrow: 1,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1.2),
  height: "100%",
  position: "absolute",
  top: "0",
  right: "0",
  cursor: "pointer",
  borderTopRightRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    borderRadius: "4px",
    border: "1px solid #e4e2e2",
    "&:focus": {borderColor: theme.palette.primary.main},
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: theme.spacing(1),
    transition: theme.transitions.create("borderColor"),
    width: "100%",
  },
}));

const SearchInput = () => {
  const { t, i18n } = useTranslation();
  return (
    <Search sx={{direction: `${i18n.language === "en" ? "" : "ltr"}`}}>
      <StyledInputBase
        placeholder={t("search")}
        sx={{ fontSize: 16}}
        inputProps={{ "aria-label": "search" }}
      />
      <SearchIconWrapper>
        <SearchOutlined sx={{ color: "#FFF" }} />
      </SearchIconWrapper>
    </Search>
  );
};

export default SearchInput;
