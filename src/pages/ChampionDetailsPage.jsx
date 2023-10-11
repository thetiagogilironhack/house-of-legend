import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

const ChampionDetailsPage = () => {
  const { championId } = useParams();
  const [champion, setChampion] = useState({});
  const skins = [];
  console.log(skins);

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
    <div className="main-container">
      {/* CHAMPION DETAILS */}

      <section className="container-slides">
        <ImageSlider championName={champion.key} skinsArray={skins} />
      </section>

      <section className="champion-info">
        <h1>{champion.name + "   "}</h1>
        <p className="title">{champion.title}</p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {champion.tags &&
                champion.tags.map((oneTag) => {
                  return (
                    <tr>
                      <td key={oneTag} className="table-tags">{oneTag}</td>
                    </tr>
                  );
                })}
              <td className="table-description">{champion.blurb}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* SKINS */}
      {champion.skins &&
        champion.skins.map((oneSkin) => {
          skins.push(
            `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${oneSkin}.jpg`
          );
          return <div key={oneSkin}></div>;
        })}
    </div>
  );
};

export default ChampionDetailsPage;
