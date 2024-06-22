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
function Footer() {
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
              About Us
            </Typography>
            <Divider color="red" />
            <List>
              <ListItem disablePadding>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Delivery" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Privacy Policy" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Terms & Conditions" />
              </ListItem>
            </List>
          </Stack>
          {/* Customer Service */}
          <Stack gap={0.5}>
            <Typography variant="h5" color="">
              Customer Service
            </Typography>
            <Divider color="red" />
            <List>
              <ListItem disablePadding>
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Returns" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Site Map" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Brands" />
              </ListItem>
            </List>
          </Stack>
          {/* My Account */}
          <Stack gap={0.5}>
            <Typography variant="h5" color="">
              My Account
            </Typography>
            <Divider color="red" />
            <List>
              <ListItem disablePadding>
                <ListItemText primary="My Account" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Order History" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Affiliates" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Gift Certificates" />
              </ListItem>
            </List>
          </Stack>
          {/* Newsletter*/}
          <Stack gap={0.5}>
            <Typography variant="h5" color="">
              Newsletter
            </Typography>
            <Divider color="red" />
            <Typography
              variant="body2"
              color=""
              sx={{
                opacity: ".6",
              }}
            >
              Stay up to date with news and promotions with out newsletter
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
                p={.5}
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
