import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <section>
        <Link to="/champions" className="home-page-section" id="champions">
          <h1>CHAMPIONS</h1>
        </Link>
      </section>

      <section>
        <Link to="/items" className="home-page-section" id="items">
          <h1>ITEMS</h1>
        </Link>
      </section>

      <section>
        <Link to="/builds" className="home-page-section" id="builds">
          <h1>BUILDS</h1>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
