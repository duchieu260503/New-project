import React, { useState } from "react";
import { Box, AppBar, Drawer, IconButton, Toolbar, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "mui-image";

import NavItems from "./NavItems";
import items from "./NavItemsInfor";
import SideDrawer from "./SideDrawer";

import logo from "../assets/images/logo.png";

const drawerWidth = 180;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: "block",
        position: "relative",
        height: { xs: "5%", sm: "5%", md: "5%", lg: "10%" },
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          height: { xs: "5%", sm: "5%", md: "5%", lg: "10%" },
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            minHeight: {
              xs: "100%",
            },
          }}
        >
          <IconButton
            color="black"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            container
            direction="row"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "20%",
                height: "100%",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={logo}
                height="100%"
                width="70%"
                fit="fill"
                duration={0}
              />
            </Box>
            {/* NavItems component chứa các mục trong navigator*/}
            <NavItems items={items} />
            <Box
              sx={{
                width: "40%",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Chỗ này để chèn cái search với cả sign in
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SideDrawer items={items} />
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
