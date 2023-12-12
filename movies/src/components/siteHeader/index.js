import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import UserContext from "../../contexts/userContext";
import { getAuth, signOut } from 'firebase/auth';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);


const SiteHeader = () => {
  const auth = getAuth();
  const { currentUser } = useContext(UserContext);
  console.log("Hello", JSON.stringify(currentUser));
  
  const handleSignIn = () => {
    navigate("/authPage/")
  };
  
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Must Watch", path: "/movies/mustWatch"},
    { label: "Upcoming Movies", path: "/movies/upcoming" },
    { label: "Top Rated", path: "/movies/topRated" },
    { label: "In Theatres", path: "/movies/playingNow"},
    { label: "People", path: "/actors"}
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  if(!currentUser) return null;

  return (
    <>
    
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          { currentUser ? (
            <>
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                  {currentUser.email}
              </Typography>
            </>
          ) : (
            null
          )}
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                {menuOptions.map((opt) => (
                  <Button
                    key={opt.label}
                    color="inherit"
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </Button>
                ))} 
              </>
            )}
            { currentUser ? (
              <Button color="inherit" onClick={handleSignOut}>
                Sign Out
              </Button>
            ) : null 
          }
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;