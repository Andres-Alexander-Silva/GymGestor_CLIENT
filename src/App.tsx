import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./public/Home/Index";
import QuienesSomos from "./public/QuienesSomos/Index";
import Planes from "./public/Membresias/page/Membresias";
import { MembresiasProvider } from "./public/Membresias/context/MembresiasContext";
import { Private, Public } from "./routes/privatizationRoutes";
import Login from "./public/Login/page/Login";
import { LoginProvider } from "./public/Login/context/LoginContext";
import { HomePrivate } from "./private/page";

function App() {
  return (
    <div>
      <ToastContainer hideProgressBar theme="colored" />
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/membresias"
            element={
              <MembresiasProvider>
                <Planes />
              </MembresiasProvider>
            }
          />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route
            path="/login"
            element={
              <Public>
                <Login />
              </Public>
            }
          />
          <Route
            path="/inicio/*"
            element={
              <Private>
                <HomePrivate />
              </Private>
            }
          />
        </Routes>
      </LoginProvider>
    </div>
  );
}

export default App;
