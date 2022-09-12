import { } from "@mui/icons-material";
import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import Sidebar from "Components/Sidebar";
import Feed from "Components/Feed";
import Rightbar from "Components/Rightbar";
import Navbar from "Components/Navbar";
import Add from "Components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light")
  const [post, setPost] = useState()
  const getPost = (post) => {
    setPost(post)
  }
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setMode={setMode} mode={mode}/>
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <Sidebar />
          <Feed post={post}/>
          <Rightbar />
        </Stack>
        <Add getPost={getPost}/>
      </Box>
    </ThemeProvider>

  );
}

export default App;
