import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteBuild from "../components/DeleteBuild";

const MyBuildsPage = () => {
  const [builds, setBuilds] = useState([]);
  const [showMore, setShowMore] = useState(false);

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

    const update = {
      ...build,
    };

    if (type === "win") {
      update.win = newValue;
    } else if (type === "loss") {
      update.loss = newValue;
    }

    console.log(update);

    const body = JSON.stringify(update);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/builds/${build.id}`,
        {
          method: "PUT",
          body,
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
              {showMore ? (
                <>
                  <p>{build.title}</p>
                  <p>{build.champion}</p>
                  <p>{build.item1}</p>
                  <p>{build.item2}</p>
                  <p>{build.item3}</p>
                  <p>{build.item4}</p>
                  <p>{build.item5}</p>
                  <p>{build.item6}</p>

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

                  <p>
                    <button
                      className="btn"
                      onClick={() => setShowMore(!showMore)}
                    >
                      Show more
                    </button>
                  </p>
                  <p>
                    <DeleteBuild build={build} fetchAll={fetchAllBuilds} />
                  </p>
                </>
              ) : (
                <>
                  <p>{build.title}</p>
                  <p>{build.champion}</p>
                  <p>{build.item1}</p>
                  <p>{build.item2}</p>
                  <p>{build.item3}</p>
                  <p>{build.item4}</p>
                  <p>{build.item5}</p>
                  <p>{build.item6}</p>
                  <p>
                    <button
                      className="btn"
                      onClick={() => setShowMore(!showMore)}
                    >
                      Show more
                    </button>
                  </p>
                  <p>
                    <DeleteBuild build={build} fetchAll={fetchAllBuilds} />
                  </p>
                </>
              )}
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
