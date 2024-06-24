import { CommentOutlined, Percent, WhatsApp } from "@mui/icons-material";
import { Container, Stack } from "@mui/material";
import React from "react";
import ListMenu from "../../listMenu/ListMenu";
const Links = [
  {
    id: 1,
    nameLink: "mobile",
    position: "top",
    subLink: [
      {
        id: 1,
        name: "Honer",
        subLink: [],
      },
      {
        id: 2,
        name: "Huawei",
        subLink: [],
      },
      {
        id: 3,
        name: "iPhone",
        subLink: [
          {
            id: 1,
            name: "iPhone 12",
            subLink: [
              {
                id: 1,
                name: "iPhone 12",
                subLink: [],
              },
              {
                id: 2,
                name: "iPhone 12 mini",
                subLink: [],
              },
              {
                id: 3,
                name: "iPhone 12 Pro",
                subLink: [
                  {
                    id: 1,
                    name: "256",
                    subLink: [],
                  },
                  {
                    id: 2,
                    name: "512",
                    subLink: [],
                  },
                ],
              },
              {
                id: 4,
                name: "iPhone 12 Pro max",
                subLink: [],
              },
            ],
          },
          {
            id: 2,
            name: "iPhone 13",
            subLink: [
              {
                id: 1,
                name: "iPhone 13",
                subLink: [],
              },
              {
                id: 2,
                name: "iPhone 13 mini",
                subLink: [],
              },
              {
                id: 3,
                name: "iPhone 13 Pro",
                subLink: [],
              },
              {
                id: 4,
                name: "iPhone 13 Pro max",
                subLink: [
                  {
                    id: 1,
                    name: "512",
                    subLink: [],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "iPhone 14",
            subLink: [
              {
                id: 1,
                name: "iPhone 14",
                subLink: [],
              },
              {
                id: 2,
                name: "iPhone 14 plus",
                subLink: [
                  {
                    id: 1,
                    name: "128",
                    subLink: [],
                  },
                  {
                    id: 2,
                    name: "256",
                    subLink: [],
                  },
                ],
              },
              {
                id: 3,
                name: "iPhone 14 Pro",
                subLink: [
                  {
                    id: 1,
                    name: "256",
                    subLink: [],
                  },
                  {
                    id: 2,
                    name: "512",
                    subLink: [],
                  },
                ],
              },
              {
                id: 4,
                name: "iPhone 14 Pro max",
                subLink: [
                  {
                    id: 1,
                    name: "256",
                    subLink: [],
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            name: "iPhone 15",
            subLink: [
              {
                id: 1,
                name: "iPhone 15",
                subLink: [],
              },
              {
                id: 2,
                name: "iPhone 15 plus",
                subLink: [
                  {
                    id: 1,
                    name: "128",
                    subLink: [],
                  },
                  {
                    id: 2,
                    name: "256",
                    subLink: [],
                  },
                  {
                    id: 3,
                    name: "512",
                    subLink: [],
                  },
                ],
              },
              {
                id: 3,
                name: "iPhone 15 Pro",
                subLink: [
                  {
                    id: 1,
                    name: "128",
                    subLink: [],
                  },
                  {
                    id: 2,
                    name: "256",
                    subLink: [],
                  },
                  {
                    id: 3,
                    name: "iPhone 15 Pro",
                    subLink: [],
                  },
                ],
              },
              {
                id: 4,
                name: "iPhone 15 Pro max",
                subLink: [
                  {
                    id: 1,
                    name: "1TB",
                    subLink: [],
                  },
                  {
                    id: 2,
                    name: "256",
                    subLink: [],
                  },
                  {
                    id: 3,
                    name: "512",
                    subLink: [],
                  },
                ],
              },
            ],
          },
          {
            id: 5,
            name: "iPhone 11",
            subLink: [
              {
                id: 1,
                name: "128",
                subLink: [],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "OnePlus",
        subLink: [],
      },
      {
        id: 5,
        name: "OPPO",
        subLink: [],
      },
      {
        id: 6,
        name: "Realme",
        subLink: [],
      },
      {
        id: 7,
        name: "Samsung",
        subLink: [
          {
            id: 1,
            name: "A14",
            subLink: [],
          },
          {
            id: 2,
            name: "A24",
            subLink: [],
          },
          {
            id: 3,
            name: "A34",
            subLink: [],
          },
          {
            id: 4,
            name: "A54",
            subLink: [],
          },
          {
            id: 5,
            name: "S23",
            subLink: [],
          },
          {
            id: 6,
            name: "S23 Plus",
            subLink: [],
          },
          {
            id: 7,
            name: "S23 Ultra",
            subLink: [],
          },
          {
            id: 8,
            name: "S24",
            subLink: [],
          },
          {
            id: 9,
            name: "S24 Plus",
            subLink: [],
          },
          {
            id: 10,
            name: "samsung galaxy S24 ultra",
            subLink: [],
          },
          {
            id: 11,
            name: "Z Flip",
            subLink: [],
          },
        ],
      },
      {
        id: 8,
        name: "VIVO",
        subLink: [],
      },
      {
        id: 9,
        name: "Xiaomi",
        subLink: [],
      },
    ],
  },
  {
    id: 2,
    nameLink: "iphone",
    position: "top",
    subLink: [
      {
        id: 1,
        name: "iPhone 12",
        subLink: [
          {
            id: 1,
            name: "iPhone 12",
            subLink: [],
          },
          {
            id: 2,
            name: "iPhone 12 mini",
            subLink: [],
          },
          {
            id: 3,
            name: "iPhone 12 Pro",
            subLink: [
              {
                id: 1,
                name: "256",
                subLink: [],
              },
              {
                id: 2,
                name: "512",
                subLink: [],
              },
            ],
          },
          {
            id: 4,
            name: "iPhone 12 Pro max",
            subLink: [],
          },
        ],
      },
      {
        id: 2,
        name: "iPhone 13",
        subLink: [
          {
            id: 1,
            name: "iPhone 13",
            subLink: [],
          },
          {
            id: 2,
            name: "iPhone 13 mini",
            subLink: [],
          },
          {
            id: 3,
            name: "iPhone 13 Pro",
            subLink: [],
          },
          {
            id: 4,
            name: "iPhone 13 Pro max",
            subLink: [
              {
                id: 1,
                name: "512",
                subLink: [],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "iPhone 14",
        subLink: [
          {
            id: 1,
            name: "iPhone 14",
            subLink: [],
          },
          {
            id: 2,
            name: "iPhone 14 plus",
            subLink: [
              {
                id: 1,
                name: "128",
                subLink: [],
              },
              {
                id: 2,
                name: "256",
                subLink: [],
              },
            ],
          },
          {
            id: 3,
            name: "iPhone 14 Pro",
            subLink: [
              {
                id: 1,
                name: "256",
                subLink: [],
              },
              {
                id: 2,
                name: "512",
                subLink: [],
              },
            ],
          },
          {
            id: 4,
            name: "iPhone 14 Pro max",
            subLink: [
              {
                id: 1,
                name: "256",
                subLink: [],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "iPhone 15",
        subLink: [
          {
            id: 1,
            name: "iPhone 15",
            subLink: [],
          },
          {
            id: 2,
            name: "iPhone 15 plus",
            subLink: [
              {
                id: 1,
                name: "128",
                subLink: [],
              },
              {
                id: 2,
                name: "256",
                subLink: [],
              },
              {
                id: 3,
                name: "512",
                subLink: [],
              },
            ],
          },
          {
            id: 3,
            name: "iPhone 15 Pro",
            subLink: [
              {
                id: 1,
                name: "128",
                subLink: [],
              },
              {
                id: 2,
                name: "256",
                subLink: [],
              },
              {
                id: 3,
                name: "iPhone 15 Pro",
                subLink: [],
              },
            ],
          },
          {
            id: 4,
            name: "iPhone 15 Pro max",
            subLink: [
              {
                id: 1,
                name: "1TB",
                subLink: [],
              },
              {
                id: 2,
                name: "256",
                subLink: [],
              },
              {
                id: 3,
                name: "512",
                subLink: [],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "iPhone 11",
        subLink: [
          {
            id: 1,
            name: "128",
            subLink: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    nameLink: "samsung",
    position: "top",
    subLink: [
      {
        id: 1,
        name: "A14",
        subLink: [],
      },
      {
        id: 2,
        name: "A24",
        subLink: [],
      },
      {
        id: 3,
        name: "A34",
        subLink: [],
      },
      {
        id: 4,
        name: "A54",
        subLink: [],
      },
      {
        id: 5,
        name: "S23",
        subLink: [],
      },
      {
        id: 6,
        name: "S23 Plus",
        subLink: [],
      },
      {
        id: 7,
        name: "S23 Ultra",
        subLink: [],
      },
      {
        id: 8,
        name: "S24",
        subLink: [],
      },
      {
        id: 9,
        name: "S24 Plus",
        subLink: [],
      },
      {
        id: 10,
        name: "samsung galaxy S24 ultra",
        subLink: [],
      },
      {
        id: 11,
        name: "Z Flip",
        subLink: [],
      },
    ],
  },
  {
    id: 4,
    nameLink: "ipad",
    position: "top",
    subLink: [],
  },
  {
    id: 5,
    nameLink: "routers",
    position: "border",
    subLink: [
      {
        id: 1,
        name: "5G Roters",
        subLink: [],
      },
    ],
  },
  {
    id: 6,
    nameLink: "laptops",
    position: "top",
    subLink: [
      {
        id: 1,
        name: "Mackbook",
        subLink: [],
      },
    ],
  },
  {
    id: 7,
    nameLink: "smartwatch",
    position: "top",
    subLink: [
      {
        id: 1,
        name: "Xiaomi Watch",
        subLink: [],
      },
      {
        id: 2,
        name: "Apple Watch",
        subLink: [
          {
            id: 1,
            name: "Apple Watch Ultra S1",
            subLink: [],
          },
          {
            id: 2,
            name: "Apple Watch Ultra S2",
            subLink: [],
          },
          {
            id: 3,
            name: "Apple Watch series 8",
            subLink: [],
          },
          {
            id: 4,
            name: "Apple Watch series 9",
            subLink: [],
          },
        ],
      },
      {
        id: 3,
        name: "Huawei Watch",
        subLink: [],
      },
    ],
  },
  {
    id: 8,
    nameLink: "gamesclub",
    position: "top",
    subLink: [
      {
        id: 1,
        name: "ps5 Games",
        subLink: [],
      },
      {
        id: 2,
        name: "XBox Games",
        subLink: [],
      },
    ],
  },
  {
    id: 9,
    nameLink: "televisions",
    position: "border",
    subLink: [
      {
        id: 1,
        name: "LED TV",
        subLink: [],
      },
      {
        id: 2,
        name: "OLED TV",
        subLink: [],
      },
      {
        id: 3,
        name: "QLED TV",
        subLink: [],
      },
    ],
  },
  {
    id: 10,
    nameLink: "accessories",
    position: "border",
    subLink: [
      {
        id: 1,
        name: "CASES",
        subLink: [
          {
            id: 1,
            name: "samsung case",
            subLink: [],
          },
          {
            id: 2,
            name: "SkinArma",
            subLink: [],
          },
        ],
      },
      {
        id: 2,
        name: "cable",
        subLink: [],
      },
      {
        id: 3,
        name: "charger",
        subLink: [],
      },
      {
        id: 3,
        name: "Headphone",
        subLink: [],
      },
      {
        id: 4,
        name: "SCREEN PROTECTOR",
        subLink: [],
      },
    ],
  },
];
const DeskTopMenu = () => {
  return (
    <div className="desktop-menu">
      <Container>
        <ul>
          {Links.map((link) => {
            return (
              <li key={link.id}>
                <a href="#">{link.nameLink}</a>
                <ListMenu Links={link.subLink} />
              </li>
            );
          })}
          <li>
            <a href="#">
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"center"}
                className="icon"
                sx={{
                  padding: "3px",
                  backgroundColor: "#ff0",
                  borderRadius: "50%",
                }}
              >
                <Percent sx={{ fontSize: "10px" }} />
              </Stack>
              offers
            </a>
          </li>
          <li>
            <a href="#">
              <CommentOutlined sx={{ fontSize: "20px" }} />
              blog
            </a>
          </li>
          <li>
            <a className="whats" href="#">
              <WhatsApp /> 0096560653045
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default DeskTopMenu;
