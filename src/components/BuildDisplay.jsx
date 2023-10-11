import React, { useState } from "react";
import BuildDeleteButton from "./BuildDeleteButton";

const BuildDisplay = ({ build, fetchAllBuilds, updateBuild }) => {
  const [showCheckbox, setShowCheckbox] = useState(false);

  const items = [
    build.item1,
    build.item2,
    build.item3,
    build.item4,
    build.item5,
    build.item6,
  ];

  /* HANDLE GAMES PLAYED, WINS AND LOSSES */
  let ratio = 0;
  let gamesPlayed = build.win + build.loss;
  if (build.loss === 0 && build.win > 0) {
    ratio = 100;
  } else if (build.loss > 0) {
    ratio = Math.round((build.win / gamesPlayed) * 100);
  }

  let ratioColor = "";
  switch (true) {
    case ratio < 50:
      ratioColor = "gray";
      break;
    case ratio > 74:
      ratioColor = "red";
      break;
    default:
      ratioColor = "green";
  }

  return (
    <div className="build-box">
      {/* --- MAIN DIV --- */}
      <div className="build-main-div">
        {/* TITLE SECTION */}
        <section className="build-title">
          <p>{build.title}</p>
        </section>

        {/* CHAMPION SECTION */}
        <section className="build-champion">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${build.champion.name}_0.jpg`}
            alt={"Item IMG"}
          />
          <p>{build.champion.name}</p>
        </section>

        {/* ITEMS SECTION */}
        {items.map((item) => (
          <section key={item.id} className="build-items">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${item.id}.png`}
              alt={"Item IMG"}
            />
            <p>{item.name}</p>
          </section>
        ))}

        {/* WIN RATIO SECTION */}
        <section className="build-ratio">
          <p>
            <span style={{ color: ratioColor }}>{ratio}</span>% WR
          </p>
        </section>

        {/* DELETE BUTTON SECTION */}
        <section className="build-delete">
          <BuildDeleteButton build={build} fetchAll={fetchAllBuilds} />
        </section>

        {/* CHECKBOX SECTION */}
        <section className="build-checkbox">
          <button type="button" onClick={() => setShowCheckbox(!showCheckbox)}>
            {showCheckbox ? "-" : "+"}
          </button>
        </section>
      </div>

      {/* --- HIDDEN DIV --- */}
      {showCheckbox && (
        <div className="build-hidden-div">
          <p>Games played with this build:</p>

          <section className="build-hidden-checkbox">
            <p>{gamesPlayed} games</p>
          </section>

          <section className="build-hidden-checkbox">
            <p>{build.win} wins</p>
            <button onClick={() => updateBuild(build, "win", build.win)}>
              +
            </button>
          </section>

          <section className="build-hidden-checkbox">
            <p>{build.loss} losses</p>
            <button onClick={() => updateBuild(build, "loss", build.loss)}>
              +
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default BuildDisplay;
