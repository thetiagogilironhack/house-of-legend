import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChampionsPage = () => {
  const [champions, setChampions] = useState([]);

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

  return (
    <>
      <h1>Champions List</h1>

      {/* LIST OF CHAMPIONS */}
      <ul>
        {champions.map((oneChampion) => {
          return (
            <li key={oneChampion.key}>
              <Link to={`/champions/${oneChampion.id}`}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${oneChampion.name}_0.jpg`}
                />
                <p>{oneChampion.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ChampionsPage;
