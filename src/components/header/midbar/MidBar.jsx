import {
  AccountCircleOutlined,
  CompareArrows,
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Container,
  Link,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchInput from "../../search/SearchInput";

import imgLogo from "../../../assets/images/Logo/Logo-Blue-Plus.png";
import { yellow } from "@mui/material/colors";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const MidBar = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  return (
    <Box sx={{bgcolor: "#F8F8F8"}}>
    <Container sx={{ paddingTop: 1, paddingBottom: 1}}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent="space-between"
        gap={2}
      >
        <Stack direction={"row"} alignItems="center" gap={1}>
          {useMediaQuery("(max-width:1000px)") && (
            <ul
            className="toggle-icon"
            >
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          )}
          <Link
            href="#"
            sx={{ width: { xs: "150px", sm: "200px", lg: "260px", display: "block" } }}
          >
            <img style={{ width: "100%" }} src={imgLogo} alt="Logo" />
          </Link>
        </Stack>
        {useMediaQuery("(min-width:1000px)") && (
          <Fragment>
            <SearchInput />
            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              color={theme.palette.textColor.main}
            >
              <Stack
                alignItems="center"
                sx={{ "&:hover": { color: theme.palette.primary.main } }}
              >
                <AccountCircleOutlined sx={{ fontSize: "30px" }} />
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ fontSize: "13px" }}
                >
                  {t("midbarAccount")}
                </Typography>
              </Stack>
              <Badge badgeContent={1} color="error">
              <Stack
                alignItems="center"
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  },
                }}
              >
                <FavoriteBorderOutlined sx={{ fontSize: "30px" }} />
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ fontSize: "13px" }}
                >
                {t("midbarWishList")}
                </Typography>
              </Stack>
              </Badge> 
              <Badge badgeContent={4} color="error">
              <Stack
                alignItems="center"
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  },
                }}
              >
                <CompareArrows sx={{ fontSize: "30px" }} />
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ fontSize: "13px" }}
                >
                {t("midbarCompare")}
                </Typography>
              </Stack>
              </Badge> 
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"flex-end"}
              width={200}
              gap={1}
              sx={{
                "&:hover .cartText": { color: theme.palette.primary.main },
                "&:hover .cartIcon": {
                  bgcolor: yellow["A400"],
                  color: "#000000c3",
                },
                cursor: "pointer",
              }}
            >
              <Typography
                className="cartText"
                sx={{
                  fontSize: "12px",
                  color: theme.palette.textColor.main,
                  minWidth: "130px",
                }}
              >
                1 item(s) - 320.000 د.ك
              </Typography>
              <Stack
                className="cartIcon"
                direction="row"
                alignItems={"center"}
                justifyContent="center"
                sx={{
                  padding: "6px",
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.background.paper,
                  borderRadius: "4px",
                }}
              >
                <ShoppingCartOutlined sx={{ fontSize: "20px" }} />
              </Stack>
            </Stack>
          </Fragment>
        )}
        {useMediaQuery("(max-width:1000px)") && (
        <Stack direction={"row"} alignItems="center" gap={3}>
        <Search sx={{fontSize: 30, cursor: "pointer"}} />
        <StyledBadge badgeContent={1} color="error">
        <ShoppingCartOutlined sx={{fontSize: 30, cursor: "pointer"}} />
        </StyledBadge>
        </Stack>
        )}
      </Stack>
    </Container>
    </Box>
  );
};

export default MidBar;
