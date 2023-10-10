import React from "react";
import BuildDeleteButton from "./BuildDeleteButton";

const BuildDisplay = ({ build, fetchAllBuilds, updateBuild }) => {
  const items = [
    build.item1,
    build.item2,
    build.item3,
    build.item4,
    build.item5,
    build.item6,
  ];

  const ratio =
    build.loss > 0
      ? Math.round((build.win / (build.win + build.loss)) * 100)
      : 0;
      
  const ratioColor = ratio < 50 ? "red" : "green";

  return (
    <li className="builds-list">
      {/* TITLE SECTION */}
      <section className="builds-title">
        <p>{build.title}</p>
      </section>

      {/* CHAMPION SECTION */}
      <section className="builds-champion">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${build.champion}_0.jpg`}
          alt={"Item IMG"}
        />
        <p>{build.champion}</p>
      </section>

      {/* ITEMS SECTION */}
      {items.map((item) => (
        <section key={item.id} className="builds-items">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${item.id}.png`}
            alt={"Item IMG"}
          />
          <p>{item.name}</p>
        </section>
      ))}

      {/* WIN RATIO SECTION */}
      <section className="builds-ratio">
        <p className={{ color: ratioColor }}>{ratio}% WR</p>
      </section>

      {/* DELETE BUTTON SECTION */}
      <section className="builds-delete">
        <BuildDeleteButton build={build} fetchAll={fetchAllBuilds} />
      </section>

      {/* SHOW MORE SECTION */}
      <section>
        <input id="ch" type="checkbox" />
        <label htmlFor="ch" className="builds-checkbox-button">
          click
        </label>

        <div className="builds-checkbox">
          <p>{build.win} W</p>
          <p>
            <button
              onClick={() => updateBuild(build, "win", build.win)}
              className="builds-checkbox-button"
            >
              +
            </button>
          </p>
        </div>

        <div className="builds-checkbox">
          <p>{build.loss} L</p>
          <p>
            <button
              onClick={() => updateBuild(build, "loss", build.loss)}
              className="builds-checkbox-button"
            >
              +
            </button>
          </p>
        </div>
      </section>
    </li>
  );
};

export default BuildDisplay;
