import { Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MdWavingHand } from "react-icons/md";

const Welcome = () => {
  const name = localStorage.getItem("nameComplete");
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (name) {
        if (index < name.length) {
          setDisplayText((prevText) => prevText + name[index].toUpperCase());
          setIndex((prevIndex) => prevIndex + 1);
        }
      }
    }, 85);

    return () => clearTimeout(timer);
  }, [index, name]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 560 },
        p: "2rem",
        boxShadow: "2px 2px 10px 5px rgba(0, 0, 0, 0.1)",
        alignContent: "center",
        alignItems: "center",
        mt: { xs: '10%', sm: '28%' }
      }}
    >
      <MdWavingHand size={50} style={{ margin: "auto", color: "#f97316" }} />
      <Typography variant="h4" align="center" gutterBottom color={"#f97316"} fontSize={40}>
        Bienvenido!
      </Typography>
      <Typography align="center" variant="h5" gutterBottom fontWeight={500} >
        {displayText}
        <b style={{ color: "#f97316", fontSize: 30, fontWeight: "normal" }}>
          {showCursor && "|"}
        </b>
      </Typography>
    </Card>
  );
};

export default Welcome;