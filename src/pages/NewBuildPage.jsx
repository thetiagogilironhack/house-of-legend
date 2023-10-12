import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBuildPage = () => {
  const navigate = useNavigate();

  const [champions, setChampions] = useState([]);
  const [items, setItems] = useState([]);
  const [boots, setBoots] = useState([]);

  const [title, setTitle] = useState("");
  const [champion, setChampion] = useState({ name: "", key: 0 });
  const [item1, setItem1] = useState({ name: "", id: 0 });
  const [item2, setItem2] = useState({ name: "", id: 0 });
  const [item3, setItem3] = useState({ name: "", id: 0 });
  const [item4, setItem4] = useState({ name: "", id: 0 });
  const [item5, setItem5] = useState({ name: "", id: 0 });
  const [item6, setItem6] = useState({ name: "", id: 0 });
  const [win] = useState(0);
  const [loss] = useState(0);

  /* FETCH BUILDS */
  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      title,
      champion,
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      win,
      loss,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/builds`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        const currentBuild = await response.json();
        console.log(currentBuild);
        navigate("/builds");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* FETCH CHAMPIONS */
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

  /* FETCH ITEMS */
  const fetchAllItems = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/items`);
    if (response.ok) {
      const bootsArray = [];
      const noBootsArray = [];

      const allItems = await response.json();

      allItems.forEach((item) => {
        if (item.tags.includes("Boots")) {
          bootsArray.push(item);
        } else {
          noBootsArray.push(item);
        }
      });

      setBoots(bootsArray);
      setItems(noBootsArray);
    }
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  return (
    <div className="container" onSubmit={onSubmit}>
      <h1>Create New Build</h1>

      <form className="newbuilds-box">
        {/* CHAMPION LABEL */}
        <div className="newbuilds-champion-div">
          <label>
            Champion
            <select
              value={champion.name}
              onChange={(event) => {
                const champion = champions.find(
                  (champion) => champion.name === event.target.value
                );
                setChampion({
                  name: champion.name,
                  key: champion.key,
                });
              }}
              required
            >
              <option value="">Select a champion</option>
              {champions.map((champion) => {
                return (
                  <option value={champion.name} key={champion.key}>
                    {champion.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/* TITLE LABEL */}
        <div className="newbuilds-content-div">
          <label>
            Title
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              maxLength={15}
            />
          </label>

          {/* ITEMS LABEL */}
          <label>
            Item 1
            <select
              value={item1.name}
              onChange={(event) => {
                const boot = boots.find(
                  (boots) => boots.name === event.target.value
                );
                setItem1({
                  name: boot.name,
                  id: boot.id,
                });
              }}
              required
            >
              <option value="">Select an item</option>
              {boots.map((item) => {
                return (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </label>

          <label>
            Item 2
            <select
              value={item2.name}
              onChange={(event) => {
                const item = items.find(
                  (item) => item.name === event.target.value
                );
                setItem2({
                  name: item.name,
                  id: item.id,
                });
              }}
              required
            >
              <option value="">Select an item</option>
              {items.map((item) => {
                return (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </label>

          <label>
            Item 3
            <select
              value={item3.name}
              onChange={(event) => {
                const item = items.find(
                  (item) => item.name === event.target.value
                );
                setItem3({
                  name: item.name,
                  id: item.id,
                });
              }}
              required
            >
              <option value="">Select an item</option>
              {items.map((item) => {
                return (
                  <option
                    value={item.name}
                    key={item.id}
                    disabled={item2.name === item.name ? true : false}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </label>

          <label>
            Item 4
            <select
              value={item4.name}
              onChange={(event) => {
                const item = items.find(
                  (item) => item.name === event.target.value
                );
                setItem4({
                  name: item.name,
                  id: item.id,
                });
              }}
              required
            >
              <option value="">Select an item</option>
              {items.map((item) => {
                return (
                  <option
                    value={item.name}
                    key={item.id}
                    disabled={
                      item2.name === item.name || item3.name === item.name
                        ? true
                        : false
                    }
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </label>

          <label>
            Item 5
            <select
              value={item5.name}
              onChange={(event) => {
                const item = items.find(
                  (item) => item.name === event.target.value
                );
                setItem5({
                  name: item.name,
                  id: item.id,
                });
              }}
              required
            >
              <option value="">Select an item</option>
              {items.map((item) => {
                return (
                  <option
                    value={item.name}
                    key={item.id}
                    disabled={
                      item2.name === item.name ||
                      item3.name === item.name ||
                      item4.name === item.name
                        ? true
                        : false
                    }
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </label>

          <label>
            Item 6
            <select
              value={item6.name}
              onChange={(event) => {
                const item = items.find(
                  (item) => item.name === event.target.value
                );
                setItem6({
                  name: item.name,
                  id: item.id,
                });
              }}
              required
            >
              <option value="">Select an item</option>
              {items.map((item) => {
                return (
                  <option
                    value={item.name}
                    key={item.id}
                    disabled={
                      item2.name === item.name ||
                      item3.name === item.name ||
                      item4.name === item.name ||
                      item5.name === item.name
                        ? true
                        : false
                    }
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewBuildPage;
