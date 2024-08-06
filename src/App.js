import "./App.css";
import { Routes, Route } from "react-router-dom";
import weatherService from "./services/weatherService";
import { useEffect } from "react";
import MainPage from "./views/MainPage";

function App() {
  const handleWeatherDataByLongLat = async () => {
    const result = await weatherService.getWeatherDataByLongLat();
  };

  useEffect(() => {
    handleWeatherDataByLongLat();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
