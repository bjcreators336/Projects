import Add from "./Components/Add";
import { useState } from "react";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

export default function MUI() {
  const [mode, setMode] = useState("light")
  const DarkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} >
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box >
    </ThemeProvider >
  );
}
