"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SlidingTitle from "./slidertitle.jsx";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { styled, alpha } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function ButtonAppBar() {
  const [activeNav, setActiveNav] = useState("");
  const [panier, setPanier] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setPanier(JSON.parse(storedCart).length);
    }
  }, []);

  const navItems = [
    { label: "Accueil", href: "/accueil", key: "1" },
    { label: "Produits", href: "/produits", key: "2" },
    { label: "À propos", href: "/about", key: "5" },
    { label: "Contact", href: "/contact", key: "4" },
  ];

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#ede9de",
        height: "100%",
        paddingTop: "20px",
        color: "#b58c4e",
      }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={() => setActiveNav(item.key)}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  fontFamily: "var(--font-playfair)",
                  fontWeight: activeNav === item.key ? 700 : 500,
                  fontSize: "1.1rem",
                  borderBottom:
                    activeNav === item.key ? "2px solid #b58c4e" : "none",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        {/* Top Toolbar */}
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#b58c4e",
          }}
        >
          {/* Menu Icon for Mobile - Left Side */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: "white",
              ml: 1,
            }}
            onClick={() => setDrawerOpen(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            href="https://www.facebook.com/profile.php?id=61583061987333"
            target="_blank"
            sx={{ ml: { xs: 1, md: 5 }, display: { xs: "none", sm: "flex" } }}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            href="https://www.instagram.com/opu_lune?igsh=MXF4MjYwY2dqNWRzYQ=="
            target="_blank"
            sx={{ mr: 2, display: { xs: "none", sm: "flex" } }}
          >
            <InstagramIcon />
          </IconButton>

          <SlidingTitle />

          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              minWidth: 100,
              mr: 5,
            }}
          >
            <Select
              sx={{
                display: { xs: "none", md: "flex" },
                color: "white",
                fontFamily: "var(--font-montserrat)",
                fontSize: "14px",
              }}
              defaultValue="French"
              variant="standard"
              disableUnderline
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#b58c4e",
                    color: "white",
                    fontFamily: "var(--font-geist-mono)",
                  },
                },
              }}
            >
              <MenuItem value="French">Francais 🇫🇷</MenuItem>
              <MenuItem value="English">English 🇬🇧</MenuItem>
              <MenuItem value="arabic"> العربية 🇹🇳</MenuItem>

            </Select>
          </Box>
        </Toolbar>

        {/* Bottom Toolbar */}
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-arround",
            alignItems: "center",
            backgroundColor: "#fdf6ee",
            width: "100%",
            padding: { xs: "10px 20px", md: "0px " },
            borderBottom: "solid 1px #f4eded9b",
          }}
        >
          {/* Logo à gauche - Desktop only */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <img
              src="/favicon.ico"
              alt="Opulune Logo"
              style={{ height: "350px" }}
            />
          </Box>

          {/* Navigation centrée - Desktop only */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.key}
                component={Link}
                href={item.href}
                onClick={() => setActiveNav(item.key)}
                variant="text"
                sx={{
                  color: "black",
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 500,
                  textTransform: "none",
                  fontSize: "1rem",
                  textDecoration: activeNav === item.key ? "underline" : "none",
                  "&:hover": {
                    color: "#474f5c",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    backgroundColor: "transparent",
                  },
                  mx: 1,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Icons - Visible on all screens */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: { xs: "100%", md: "auto" },
              justifyContent: { xs: "space-between", md: "flex-end" },
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "black" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"

                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Search>

            <IconButton
              sx={{ color: "black", mr: { xs: 1, md: 2 } }}
              onClick={() => router.push("/auth/users")}
            >
              <PermIdentityIcon />
            </IconButton>

            <IconButton
              sx={{ color: "black", mr: { xs: 0, md: 2 } }}
              onClick={() => router.push("/panier")}
            >
              <ShoppingBagOutlinedIcon />
              <CartBadge
                badgeContent={panier}
                color="primary"
                sx={{ color: "#b58c4e" }}
                overlap="circular"
              />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Drawer for mobile */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          {DrawerList}
        </Drawer>
      </AppBar>
    </Box>
  );
}
