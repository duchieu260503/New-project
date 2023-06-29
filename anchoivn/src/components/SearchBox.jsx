import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  border: "3px solid #FF6000",
  position: "relative",
  borderRadius: "40px",
  color: "#FF6000",
  backgroundColor: "white",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#FF6000",
    color: "white",
  },
//   width: "10px",
  height: "50px",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "44px",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontFamily: "var(--font-raleway)",
  color: "#ff6000",
  height: "44px",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "white",
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 2, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "60px",
      "&:focus": {
        width: "100px",
      },
    },
  },
}));

const SearchBox = ({ placeholder, onChangeHandler }) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon
          sx={{
            color: "var(--border-color)",
          }}
        />
      </SearchIconWrapper>
      <StyledInputBase placeholder={"Search"} onChange={onChangeHandler} />
    </Search>
  );
};

export default SearchBox;
