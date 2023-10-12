import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import InfoBarColors from "../components/InfoBarColors";

const ChampionDetailsPage = () => {
  const { championId } = useParams();
  const [champion, setChampion] = useState();
  const [skinsArray, setSkinsArray] = useState([]);
  const [champions, setChampions] = useState([]);

  const fetchAllChampions = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/champions`);
    if (response.ok) {
      const allChampions = await response.json();
      setChampions(allChampions);
      console.log(allChampions);
    }
  };

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
    fetchAllChampions();
  }, []);

  useEffect(() => {
    fetchChampion();
    window.scrollTo(0, 0);
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

  return (
    <div className="champion-main-container">
      {/* CHAMPION DETAILS */}

      <section className="champion-container-slides">
        <ImageSlider skinsArray={skinsArray} />
      </section>

      <section className="champion-half-bottom-section">
        {/*Button to go to previous champion*/}

        {champions.map((listChampion, index) => {
          if (champion?.id === listChampion.id && index !== 0) {
            return (
              <Link to={`/champions/${champions[index - 1]?.id}`}>
                <button
                  type="btn"
                  className="champion-previous-champion-button"
                >
                  <span>Previous Champion</span>
                </button>
              </Link>
            );
          } else if (champion?.id === listChampion.id && index === 0) {
            return (
              <Link to={`/champions/${champions[index]?.id}`}>
                <button
                  type="btn"
                  className="champion-previous-champion-button"
                >
                  <span>Previous Champion</span>
                </button>
              </Link>
            );
          }
        })}
        <div className="champion-info">
          <div className="champion-info-container">
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
                        <div key={oneTag} className="champion-one-tag">
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
                  <InfoBarColors
                    name="Defense"
                    props={champion?.info.defense}
                  />
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
        </div>

        {/*Button to go to next champion*/}
        {champions.map((listChampion, index) => {
          if (
            champion?.id === listChampion.id &&
            index !== (champions.length - 1)
          ) {
            return (
              <Link to={`/champions/${champions[index + 1]?.id}`}>
                <button type="btn" className="champion-next-champion-button">
                  <span>Next Champion</span>
                </button>
              </Link>
            );
          } else if (
            champion?.id === listChampion.id &&
            index === (champions.length - 1)
          ) {
            return (
              <Link to={`/champions/${champions[index]?.id}`}>
                <button
                  type="btn"
                  className="champion-next-champion-button"
                >
                  <span>Previous Champion</span>
                </button>
              </Link>
            );
          }
        })}
      </section>
    </div>
  );
};

export default ChampionDetailsPage;
