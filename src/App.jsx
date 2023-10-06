import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import ChampionsPage from "./pages/ChampionsPage";
import ChampionDetailsPage from "./pages/ChampionDetailsPage";
import MyBuildsPage from "./pages/MyBuildsPage";
import AddNewBuildPage from "./pages/AddNewBuildPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/champions" element={<ChampionsPage />} />
        <Route
          path="/champions/:championId"
          element={<ChampionDetailsPage />}
        />
        <Route path="/myBuilds" element={<MyBuildsPage />} />
        <Route path="/myBuilds/addNewBuild" element={<AddNewBuildPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
