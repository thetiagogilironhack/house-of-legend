import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import gryffindorLogo from "../assets/hpLogoGryffindor.png";
import hufflepuffLogo from "../assets/hpLogoHufflepuff.png";
import ravenclawLogo from "../assets/hpLogoRavenclaw.png";
import slytherinLogo from "../assets/hpLogoSlytherin.png";

const ChampionsPage = () => {
  const [champions, setChampions] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

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
      (!selectedHouse || champion.house.includes(selectedHouse)) &&
      (!selectedRole || champion.tags.includes(selectedRole))
  );

  return (
    <div className="container">
      <h1>CHAMPIONS</h1>

      {/* FILTER */}
      <div className="filter-bar">
        <section>
          <SearchBar
            name={"a champion"}
            search={search}
            setSearch={setSearch}
          />
        </section>

        <section>
          <button
            type="button"
            onClick={() => setSelectedRole(null) || setSelectedHouse(null)}
            className={`${selectedRole === null ? "active-tab" : ""}`}
          >
            ALL
          </button>

          {roles.map((role) => {
            return (
              <button
                type="button"
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`${selectedRole === role ? "active-tab" : ""}`}
              >
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
              onClick={() => setSelectedHouse(house.name)}
              className={`${selectedHouse === house.name ? "active-tab" : ""}`}
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
