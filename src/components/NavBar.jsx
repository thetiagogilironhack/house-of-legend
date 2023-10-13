import { Link, NavLink } from "react-router-dom";
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
            <NavLink
              to="/champions"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <h3>CHAMPIONS</h3>
            </NavLink>
          </section>

          <section>
          <NavLink
              to="/items"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <h3>ITEMS</h3>
            </NavLink>
          </section>

          <section>
          <NavLink
              to="/builds"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <h3>BUILDS</h3>
            </NavLink>
          </section>
        </div>
      </div>

      <div className="navbar-margin" />
    </>
  );
};

export default NavBar;
