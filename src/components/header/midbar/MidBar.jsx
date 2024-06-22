import { AccountCircleOutlined, CompareArrows, FavoriteBorderOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import SearchInput from "../../search/SearchInput";

import imgLogo from "../../../assets/images/Logo/Logo-Blue-Plus.png";

const MidBar = () => {
  const theme = useTheme();

  return (
    <Container sx={{ paddingTop: 1 }}>
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <Box sx={{maxWidth: {xs: "200px", lg: "300px"}}}>
          <img style={{ width: "100%" }} src={imgLogo} alt="Logo" />
        </Box>
        <SearchInput />
        <Stack direction="row" alignItems="center" gap={2} color= "#696973" >
        <Stack alignItems="center" sx={{"&:hover": {color: theme.palette.primary.main}}}>
        <AccountCircleOutlined sx={{fontSize: "24px"}} />
            <Typography variant="body2" component="p" sx={{fontSize: "10px"}}>
            Account
            </Typography>
          </Stack>
          <Stack alignItems="center" sx={{"&:hover": {color: theme.palette.primary.main, cursor: "pointer"}}}>
          <FavoriteBorderOutlined sx={{fontSize: "24px"}} />
          <Typography variant="body2" component="p" sx={{fontSize: "10px"}}>
          WishList
          </Typography>
          </Stack>
          <Stack alignItems="center" sx={{"&:hover": {color: theme.palette.primary.main, cursor: "pointer"}}}>
          <CompareArrows sx={{fontSize: "24px"}} />
            <Typography variant="body2" component="p" sx={{fontSize: "10px"}}>
            Compare
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent={"flex-end"} width={200} gap={1}>
        <Typography sx={{fontSize: "10px", minWidth: "105px"}}>1 item(s) - 320.000 د.ك</Typography>
        <Box>
        <ShoppingCartOutlined />
        </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MidBar;
