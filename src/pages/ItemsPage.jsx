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
    <>
      <h1>Items List</h1>

      {/* LIST OF CHAMPIONS */}
      <ul>
        {items.map((oneItem) => {
          return (
            <li key={oneItem.image.full}>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${oneItem.image.full}`}
                alt={oneItem.name}
              />
              <p>{oneItem.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ItemsPage;
