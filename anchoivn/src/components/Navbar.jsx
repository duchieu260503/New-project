import React, { useState } from "react";
import { Box, AppBar, Drawer, IconButton, Toolbar, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "mui-image";

import NavItems from "./NavItems";
import items from "./NavItemsInfor";
import SideDrawer from "./SideDrawer";
import RightSideNav from "./RightSideNav";

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
        height: { xs: "10%" },
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          height: { xs: "10%" },
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
              px: "30px"
            }}
          >
            <Grid
            item
            container
            xs={2}
              sx={{
                height: "100%",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Image
                src={logo}
                height="100%"
                width="100%"
                fit="fill"
                duration={0}
              />
            </Grid>
            {/* NavItems component chứa các mục trong navigator*/}
            <NavItems items={items} />
            <RightSideNav />
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
