import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { MaterialUISwitch } from "./Theme";

const pages = ["Careers", "About us", "Blog"];

function ResponsiveAppBar({
  handleSwitch,
  darkMode,
  username,
  setClickLogIn,
  clickLogIn,
}) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ gap: "10px" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Add Zendesk logo here */}
          <div
            className="logo-img"
            style={
              darkMode
                ? { background: "white", padding: "4px", borderRadius: "6px" }
                : null
            }
          >
            <img
              src="https://cdn.phenompeople.com/CareerConnectResources/ZENDUS/images/Zendesk-wordmark-147x28-01-1634738256607.txt"
              alt="Zendesk company logo"
              width={100}
              height={30}
            />
          </div>
          {/* Add Zendesk logo here */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <MenuItem style={{ gap: "10px", padding: "0" }}>
            <MaterialUISwitch
              checked={darkMode}
              onChange={handleSwitch}
              inputProps={{ "aria-label": "controlled" }}
            ></MaterialUISwitch>
            {username ? (
              <p>Welcome, {username}</p>
            ) : (
              <Button
                onClick={() => {
                  setClickLogIn(!clickLogIn);
                }}
                color="inherit"
                variant="outlined"
              >
                LOG IN
              </Button>
            )}
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
