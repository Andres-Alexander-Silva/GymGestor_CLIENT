import { CircularProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
      <CircularProgress color="warning" size={20} />
    </Box>
  );
};

export default Loader;