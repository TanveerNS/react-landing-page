import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  CardMedia,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Avatar,
  ListItemText,
  Button,
  Tooltip,
  Grid,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon, ShoppingBasket, DesktopWindows, AccountCircle, Close } from "@mui/icons-material";

import { useHistory, Link } from "react-router-dom";
import "./header.scss";
import "./headerfab.scss";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

let loadStateText = "";
const settings = ["Explore", "Buy 3d Model", "Blog"];
const pages = ["Explore", "Buy 3d Model", "Blog"];
const HeaderFab = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [searchExpand, setSearchExpand] = useState(false);
  const [expandList, setExpandList] = useState(false);
  const [searchList, setSearchList] = useState();
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState({ left: false });

  function searchHandler(e, t) {
    if (t) {
      e.target.value = "";
    }
  }

  if (searchList?.length > 0) {
    loadStateText = "Search Result";
  } else {
    loadStateText = "No result";
  }
  if (searchIsLoading) {
    loadStateText = "loading...";
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";


  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>Login</MenuItem>;

    </Menu>
  );
  return (
    <>
       <Box>
        <AppBar position="fixed">
          <Toolbar className="toolbarwrapper">
            <div className="logowrapper">
              <IconButton
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                className="iconwrapper"
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
              <Link className="logo-imag-ishtihar" to="/">
                <p className="logo-title-ishtihar">NS 3D</p>
              </Link>
            </div>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <div className="searchwrapper">
              <div className={`searchbase ${searchExpand && "search-box-wrapper-expand"}`}>
                <div className={`iconwarpper iconwarpper-wrapper-expand `}>
                  <SearchIcon onClick={() => setSearchExpand(true)} />
                </div>
                <div className={`search-container search-container-wrapper-expand`}>
                  <input
                    type="text"
                    className="searchinput"
                    onChange={()=>console.log('changed')}
                    onBlur={(e) => {
                      setTimeout(() => {
                        setExpandList(false);
                        searchHandler(e, true);
                      }, 200);
                    }}
                  />
                </div>
                <div className={`close-container close-container-wrapper-expand`}>
                  <Close onClick={() => setSearchExpand(false)} />
                </div>
                <ul className={`search-list list-container-wrapper-expand ${expandList && "expanded"}`}>
                  <p>{loadStateText}</p>
                </ul>
              </div>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <ShoppingBasket />
                </Badge>
              </IconButton>
              <IconButton size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
                 <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        {renderMenu}

      <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
          <Box className="drawerwrapper" role="presentation" onClick={toggleDrawer("left", false)} onKeyDown={toggleDrawer("left", false)}>
            <Typography variant="body2" component="div" className="drawerlinkname">
              Media Verticals
            </Typography>
            <List>
              <Link className="list-item-link" to="/outdoor">
                <ListItem button>
                  <ListItemIcon>
                    <DesktopWindows className="drawericon" />
                  </ListItemIcon>
                  <ListItemText className="item-link" primary={"Outdoor"} />
                </ListItem>
              </Link>
            </List>
          </Box>
        </Drawer>
  
      </Box> 
       <iframe id="landing-model" title="A 3D model of a shoe" class="hero__iframe" width="auto" height="auto" src="https://sketchfab.com/models/99bfe75ebd734fa3832a63e02e2cacf7/embed?annotations_visible=0&amp;autospin=-0.1&amp;autostart=1&amp;camera=0&amp;double_click=0&amp;internal=1&amp;max_texture_size=1024&amp;orbit_constraint_pan=1&amp;orbit_constraint_zoom_in=40&amp;orbit_constraint_zoom_out=60&amp;preload=1&amp;scrollwheel=0&amp;sound_enable=0&amp;transparent=1&amp;ui_animations=0&amp;ui_annotations=0&amp;ui_ar=1&amp;ui_ar_help=0&amp;ui_color=white&amp;ui_fadeout=0&amp;ui_fullscreen=1&amp;ui_help=0&amp;ui_infos=0&amp;ui_inspector=0&amp;ui_settings=0&amp;ui_stop=0&amp;ui_theatre=0&amp;ui_theme=dark&amp;ui_vr=0&amp;ui_watermark=0" frameborder="0" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true"></iframe> 
       <Grid container sx={{justifyContent:'center'}}>
        <Grid item sm={10} className="homeFeaturesWrap">
          
          <div className="homeFeatures">
              <div className="items">
                <img width="220" height="120" loading="lazy" className="home-features__image" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/home/b23570d4e6681f42b143b822fccbb1a6-v2.svg" alt="Person looking at 3D Models from other creators" />
                <h3 className="title">Join millions of 3D creators and showcase your work</h3>
                <a className="button">
                  join sketchfab
                </a>
              </div>
          </div>
          <div className="homeFeatures">
              <div className="items">
                <img width="220" height="120" loading="lazy" className="home-features__image" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/home/b23570d4e6681f42b143b822fccbb1a6-v2.svg" alt="Person looking at 3D Models from other creators" />
                <h3 className="title">Join millions of 3D creators and showcase your work</h3>
                <a className="button">
                  join sketchfab
                </a>
              </div>
          </div>
          <div className="homeFeatures">
              <div className="items">
                <img width="220" height="120" loading="lazy" className="home-features__image" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/home/b23570d4e6681f42b143b822fccbb1a6-v2.svg" alt="Person looking at 3D Models from other creators" />
                <h3 className="title">Join millions of 3D creators and showcase your work</h3>
                <a className="button">
                  join sketchfab
                </a>
              </div>
          </div>
        </Grid>
      </Grid> 
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item sm={12} className="modelWrap">
          <div className="modelContainer">
            <p className="title">Share and embed 3D models anywhere online</p>
            <div className="modelFeatures">
              <div className="items">
                <div className="itemImg">
                  <img src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/home/28351a2fcde27eb555c5fee10a7a0bc8-v2.svg" alt="img" />
                </div>
                <p className="subtitle">Market-leading 3D player for the web.</p>
              </div>
              <div className="items">
                <div className="itemImg">
                  <img src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/home/28351a2fcde27eb555c5fee10a7a0bc8-v2.svg" alt="img" />
                </div>
                <p className="subtitle">Market-leading 3D player for the web.</p>
              </div>
              <div className="items">
                <div className="itemImg">
                  <img src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/home/28351a2fcde27eb555c5fee10a7a0bc8-v2.svg" alt="img" />
                </div>
                <p className="subtitle">Market-leading 3D player for the web.</p>
              </div>
              <div className="items">
                <div className="itemImg">
                  <img src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/home/28351a2fcde27eb555c5fee10a7a0bc8-v2.svg" alt="img" />
                </div>
                <p className="subtitle">Market-leading 3D player for the web.</p>
              </div>
              
            </div>
          </div>
        </Grid>
      </Grid>
       
       <Grid container sx={{ justifyContent: "center" }}>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
        alt="green iguana"
      />
      <CardContent>
        
        
      </CardContent>
      <CardActions>
        <img src="" alt=""/>
        <div>
          <span><VisibilityOutlinedIcon/> 407</span>
        </div>
      </CardActions>
    </Card>
       </Grid>
    </>
  );
};

export default HeaderFab;
