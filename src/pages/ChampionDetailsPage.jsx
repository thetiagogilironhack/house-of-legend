import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import InfoBarColors from "../components/InfoBarColors";

const ChampionDetailsPage = () => {
  const { championId } = useParams();
  const [champion, setChampion] = useState();
  const [skinsArray, setSkinsArray] = useState([]);
  const tags = [];

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

  useEffect(() => {
    if (champion) {
      getSkins();
    }
  }, [champion]);

  const getSkins = () => {
    const skins = [];
    champion.skins &&
      champion.skins.forEach((oneSkin) => {
        skins.push(
          `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${oneSkin}.jpg`
        );
      });
    setSkinsArray(skins);
  };

  /*HANDLE COLOR CHANGE ON BAR LEVEL*/

  return (
    <div className="main-container">
      {/* CHAMPION DETAILS */}

      <section className="container-slides">
        <ImageSlider championName={champion?.id} skinsArray={skinsArray} />
      </section>

      <section className="champion-info">
        <div className="champion-header-border">
          <div className="champion-header-container">
            <div className="champion-header-top-border-left"></div>
            <div className="champion-header-top-border-right"></div>
            <div className="champion-header-middle-border-name">
              <div className="champion-title">
                <p>{champion?.title}</p>
              </div>
              <h1>{champion?.name}</h1>
            </div>
          </div>

          <div className="champion-details">
            <div className="champion-specifics">
              <div className="champion-tags">
                {champion?.tags &&
                  champion?.tags.map((oneTag) => {
                    return (
                      <div key={oneTag}>
                        <img
                          src={`https://zilliongamer.com/uploads/league-of-legends-wild-rift/images/roles/${oneTag.toLowerCase()}-wild-rift-icon.jpg`}
                        />
                        <p className="table-tags">{oneTag}</p>
                      </div>
                    );
                  })}
              </div>
              <div className="champion-stats">
                <InfoBarColors name="Attack" props={champion?.info.attack} />
                <InfoBarColors name="Defense" props={champion?.info.defense} />
                <InfoBarColors name="Magic" props={champion?.info.magic} />
                <InfoBarColors
                  name="Difficulty"
                  props={champion?.info.difficulty}
                />
              </div>
            </div>
            <div className="champion-details-divider"></div>
            <div className="champion-description">
              <p>"{champion?.blurb}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKINS */}
    </div>
  );
};

export default ChampionDetailsPage;
