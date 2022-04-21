import React, { useEffect, useState } from "react";
import "./App.css";

//Custom
import Navigation from "./Navigation";
import { AppContext } from "./services/contextLib";
import { Auth } from "aws-amplify";
import { onError } from "./services/errorLib";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/NavBar";
import { Box, CssBaseline } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [appLoading, setAppLoading] = useState(true);

  const [groups, setGroups] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = createTheme({
    palette: {
      navbar: {
        main: "#00adef",
      },
    },
  });

  useEffect(() => {
    let isActive = false;

    const onLoad = async () => {
      try {
        await Auth.currentSession();
        userHasAuthenticated(true);
        setAppLoading(false);
      } catch (e) {
        if (e !== "No current user") {
          onError(e);
        }
      }
      setIsAuthenticating(false);
    };

    !isActive && onLoad();

    return () => (isActive = true);
  }, []);

  useEffect(() => {
    let isActive = false;

    const loadGroup = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const groups = user.signInUserSession.accessToken.payload["cognito:groups"];

        groups !== undefined && setGroups(groups);
      } catch (error) {
        console.warn(error);
      }
    };

    !isActive && isAuthenticated && loadGroup();

    return () => (isActive = true);
  }, [isAuthenticated]);

  const Header = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  return (
    !isAuthenticating && (
      <AppContext.Provider
        value={{
          isAuthenticated,
          userHasAuthenticated,
          selectedOption,
          setSelectedOption,
          setGroups,
          groups,
          appLoading,
          setAppLoading,
        }}
      >
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Navbar open={openDrawer} setOpenDrawer={setOpenDrawer} isAuthenticated={isAuthenticated} />
            {isAuthenticated && <Sidebar open={openDrawer} setOpen={setOpenDrawer} />}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Header />
              <Navigation isAuthenticated={isAuthenticated} groups={groups} />
            </Box>
          </Box>
        </ThemeProvider>
      </AppContext.Provider>
    )
  );
}

export default App;
