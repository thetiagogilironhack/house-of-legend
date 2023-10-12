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
      <h1>ITEMS</h1>

      {/* LIST OF CHAMPIONS */}
        <ul className="items-list">
          {items.map((oneItem) => {
            return (
              <li key={oneItem.key} className="items-box">
                <div>
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${oneItem.id}.png`}
                    alt={oneItem.name}
                  />
                </div>

                <div>
                  <h3>{oneItem.name}</h3>
                  <div  className="items-tags-box">
                    {oneItem.tags.map((oneTag)=>{
                    return(
                      <p key={oneTag}>{oneTag}</p>
                    )
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
