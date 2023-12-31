import { Route, Routes } from "react-router";
import "./App.css";
import "./Champions.css"
import HomePage from "./pages/HomePage";
import ChampionsPage from "./pages/ChampionsPage";
import ChampionDetailsPage from "./pages/ChampionDetailsPage";
import ItemsPage from "./pages/ItemsPage";
import MyBuildsPage from "./pages/MyBuildsPage";
import NewBuildPage from "./pages/NewBuildPage";
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
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/builds" element={<MyBuildsPage />} />
        <Route path="/builds/new" element={<NewBuildPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
