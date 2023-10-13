import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <section>
        <Link to="/champions" className="home-page-section" id="champions">
          <img src={"https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Lux_0.jpg"} />
          <h1>CHAMPIONS</h1>
        </Link>
      </section>

      <section>
        <Link to="/items" className="home-page-section" id="items">
          <img src={"https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ornn_0.jpg"} />
          <h1>ITEMS</h1>
        </Link>
      </section>

      <section>
        <Link to="/builds" className="home-page-section" id="builds">
        <img src={"https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Heimerdinger_0.jpg"} />
          <h1>BUILDS</h1>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
