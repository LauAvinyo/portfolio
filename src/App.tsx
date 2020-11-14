import React from "react";
import  AppRouter from './components/AppRouter';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './components/theme'
import ResponsiveDrawer from './components/ResponsiveDrawer'


export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <ResponsiveDrawer>
        <AppRouter />
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}
