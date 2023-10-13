import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BoxDisplayChampion from "../components/builds/BoxDisplayChampion";
import SearchBar from "../components/SearchBar";

const MyBuildsPage = () => {
  const [builds, setBuilds] = useState([]);
  const [, setChampions] = useState([]);
  const [search, setSearch] = useState("");

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
      const buildsSorted = allBuilds.sort((a, b) => {
        if (a.champion.name.toLowerCase() < b.champion.name.toLowerCase()) {
          return -1;
        } else if (
          a.champion.name.toLowerCase() > b.champion.name.toLowerCase()
        ) {
          return 1;
        } else {
          return 0;
        }
      });
      setBuilds(buildsSorted);
      console.log(buildsSorted)
    }
  };

  useEffect(() => {
    fetchAllBuilds();
  }, []);

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

  /* SEARCH BAR */
  const filteredBuilds = builds.filter((build) =>
    build.champion.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>BUILDS</h1>

      {/* FILTER */}
      <div className="mybuilds-div">
        <div style={{ width: "3rem" }} />
        <div className="filter-bar">
          <SearchBar
            name={"a build"}
            search={search}
            setSearch={setSearch}
          />
        </div>

        <div>
          <Link to="/builds/new">
            <button className="mybuilds-create-button">+</button>
          </Link>
        </div>
      </div>

      {/* CHAMPION BOX MAP */}
      <div className="mybuilds-box">
        {Object.keys(groupBuildsByChampion(filteredBuilds)).map(
          (championName) => {
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
          }
        )}
      </div>
    </div>
  );
};

export default MyBuildsPage;
