import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const ChampionsPage = () => {
  const [champions, setChampions] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);

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

  /* ROLES  */
  const roles = ["Assassin", "Fighter", "Mage", "Marksman", "Support", "Tank"];
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

  /* SEARCH BAR */
  const filteredChampions = champions.filter(
    (champion) =>
      champion.name.toLowerCase().includes(search.toLowerCase()) &&
      (!selectedRole || champion.tags.includes(selectedRole))
  );

  return (
    <div className="container">
      <h1>CHAMPIONS</h1>
      <div className="filter-bar">
        <section>
          <SearchBar name={"champion"} search={search} setSearch={setSearch} />
        </section>

        <section>
          <button type="button" onClick={() => setSelectedRole(null)} className={`${selectedRole  === null ? 'active-role' : ''}`}>
            ALL
          </button>
          {roles.map((role) => {
            return (
              <button type="button" key={role} onClick={() => setSelectedRole(role)} className={`${selectedRole  === role ? 'active-role' : ''}`}>
                {role.toUpperCase()}
              </button>
            );
          })}
        </section>
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
