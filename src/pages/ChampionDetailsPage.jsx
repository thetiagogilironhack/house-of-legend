import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChampionDetailsPage = () => {
  const { championId } = useParams();
  const [champion, setChampion] = useState("");

  const fetchChampion = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/projects/${championId}`
    );
    if (response.ok) {
      const championInfo = await response.json();
      setChampion(championInfo);
      console.log(championInfo);
    }
  };

  useEffect(() => {
    fetchChampion();
  }, [championId]);

  return (
    <>
      {/* CHAMPION DETAILS */}
      <section>
        <h1>Champion Details</h1>
        <p>{champion.name}</p>
        <p>{champion.title}</p>
        <p>{champion.description}</p>
        <p>{champion.tags}</p>
        <img src={champion.image} alt={champion.name} />
      </section>

      {/* SKINS */}
      <section>
        <p>{champion.image}</p>
      </section>
    </>
  );
};

export default ChampionDetailsPage;
