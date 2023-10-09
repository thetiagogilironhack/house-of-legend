import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBuildPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [champion, setChampion] = useState("");
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");
  const [item4, setItem4] = useState("");
  const [item5, setItem5] = useState("");
  const [item6, setItem6] = useState("");
  const [win] = useState(0);
  const [loss] = useState(0);
  const [champions, setChampions] = useState([]);
  const [items, setItems] = useState([]);

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
      console.log(allChampions);
    }
  };

  useEffect(() => {
    fetchAllChampions();
  }, []);

  /* FETCH ITEMS */
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
    <div onSubmit={onSubmit}>
      <form className="container">
        <label>
          Title
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>

        <label>
          Champion
          <select
            value={champion}
            onChange={(event) => setChampion(event.target.value)}
            required
          >
            <option value="">Select an champion</option>
            {champions.map((champion) => {
              return (
                <option value={champion.name} key={champion.key}>
                  {champion.name}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          Item 1
          <select
            value={item1}
            onChange={(event) => setItem1(event.target.value)}
            required
          >
            <option value="">Select an item</option>
            {items.map((item) => {
              return (
                <option value={item.name} key={item.image.full}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          Item 2
          <select
            value={item2}
            onChange={(event) => setItem2(event.target.value)}
            required
          >
            <option value="">Select an item</option>
            {items.map((item) => {
              return (
                <option value={item.name} key={item.image.full}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          Item 3
          <select
            value={item3}
            onChange={(event) => setItem3(event.target.value)}
            required
          >
            <option value="">Select an item</option>
            {items.map((item) => {
              return (
                <option value={item.name} key={item.image.full}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          Item 4
          <select
            value={item4}
            onChange={(event) => setItem4(event.target.value)}
            required
          >
            <option value="">Select an item</option>
            {items.map((item) => {
              return (
                <option value={item.name} key={item.image.full}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          Item 5
          <select
            value={item5}
            onChange={(event) => setItem5(event.target.value)}
            required
          >
            <option value="">Select an item</option>
            {items.map((item) => {
              return (
                <option value={item.name} key={item.image.full}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          Item 6
          <select
            value={item6}
            onChange={(event) => setItem6(event.target.value)}
            required
          >
            <option value="">Select an item</option>
            {items.map((item) => {
              return (
                <option value={item.name} key={item.image.full}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewBuildPage;
