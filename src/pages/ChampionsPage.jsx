import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const ChampionsPage = () => {
  const [champions, setChampions] = useState([]);
  const [search, setSearch] = useState("");

  const fetchAllChampions = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/champions`);
    if (response.ok) {
      const allChampions = await response.json();
      setChampions(allChampions);
      console.log(allChampions);
    }
  };

  useEffect(() => {
    fetchAllChampions();
  }, []);

  /* SEARCH BAR */
  const filteredChampions = champions.filter((champion) =>
    champion.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Champions List</h1>

      <div className="search-bar">
        <SearchBar name={"champion"} search={search} setSearch={setSearch} />
      </div>

      {/* LIST OF CHAMPIONS */}
      <ul className="champions-list">
        {filteredChampions.map((oneChampion) => {
          return (
            <li key={oneChampion.key}>
              <Link to={`/champions/${oneChampion.id}`}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${oneChampion.id}_0.jpg`}
                />
                <p>{oneChampion.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChampionsPage;
