import React from "react";

// Pages
import Home from "./pages";
import SelaaOhje from "./pages/selaa_ohje";
import MyProjects from "./pages/my_projects";
import MyStudies from "./pages/my_studies";
import Worklog from "./pages/worklog";
import ThemesView from "./pages/themes_view";
import ThemeSession from "./pages/theme_session";
import Profile from "./pages/profile";
import Logout from "./pages/logout";
import Login from "./pages/login";
// Styles
import './App.scss';

// Components
import Navbars from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // const-määrittelyt

  return (
    <>
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/selaa_ohje" element={<SelaaOhje />} />
          <Route path="/my_projects" element={<MyProjects />} />
          <Route path="/my_studies" element={<MyStudies />} />
          <Route path="/worklog" element={<Worklog />} />
          <Route path="/themes/view" element={<ThemesView />} />
          <Route path="/theme_session/theme_session" element={<ThemeSession />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </Router>
    </>
  );
};

export default App; 
