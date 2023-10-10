import { useEffect, useState } from "react";

const ItemsPage = () => {
  const [items, setItems] = useState([]);

  const fetchAllItems = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/items`);
    if (response.ok) {
      const allItems = await response.json();
      setItems(allItems);
      console.log(allItems);
    }
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  return (
    <div className="container">
      <h1>Items List</h1>

      {/* LIST OF CHAMPIONS */}
      <ul className="items-list">
        {items.map((oneItem) => {
          return (
            <li key={oneItem.id} className="items-box">
              <section>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${oneItem.id}.png`}
                  alt={oneItem.name}
                />
              </section>

              <section>
                <p>Name: {oneItem.name}</p>
                <p>Price: {oneItem.gold.total}g</p>
              </section>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemsPage;
