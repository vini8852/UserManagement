// components/Navbar.tsx
"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";

const Navbar = ({
  isLoggedIn,
  handleLogin,
  handleLogout,
}: {
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left section: Text Logo + Nav Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {/* Text logo that links to homepage */}
          <Link
            href="/"
            passHref
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
            >
              Udemy
            </Typography>
          </Link>

          {/* Menu items */}
          {["Customers", "Technologies", "Courses", "Report"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} passHref>
              <Button sx={{ color: "white", textTransform: "none" }}>
                {item}
              </Button>
            </Link>
          ))}
        </Box>

        {/* Right section: Login/User */}
        <Box>
          {!isLoggedIn ? (
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          ) : (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem
                  onClick={() => {
                    handleLogout();
                    handleClose();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
