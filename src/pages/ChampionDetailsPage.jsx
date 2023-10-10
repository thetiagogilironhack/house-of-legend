import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider"

const ChampionDetailsPage = () => {
  const { championId } = useParams();
  const [champion, setChampion] = useState("");

  const fetchChampion = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/champions/${championId}`
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
    <div className="container">
      <h1>Champion Details</h1>
      {/* CHAMPION DETAILS */}
      <section>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt={champion.name + " Image"}
        />
        <p>Name: {champion.name}</p>
        <p>{champion.title}</p>
        <p>{champion.description}</p>
        <p>{champion.tags}</p>
      </section>

      {/* SKINS */}
      <section>
        <ImageSlider champion={champion.id} skins={champion.skins}/>
        <p>{champion.image}</p>
      </section>
    </div>
  );
};

export default ChampionDetailsPage;
