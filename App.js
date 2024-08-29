import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Select,
  MenuItem,
  InputAdornment,
  Card,
  CardContent,
  IconButton
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import logo from "./logo1.png"; // Replace with your actual logo path
import BankIcon from "@mui/icons-material/AccountBalance";
import HomeIcon from "@mui/icons-material/HomeWork";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddchartIcon from "@mui/icons-material/Addchart";
import EventIcon from "@mui/icons-material/Event";
import GlobeIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";
import PaletteIcon from "@mui/icons-material/Palette";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import google  from "./google.png"; 
import microsoft from "./microsoft.png"; 
import happy from "./happy.png"; 
import mindtree from "./mindtree.png"; 
import logo1 from "./logo1.png";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Call your API to login user
    console.log("Login button clicked");
  };

  return (
    <Box sx={{ padding: "40px 20px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", flexWrap: "wrap", marginTop: "30px" }}>
        <Box sx={{ width: "300px", padding: "20px", borderRadius: "15px", backgroundColor: "#e8f5e9" }}>
          <Typography variant="h6" gutterBottom>
            Email
          </Typography>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Box>
        <Box sx={{ width: "300px", padding: "20px", borderRadius: "15px", backgroundColor: "#e8f5e9" }}>
          <Typography variant="h6" gutterBottom>
            Password
          </Typography>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Box>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
}
  function App() {
    const [jobType, setJobType] = useState("");
    const [location, setLocation] = useState("");
    const [experience, setExperience] = useState("");
  
    const handleJobTypeChange = (event) => setJobType(event.target.value);
    const handleLocationChange = (event) => setLocation(event.target.value);
    const handleExperienceChange = (event) => setExperience(event.target.value);
    const handleSearch = () => {
      console.log(`Searching for ${jobType} jobs in ${location} with ${experience} experience.`);
    };



  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Side: Logo and Navigation */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Company Logo" style={{ height: "40px", marginRight: "20px" }} />
            <Box sx={{ "& > *": { margin: "0 10px" } }}>
              <Button color="inherit">Jobs</Button>
              <Button color="inherit">Boost</Button>
              <Button color="inherit">Prep</Button>
              <Button color="inherit">Learn</Button>
              <Button color="inherit">Career Advice</Button>
              <Button color="inherit">Certifications</Button>
            </Box>
          </Box>

          {/* Right Side: Auth Buttons */}
          <Box sx={{ "& > *": { margin: "0 10px" } }}>
            <Button variant="outlined" color="primary">Login</Button>
            <Button variant="contained" color="secondary">Register</Button>
            <Button color="inherit">Employers Login</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Search Bar Section */}
      <Box sx={{ backgroundColor: "#5C1D89", padding: "40px 20px", textAlign: "center", color: "#fff" }}>
        <Typography variant="h4" gutterBottom>
          Over 7,00,000+ jobs to explore
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "30px",
            width: "80%",
            maxWidth: "800px",
            margin: "20px auto",
          }}
        >
          {/* Job Type Select */}
          <Select
            value={jobType}
            onChange={handleJobTypeChange}
            displayEmpty
            sx={{ width: "35%", backgroundColor: "#fff", borderRadius: "20px" }}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          >
            <MenuItem value="" disabled>
              Search by job type
            </MenuItem>
            <MenuItem value="Front End">Front End</MenuItem>
            <MenuItem value="Back End">Back End</MenuItem>
            <MenuItem value="Full Stack">Full Stack</MenuItem>
            <MenuItem value="Part Time">Part Time</MenuItem>
            <MenuItem value="Full Time">Full Time</MenuItem>
          </Select>

          {/* Location Select */}
          <Select
            value={location}
            onChange={handleLocationChange}
            displayEmpty
            sx={{ width: "25%", backgroundColor: "#fff", borderRadius: "20px" }}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
          >
            <MenuItem value="" disabled>
              Select Location
            </MenuItem>
            <MenuItem value="Bangalore">Bangalore</MenuItem>
            <MenuItem value="Hyderabad">Hyderabad</MenuItem>
            <MenuItem value="Pune">Pune</MenuItem>
            <MenuItem value="Mumbai">Mumbai</MenuItem>
          </Select>

          {/* Experience Select */}
          <Select
            value={experience}
            onChange={handleExperienceChange}
            displayEmpty
            sx={{ width: "20%", backgroundColor: "#fff", borderRadius: "20px" }}
          >
            <MenuItem value="" disabled>
              Experience
            </MenuItem>
            <MenuItem value="Fresher">Fresher</MenuItem>
            <MenuItem value="1-3 years">1-3 years</MenuItem>
            <MenuItem value="3-5 years">3-5 years</MenuItem>
            <MenuItem value="5+ years">5+ years</MenuItem>
          </Select>

          {/* Search Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{ height: "55px", borderRadius: "30px", backgroundColor: "#6E00C3", color: "#fff" }}
          >
            Search
          </Button>
        </Box>
      </Box>

      {/* Job Feature Cards Section */}
      <Box sx={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#fce4ec" }}>
        <Typography variant="h4" gutterBottom>
          Find the perfect job for YOU
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {/* Boost Card */}
          <Card sx={{ maxWidth: 250, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#fff4f4" }}>
            <IconButton sx={{ backgroundColor: "#ffebee", mb: 2 }}>
              <RocketLaunchIcon fontSize="large" color="error" />
            </IconButton>
            <Typography variant="h6">Boost</Typography>
            <Typography variant="body2" color="textSecondary">Stand out to employers</Typography>
          </Card>

          {/* Prep Card */}
          <Card sx={{ maxWidth: 250, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e3f2fd" }}>
            <IconButton sx={{ backgroundColor: "#e1f5fe", mb: 2 }}>
              <MenuBookIcon fontSize="large" color="primary" />
            </IconButton>
            <Typography variant="h6">Prep</Typography>
            <Typography variant="body2" color="textSecondary">Up your interview success rate</Typography>
          </Card>

          {/* Learn Card */}
          <Card sx={{ maxWidth: 250, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#e8f5e9", mb: 2 }}>
              <SchoolIcon fontSize="large" color="success" />
            </IconButton>
            <Typography variant="h6">Learn</Typography>
            <Typography variant="body2" color="textSecondary">Upskill to get ahead</Typography>
          </Card>

          {/* Network Card */}
          <Card sx={{ maxWidth: 250, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#fce4ec" }}>
            <IconButton sx={{ backgroundColor: "#fce4ec", mb: 2 }}>
              <GroupIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography variant="h6">Network</Typography>
            <Typography variant="body2" color="textSecondary">Grow with peers & mentors</Typography>
          </Card>
        </Box>
      </Box>

      {/* Popular Categories Section */}
      <Box sx={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#e3f2fd" }}>
        <Typography variant="h4" gutterBottom>
          Popular Categories
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", flexWrap: "wrap", marginTop: "30px" }}>
          {/* Category Cards */}
          <Card sx={{ maxWidth: 150, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#f5f5f5", mb: 2 }}>
              <BankIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h6">Banking</Typography>
          </Card>
          <Card sx={{ maxWidth: 150, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#f5f5f5", mb: 2 }}>
              <HomeIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h6">Work From Home</Typography>
          </Card>
          <Card sx={{ maxWidth: 150, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#f5f5f5", mb: 2 }}>
              <PersonIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h6">HR</Typography>
          </Card>
          <Card sx={{ maxWidth: 150, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#f5f5f5", mb: 2 }}>
              <ShoppingBagIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6">Sales</Typography>
          </Card>
          <Card sx={{ maxWidth: 150, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#f5f5f5", mb: 2 }}>
              <AddchartIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h6">Accounting</Typography>
          </Card>
          <Card sx={{ maxWidth: 150, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#f5f5f5", mb: 2 }}>
              <LocalOfferIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h6">Customer Support</Typography>
          </Card>
          <Card sx={{ maxWidth: 150, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#f5f5f5", mb: 2 }}>
              <EventIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h6">Event Management</Typography>
          </Card>
          <Card sx={{ maxWidth: 150, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#f5f5f5", mb: 2 }}>
              <GlobeIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h6">IT</Typography>
          </Card>
          <Card sx={{ maxWidth: 150, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#f5f5f5", mb: 2 }}>
              <CodeIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h6">SQL</Typography>
          </Card>
          <Card sx={{ maxWidth: 150, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#f5f5f5", mb: 2 }}>
              <CodeIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h6">Oracle</Typography>
          </Card>
          <Card sx={{ maxWidth: 150, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#f5f5f5", mb: 2 }}>
              <PaletteIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h6">Graphic Design</Typography>
          </Card>
          <Card sx={{ maxWidth: 150, padding: "20px", borderRadius: "15px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <IconButton sx={{ backgroundColor: "#f5f5f5", mb: 2 }}>
              <LocalOfferIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h6">Digital Marketing</Typography>
          </Card>
        </Box>
      </Box>

      {/* Featured Companies Section - You can customize this part */}
      <Box sx={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#e8f5e9" }}>
  <Typography variant="h4" gutterBottom>
    Featured Companies
  </Typography>
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", flexWrap: "wrap", marginTop: "30px" }}>
    {/* Company Logos */}
    <img src={google} alt="google" style={{ height: "50px" }} />
    <img src={microsoft} alt="microsoft" style={{ height: "50px" }} />
    <img src={happy} alt="happy" style={{ height: "50px" }} />
    <img src={mindtree} alt="mindtree" style={{ height: "50px" }} />
    <img src={logo1} alt="logo1" style={{ height: "50px" }} />
  </Box>
</Box>
    </>
  );
}
export default App;