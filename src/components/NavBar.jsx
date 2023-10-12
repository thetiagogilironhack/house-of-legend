import { Link } from "react-router-dom";
import leagueIcon from "../assets/league-icon.png";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo-div">
          <Link to="/">
            <img src={leagueIcon} />
          </Link>
        </div>

        <div className="navbar-text-div">
          <section>
            <Link to="/champions">
              <h3>CHAMPIONS</h3>
            </Link>
          </section>

          <section>
            <Link to="/items">
              <h3>ITEMS</h3>
            </Link>
          </section>

          <section>
            <Link to="/builds">
              <h3>BUILDS</h3>
            </Link>
          </section>
        </div>
      </div>

      <div className="navbar-margin" />
    </>
  );
};

export default NavBar;
