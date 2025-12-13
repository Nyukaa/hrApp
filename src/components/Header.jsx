import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <AppBar
      position="static"
      className="header"
      sx={{
        textDecoration: "none",
        backgroundColor: "#282c34",
        color: "white",
      }}
    >
      <Toolbar className="header-container">
        {/* LEFT SIDE LOGO */}
        <Box>
          <Typography variant="h6" component={Link} to="/" className="logo">
            HrApp
          </Typography>
        </Box>
        {/* RIGHT SIDE NAV */}
        <Box className="nav-links" sx={{ display: "flex", gap: 2 }}>
          <Link to="/about">About</Link>
          <Link to="/add">Add Employee</Link>
          <Link to="/table">Table</Link>
          <Link to="/grid">Grid</Link>
        </Box>
        {/* </Box> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
