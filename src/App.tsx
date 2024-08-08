
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./views/MainPage";
import ErrorPage from "./views/ErrorPage";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/docs/*" element={<Navigate to="/docs/index.html" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
