import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <ToastContainer hideProgressBar theme="colored" />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={<div className="text-red-600 text-2xl font-bold">Hola</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
