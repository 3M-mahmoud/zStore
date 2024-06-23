import {
  AccountCircleOutlined,
  CompareArrows,
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchInput from "../../search/SearchInput";

import imgLogo from "../../../assets/images/Logo/Logo-Blue-Plus.png";
import { yellow } from "@mui/material/colors";
import { Fragment } from "react";

const MidBar = () => {
  const theme = useTheme();

  return (
    <Container sx={{ paddingTop: 1, paddingBottom: 1 }}>
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
                <AccountCircleOutlined sx={{ fontSize: "24px" }} />
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ fontSize: "10px" }}
                >
                  Account
                </Typography>
              </Stack>
              <Stack
                alignItems="center"
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  },
                }}
              >
                <FavoriteBorderOutlined sx={{ fontSize: "24px" }} />
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ fontSize: "10px" }}
                >
                  WishList
                </Typography>
              </Stack>
              <Stack
                alignItems="center"
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  },
                }}
              >
                <CompareArrows sx={{ fontSize: "24px" }} />
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ fontSize: "10px" }}
                >
                  Compare
                </Typography>
              </Stack>
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
        <Search sx={{fontSize: 30}} />
        <ShoppingCartOutlined sx={{fontSize: 30}} />
        </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default MidBar;
