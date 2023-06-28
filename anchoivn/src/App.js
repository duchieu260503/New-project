import React from "react";
import { Box } from "@mui/system";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <LandingPage/>
    </Box>
  );
}

export default App;
