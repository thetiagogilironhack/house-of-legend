import { Link } from "react-router-dom";
import facebookLogo from "../assets/footerLogoFacebook.png";
import instagramLogo from "../assets/footerLogoInstagram.png";
import linkedinLogo from "../assets/footerLogoLinkdin.png";
import githubLogo from "../assets/footerLogoGithub.png";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p>Lídia Gonzalez</p>
        <section>
          <a href="https://www.facebook.com/lidia1508">
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/lidia.mfg/">
            <img src={instagramLogo} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/l%C3%ADdia-gonzalez-9a1070186/">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Lidiamfg">
            <img src={githubLogo} alt="GitHub" />
          </a>
        </section>
      </div>

      <div>
        <p>Tiago Gil</p>
        <section>
          <a href="https://www.facebook.com/thetiagogil/">
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/thetiagogil/">
            <img src={instagramLogo} alt="Instagram" />
          </a>
          {/* <a>
            <img src={linkedinLogo} alt="LinkedIn" />
          </a> */}
          <a href="https://github.com/thetiagogil">
            <img src={githubLogo} alt="GitHub" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Footer;
