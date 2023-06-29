import React, { useState } from "react";
import { Grid, Stack, Button, IconButton, Box } from "@mui/material";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import SearchBox from "./SearchBox";
import FancyButton from "./FancyButton";

export default function RightSideNav(params) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Grid
      item
      container
      xs={5}
      sx={{
        height: "100%",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <SearchBox />
        </Box>
        <Box
          sx={{
            width: "10%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton>
            <ShoppingBagIcon
              sx={{
                color: "#4fb4bc",
              }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FancyButton
            content={"Đăng Nhập"}
            padding={0.8}
            keyColor={"white"}
            size={13}
          />
        </Box>
      </Stack>
    </Grid>
  );
}
