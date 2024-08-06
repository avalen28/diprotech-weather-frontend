import "./App.css";
import { Routes, Route } from "react-router-dom";
import weatherService from "./services/weatherService";
import { useEffect } from "react";
import MainPage from "./views/MainPage";

function App() {
  // const patata = async () => {
  //   const test = await weatherService.getWeatherDataByLongLat(
  //     "2.1769",
  //     "41.3825"
  //   );
  //   console.log(test);
  // };

  // useEffect(() => {
  //   patata();
  // }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
