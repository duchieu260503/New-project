import { Children } from "react";
import { Box } from "@mui/system";

export default function Page({ children }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "block",
        width: "100%",
        height: "90%",
        padding: "20px",
        pt: 0,
        overflow: "auto",
      }}
    >
      {Children.map(children, (child) => (
        <>{child}</>
      ))}
    </Box>
  );
}
