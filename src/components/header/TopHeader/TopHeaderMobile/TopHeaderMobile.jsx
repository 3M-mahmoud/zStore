import { Button, Stack } from "@mui/material";
import React from "react";

function TopHeaderMobile() {
  return (
    <>
      <Stack
        direction={"row"}
        gap={0.5}
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
        }}
      >
        <Button
          variant="text"
       
        >
          Rigstar
        </Button>
        <Button
          variant="text"
      
        >
          log in
        </Button>
      </Stack>
    </>
  );
}

export default TopHeaderMobile;
