import React from "react";
import Settingsappsettingsdark from "pages/Settingsappsettingsdark";
import Settingsappsettings from "pages/Settingsappsettings";
import Settingssecuritydark from "pages/Settingssecuritydark";
import Settingssecurity from "pages/Settingssecurity";
import Settingsappearancesdark from "pages/Settingsappearancesdark";
import Settingsappearances from "pages/Settingsappearances";
import Settingsaccountsettin from "pages/Settingsaccountsettin";
import Settingsaccountsettings from "pages/Settingsaccountsettings";
import Settingsdark from "pages/Settingsdark";
import Settings from "pages/Settings";
import SettingsconfigurationsOne from "pages/SettingsconfigurationsOne";
import Settingsconfigurations from "pages/Settingsconfigurations";
import Edituserdark from "pages/Edituserdark";
import Edituser from "pages/Edituser";
import Editservicedark from "pages/Editservicedark";
import Editservice from "pages/Editservice";
import Servicesdark from "pages/Servicesdark";
import Usersalldark from "pages/Usersalldark";
import Services from "pages/Services";
import Users from "pages/Users";
import ForgotPassworddark from "pages/ForgotPassworddark";
import Logindark from "pages/Logindark";
import ForgotPassword from "pages/ForgotPassword";
import Login from "pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/logindark" element={<Logindark />} />
        <Route path="/forgotpassworddark" element={<ForgotPassworddark />} />
        <Route path="/users" element={<Users />} />
        <Route path="/services" element={<Services />} />
        <Route path="/usersalldark" element={<Usersalldark />} />
        <Route path="/servicesdark" element={<Servicesdark />} />
        <Route path="/editservice" element={<Editservice />} />
        <Route path="/editservicedark" element={<Editservicedark />} />
        <Route path="/edituser" element={<Edituser />} />
        <Route path="/edituserdark" element={<Edituserdark />} />
        <Route
          path="/settingsconfigurations"
          element={<Settingsconfigurations />}
        />
        <Route
          path="/settingsconfigurationsone"
          element={<SettingsconfigurationsOne />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settingsdark" element={<Settingsdark />} />
        <Route
          path="/settingsaccountsettings"
          element={<Settingsaccountsettings />}
        />
        <Route
          path="/settingsaccountsettin"
          element={<Settingsaccountsettin />}
        />
        <Route path="/settingsappearances" element={<Settingsappearances />} />
        <Route
          path="/settingsappearancesdark"
          element={<Settingsappearancesdark />}
        />
        <Route path="/settingssecurity" element={<Settingssecurity />} />
        <Route
          path="/settingssecuritydark"
          element={<Settingssecuritydark />}
        />
        <Route path="/settingsappsettings" element={<Settingsappsettings />} />
        <Route
          path="/settingsappsettingsdark"
          element={<Settingsappsettingsdark />}
        />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
