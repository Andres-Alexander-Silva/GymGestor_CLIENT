import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const useStylesModal = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isCustom = useMediaQuery(theme.breakpoints.down(800));

  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmall ? "90vw" : isMedium ? "35vw" : isCustom ? "50vw" : "45vw",
    bgcolor: "#FFFFFF",
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
  };
};

export const useStylesModal2 = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isCustom = useMediaQuery(theme.breakpoints.down(800));

  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmall ? "90vw" : isMedium ? "35vw" : isCustom ? "50vw" : "65vw",
    bgcolor: "#FFFFFF",
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    height: "65vh",
  };
};

export const useStylesModal3 = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isCustom = useMediaQuery(theme.breakpoints.down(800));

  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmall ? "90vw" : isMedium ? "35vw" : isCustom ? "50vw" : "85vw",
    bgcolor: "#FFFFFF",
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    height: "75vh",
  };
};
