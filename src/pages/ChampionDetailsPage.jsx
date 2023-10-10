import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

const ChampionDetailsPage = () => {
  const { championId } = useParams();
  const [champion, setChampion] = useState({});
  const skins = [];
  console.log(skins)

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
        {champion.skins &&
          champion.skins.map((oneSkin) => {
            skins.push(
              `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${oneSkin}.jpg`
            );
            return <div key={oneSkin}></div>
          })}
          <div className="container-slides">
            <ImageSlider championName={champion.id} skinsArray={skins}/>
          </div>
        
        <p>{champion.image}</p>
      </section>
    </div>
  );
};

export default ChampionDetailsPage;
