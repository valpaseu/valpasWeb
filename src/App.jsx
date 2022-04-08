import React, { useEffect, useState } from "react";
import "./App.css";

//Custom
import Navigation from "./Navigation";
import { AppContext } from "./services/contextLib";
import { Auth, DataStore, Hub } from "aws-amplify";
import { onError } from "./services/errorLib";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/NavBar";
import { Box, CssBaseline } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { UserCredentials } from "./models";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const [groups, setGroups] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = createTheme({
    palette: {
      navbar: {
        main: "#00adef",
      },
    },
  });

  Hub.listen("auth", async (data) => {
    switch (data.payload.event) {
      case "signOut":
        await DataStore.clear();
        setGroups(false);
        setSelectedOption(null);
        break;
      case "signIn":
        await DataStore.start();
        break;
    }
  });

  useEffect(() => {
    let isActive = false;

    const onLoad = async () => {
      try {
        await Auth.currentSession();
        userHasAuthenticated(true);
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
        const groups =
          user.signInUserSession.accessToken.payload["cognito:groups"];

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
          groups,
        }}
      >
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Navbar
              open={openDrawer}
              setOpenDrawer={setOpenDrawer}
              isAuthenticated={isAuthenticated}
            />
            {isAuthenticated && (
              <Sidebar open={openDrawer} setOpen={setOpenDrawer} />
            )}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Header />
              <Navigation />
            </Box>
          </Box>
        </ThemeProvider>
      </AppContext.Provider>
    )
  );
}

export default App;
