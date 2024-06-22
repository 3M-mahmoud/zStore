import { AccountCircleOutlined, CompareArrows, FavoriteBorderOutlined } from "@mui/icons-material";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import SearchInput from "../../search/SearchInput";

import imgLogo from "../../../assets/images/Logo/Logo-Blue-Plus.png";

const MidBar = () => {
  const theme = useTheme();

  return (
    <Container sx={{ paddingTop: 1 }}>
      <Stack direction={"row"} alignItems={"center"}>
        <Box sx={{maxWidth: {xs: "200px", md: "300px"}}}>
          <img style={{ width: "100%" }} src={imgLogo} alt="Logo" />
        </Box>
        <SearchInput />
        <Stack direction="row" alignItems="center" gap={2} color= "#696973" >
        <Stack alignItems="center" sx={{"&:hover": {color: theme.palette.primary.main}}}>
        <AccountCircleOutlined sx={{fontSize: "30px"}} />
            <Typography variant="body2" component="p">
            Account
            </Typography>
          </Stack>
          <Stack alignItems="center" sx={{"&:hover": {color: theme.palette.primary.main, cursor: "pointer"}}}>
          <FavoriteBorderOutlined sx={{fontSize: "30px"}} />
          <Typography variant="body2" component="p">
          WishList
          </Typography>
          </Stack>
          <Stack alignItems="center" sx={{"&:hover": {color: theme.palette.primary.main, cursor: "pointer"}}}>
          <CompareArrows sx={{fontSize: "30px"}} />
            <Typography variant="body2" component="p">
            Compare
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MidBar;
