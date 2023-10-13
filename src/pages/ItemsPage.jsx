import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const fetchAllItems = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/items`);
    if (response.ok) {
      const allItems = await response.json();
      setItems(allItems);
    }
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  /* ITEM TAGS ARRAY */

  const types = [];

  items.forEach((item) => {
    item.tags.forEach((tag) => {
      if (!types.includes(tag)) {
        types.push(tag);
      }
    });
  });

  /* SEARCH BAR */
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (!type || item.tags.includes(type))
  );

  return (
    <div className="container">
      <h1>ITEMS</h1>

      <div className="filter-bar">
        <section>
          <SearchBar name={"an item"} search={search} setSearch={setSearch} />
        </section>

        <section>
          <select
            value={type}
            onChange={(event) => {
              const type = types.find((type) => type === event.target.value);
              setType(type);
            }}
            className="filter-bar-items"
            required
          >
            <option value="">Select a type</option>
            {types.map((type) => {
              return (
                <option value={type} key={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </section>
      </div>

      {/* LIST OF CHAMPIONS */}
      <ul className="items-list">
        {filteredItems.map((oneItem, index) => {
          return (
            <li key={`${oneItem.key}${index}`} className="items-box">
              <div>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${oneItem.id}.png`}
                  alt={oneItem.name}
                />
              </div>

              <div>
                <h3>{oneItem.name}</h3>
                <div className="items-tags-box">
                  {oneItem.tags.map((oneTag) => {
                    return <p key={oneTag}>{oneTag}</p>;
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemsPage;
