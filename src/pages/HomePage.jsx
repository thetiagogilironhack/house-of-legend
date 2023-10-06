import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section>
        <Link to="/champions">
          <h1>Champions</h1>
        </Link>
      </section>
    </>
  );
};

export default HomePage;
