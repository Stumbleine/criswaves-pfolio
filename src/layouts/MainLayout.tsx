import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AppBar,
  Box,
  Container,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router";
import Links from "../components/Links";
import { useThemeContext } from "../context/ThemeContext";
import Logo from "../components/Logo";

const MainLayout = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              mr: 2,
              zIndex: 1,
              display: "flex",
              position: "relative",
              color: (theme) => theme.palette.primary.main,
            }}
            component={Icon}
          >
            <Logo width={24} height={24} />
          </Box>
          <Box
            component={IconButton}
            color="textIcon"
            size="small"
            onClick={toggleTheme}
            sx={{
              zIndex: 99,
              position: "relative",
              top: "auto",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Page>
        <Outlet />
      </Page>
    </>
  );
};

const Page: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container
      maxWidth="md"
      disableGutters
      sx={{
        position: "relative",
      }}
    >
      {children}
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          mt: "auto",
          py: 2,
        }}
      >
        <Links />
        <Typography variant="body2" color="textSecondary">
          © 2025 criswaves. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default MainLayout;
