import { styled } from "@mui/system";

export const Main = styled("main")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "750px",
});

export const Header = styled("header")({
  display: "flex",
});

export const Footer = styled("footer")({
  display: "flex",
});

export const Logo = styled("a")({
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    opacity: 0.6,
  },
});
