import { Link } from "react-router-dom";
import leagueIcon from "../assets/league-icon.png";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={leagueIcon} />
        </Link>
      </div>

      <div className="navbar-margin" />
    </>
  );
};

export default NavBar;
