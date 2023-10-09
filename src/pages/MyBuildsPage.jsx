import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteBuild from "../components/DeleteBuild";
import ShowMoreButton from "../components/ShowMoreButton";

const MyBuildsPage = () => {
  const [builds, setBuilds] = useState([]);

  /* FETCH BUILDS */
  const fetchAllBuilds = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/builds`);
    if (response.ok) {
      const allBuilds = await response.json();
      setBuilds(allBuilds);
      console.log(allBuilds);
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
      console.log(response);
      if (response.ok) {
        await fetchAllBuilds();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>My Builds</h1>

      <ul>
        {builds.map((build) => {
          return (
            <li key={build.id} className="builds-list">
              <p>{build.title}</p>
              <p>{build.champion}</p>
              <p>{build.item1}</p>
              <p>{build.item2}</p>
              <p>{build.item3}</p>
              <p>{build.item4}</p>
              <p>{build.item5}</p>
              <p>{build.item6}</p>

              <p>
                <DeleteBuild build={build} fetchAll={fetchAllBuilds} />
              </p>

              <div>
                <ShowMoreButton>
                  <div>
                    <p>{build.win} W</p>
                    <button
                      onClick={() => updateBuild(build, "win", build.win)}
                    >
                      Win
                    </button>
                  </div>

                  <div>
                    <p>{build.loss} L</p>
                    <button
                      onClick={() => updateBuild(build, "loss", build.loss)}
                    >
                      Loss
                    </button>
                  </div>
                </ShowMoreButton>
              </div>
            </li>
          );
        })}
      </ul>

      <Link to="/builds/new">
        <button>New Build</button>
      </Link>
    </div>
  );
};

export default MyBuildsPage;
