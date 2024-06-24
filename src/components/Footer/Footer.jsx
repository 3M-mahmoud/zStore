import React from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  Button,
  SpeedDial,
  SpeedDialIcon,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <Container maxWidth="lg" className="bo">
        {/* main */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          {/* About Us */}
          <Stack gap={0.5}>
            <Typography variant="h5" color="">
              {t("FooterAboutUs")}
            </Typography>
            <Divider color="red" />
            <List>
              <ListItem disablePadding>
                <ListItemText primary={t("FooterAboutUs")} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary={t("FooterDelivery")} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary={t("FooterPrivacyPolicy")} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary={t("FooterTerms&Conditions")} />
              </ListItem>
            </List>
          </Stack>
          {/* Customer Service */}
          <Stack gap={0.5}>
            <Typography variant="h5" color="">
              {t("FooterCustomerService")}
            </Typography>
            <Divider color="red" />
            <List>
              <ListItem disablePadding>
                <ListItemText primary={t("FooterContact")} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary={t("FooterReturns")} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary={t("FooterSiteMap")} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary={t("FooterBrands")} />
              </ListItem>
            </List>
          </Stack>
          {/* My Account */}
          <Stack gap={0.5}>
            <Typography variant="h5" color="">
              {t("FooterMyAccount")}
            </Typography>
            <Divider color="red" />
            <List>
              <ListItem disablePadding>
                <ListItemText primary={t("FooterMyAccount")} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary={t("FooterOrderHistory")} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary={t("FooterAffiliates")} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary={t("FooterGiftCertificates")} />
              </ListItem>
            </List>
          </Stack>
          {/* Newsletter*/}
          <Stack gap={0.5}>
            <Typography variant="h5" color="">
              {t("FooterNewsletter")}
            </Typography>
            <Divider color="red" />
            <Typography
              variant="body2"
              color=""
              sx={{
                opacity: ".6",
              }}
            >
              {t("FooterNewsletterP")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "#555 solid 1px",
                p: 1,
                borderRadius: "4px",
                position: "relative",
              }}
            >
              <input
                placeholder="Your Email"
                type="email"
                style={{ all: "unset" }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  position: "absolute",
                  right: "0px",
                }}
              >
                Send
              </Button>
            </Box>
            {/* xxxxxxxxxxxxxxxxxxx */}
            <Stack direction={"row"} alignItems={"center"} gap={0.5}>
              <IconButton aria-label="" onClick={() => {}}>
                <FacebookIcon
                  sx={{
                    width: "40px",
                    height: "40px",
                    color: "#23527c",
                  }}
                />
              </IconButton>

              <IconButton aria-label="" onClick={() => {}}>
                <WhatsAppIcon
                  sx={{
                    width: "40px",
                    height: "40px",
                    color: "rgba(11, 184, 104, 1);",
                  }}
                />
              </IconButton>

              <IconButton aria-label="" onClick={() => {}}>
                <InstagramIcon
                  sx={{
                    width: "40px",
                    height: "40px",
                    color: "rgba(196, 41, 104, 1)",
                  }}
                />
              </IconButton>

              <IconButton aria-label="" onClick={() => {}}>
                <TwitterIcon
                  sx={{
                    width: "40px",
                    height: "40px",
                    color: "rgb(44 170 225)",
                  }}
                />
              </IconButton>
              <IconButton aria-label="" onClick={() => {}}>
                <PinterestIcon
                  sx={{
                    width: "40px",
                    height: "40px",
                    color: "red",
                  }}
                />
              </IconButton>
            </Stack>
            {/* xxxxxxxxxxxxxxxxxxx */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack
                bgcolor={"#fff"}
                alignItems={"center"}
                borderRadius={"10px"}
                p={0.5}
              >
                <img
                  src="https://zstoreq8.com/image/cache/catalog/payments/apple-pay-74x25fill.png"
                  alt=""
                />
              </Stack>
              <Stack
                bgcolor={"#fff"}
                alignItems={"center"}
                borderRadius={"10px"}
                p={0.5}
              >
                <img
                  src="https://zstoreq8.com/image/cache/catalog/payments/cc-74x25fill.png"
                  alt=""
                />
              </Stack>
              <Stack
                bgcolor={"#fff"}
                alignItems={"center"}
                borderRadius={"10px"}
                p={0.5}
              >
                <img
                  src="https://zstoreq8.com/image/cache/catalog/payments/paypal-74x25fill.png"
                  alt=""
                />
              </Stack>
              <Stack
                bgcolor={"#fff"}
                alignItems={"center"}
                borderRadius={"10px"}
                p={0.5}
              >
                <img
                  src="https://zstoreq8.com/image/cache/catalog/payments/cod-74x25fill.png"
                  alt=""
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Footer;
