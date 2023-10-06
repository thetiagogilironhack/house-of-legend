import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section>
        <Link to="/champions">
          <h1>Champions</h1>
        </Link>
      </section>

      <section>
        <Link to="/items">
          <h1>Items</h1>
        </Link>
      </section>

      <section>
        <Link to="/builds">
          <h1>Builds</h1>
        </Link>
      </section>
    </>
  );
};

export default HomePage;
