import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BoxDisplayChampion from "../components/builds/BoxDisplayChampion";

const MyBuildsPage = () => {
  const [builds, setBuilds] = useState([]);
  const [, setChampions] = useState([]);

  /* FETCH CHAMPIONS */
  const fetchAllChampions = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/champions`);
    if (response.ok) {
      const allChampions = await response.json();
      setChampions(allChampions);
    }
  };

  useEffect(() => {
    fetchAllChampions();
  }, []);

  /* FETCH BUILDS */
  const fetchAllBuilds = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/builds`);
    if (response.ok) {
      const allBuilds = await response.json();
      setBuilds(allBuilds);
    }
  };

  useEffect(() => {
    fetchAllBuilds();
  }, []);

  useEffect(() => {}, [builds]);

  /* UPDATE BUILD */
  const updateBuild = async (build, type, value) => {
    let newValue = value + 1;

    if (type === "win") {
      build.win = newValue;
    } else if (type === "loss") {
      build.loss = newValue;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/builds/${build.id}`,
        {
          method: "PUT",
          body: JSON.stringify(build),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        await fetchAllBuilds();
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* GROUP BUILDS BY CHAMPION */
  const groupBuildsByChampion = (builds) => {
    const buildsGroup = {};

    for (let i = 0; i < builds.length; i += 1) {
      const build = builds[i];
      const champion = build.champion.name;

      if (!buildsGroup[champion]) {
        buildsGroup[champion] = [build];
      } else {
        buildsGroup[champion].push(build);
      }
    }

    return buildsGroup;
  };

  const groupedBuilds = groupBuildsByChampion(builds);

  return (
    <div className="container">
      <h1>My Builds</h1>

      <Link to="/builds/new">
        <button className="mybuilds-new-button">New Build</button>
      </Link>

      <div className="mybuilds-box">
        {Object.keys(groupedBuilds)
          .map((championName) => {
            const array = groupedBuilds[championName];

            return (
              <BoxDisplayChampion
                key={championName}
                championName={championName}
                array={array}
                fetchAllBuilds={fetchAllBuilds}
                updateBuild={updateBuild}
              />
            );
          })
          .sort()}
      </div>
    </div>
  );
};

export default MyBuildsPage;
