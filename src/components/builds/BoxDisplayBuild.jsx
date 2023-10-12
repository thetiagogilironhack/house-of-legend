import React, { useState } from "react";
import BuildDeleteButton from "./DeleteBuildButton";

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
    <div className="mybuilds-build-box">
      {/* --- MAIN DIV --- */}
      <div className="mybuilds-build-main-div">
        {/* TITLE SECTION */}
        <section className="mybuilds-build-title-box">
          <p>{build.title}</p>
        </section>

        {/* ITEMS SECTION */}
        {items.map((item, index) => (
          <section key={`${item.id}${index}`} className="mybuilds-build-items-box">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${item.id}.png`}
              alt={"Item IMG"}
            />
            <p>{item.name}</p>
          </section>
        ))}

        {/* WIN RATIO SECTION */}
        <section className="mybuilds-build-ratio-box">
          <p>
            <span style={{ color: ratioColor }}>{ratio}</span>% WR
          </p>
        </section>

        {/* DELETE BUTTON SECTION */}
        <section className="mybuilds-build-delete-box">
          <BuildDeleteButton build={build} fetchAll={fetchAllBuilds} />
        </section>

        {/* CHECKBOX SECTION */}
        <section className="mybuilds-build-check-box">
          <button type="button" onClick={() => setShowCheckbox(!showCheckbox)}>
            {showCheckbox ? "-" : "+"}
          </button>
        </section>
      </div>

      {/* --- HIDDEN DIV --- */}
      {showCheckbox && (
        <div className="mybuilds-build-hidden-div">
          <p>Games played with this build:</p>

          <section className="mybuilds-build-hidden-checkbox">
            <p>{gamesPlayed} games</p>
          </section>

          <section className="mybuilds-build-hidden-checkbox">
            <p>{build.win} wins</p>
            <button onClick={() => updateBuild(build, "win", build.win)}>
              +
            </button>
          </section>

          <section className="mybuilds-build-hidden-checkbox">
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