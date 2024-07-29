import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./public/Home/Index";
import Planes from "./public/Planes/Index";
import QuienesSomos from "./public/QuienesSomos/Index";

function App() {
  return (
    <div>
      <ToastContainer hideProgressBar theme="colored" />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={<Home/>}
        />
        <Route
          path="/planes"
          element={<Planes/>}
        />
         <Route
          path="/quienes-somos"
          element={<QuienesSomos/>}
        />
      </Routes>
    </div>
  );
}

export default App;
