import React, { useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

export default function NavItems({ items }) {
  const [activeItem, setActiveItem] = useState("none");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const [isHovered, setIsHovered] = useState("none");
  const handleMouseEnter = (item) => {
    setIsHovered(item);
  };
  const handleMouseLeave = () => {
    setIsHovered("none");
  };

  return (
    <Grid
      item
      container
      xs={5}
      sx={{
        height: "100%",
        display: { xs: "none", sm: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "80%",
          height: "100%",
          color: "#FF6000",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: 1 / 3,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: " 5px 10px",
              }}
              onMouseEnter={() => handleMouseEnter(`${item.title}`)}
              onMouseLeave={handleMouseLeave}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-raleway)",
                  fontSize: "1.2rem",
                  textDecoration:
                    isHovered === `${item.title}` ? "underline" : "none",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Grid>
  );
}
