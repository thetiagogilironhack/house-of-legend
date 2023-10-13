import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import gryffindorLogo from "../assets/gryffindor.png";
import hufflepuffLogo from "../assets/hufflepuff.png";
import ravenclawLogo from "../assets/ravenclaw.png";
import slytherinLogo from "../assets/slytherin.png";

const ChampionsPage = () => {
  const [champions, setChampions] = useState([]);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState(null);
  const [house, setHouse] = useState(null);

  const fetchAllChampions = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/champions`);
    if (response.ok) {
      const allChampions = await response.json();
      setChampions(allChampions);
    }
  };

  useEffect(() => {
    fetchAllChampions();
  }, []);

  /* CHAMPION ROLES && HOUSES ARRAY */
  const roles = [];

  champions.forEach((champion) => {
    champion.tags.forEach((tag) => {
      if (!roles.includes(tag)) {
        roles.push(tag);
      }
    });
  });

  const houses = [
    { name: "Gryffindor", logo: gryffindorLogo },
    { name: "Hufflepuff", logo: hufflepuffLogo },
    { name: "Ravenclaw", logo: ravenclawLogo },
    { name: "Slytherin", logo: slytherinLogo },
  ];

  /* SEARCH BAR */
  const filteredChampions = champions.filter(
    (champion) =>
      champion.name.toLowerCase().includes(search.toLowerCase()) &&
      (!role || champion.tags.includes(role)) &&
      (!house || champion.house.includes(house))
  );

  return (
    <div className="container">
      <h1>CHAMPIONS</h1>
      <div className="filter-bar">
        <section>
          <SearchBar
            name={"a champion"}
            search={search}
            setSearch={setSearch}
          />
        </section>

        <section className="filter-bar-champions">
          <button type="button" onClick={() => setRole(null)}>
            ALL
          </button>

          {roles.map((role) => {
            return (
              <button type="button" key={role} onClick={() => setRole(role)} className="filter-bar-champions-button">
                {role.toUpperCase()}
              </button>
            );
          })}
        </section>
      </div>

      <div className="filter-bar-hp">
        {houses.map((house) => {
          return (
            <button
              type="button"
              key={house.name}
              onClick={() => setHouse(house.name)}
            >
              <img src={house.logo} />
              {house.name.toUpperCase()}
            </button>
          );
        })}
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
