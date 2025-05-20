export const Menu = () => {
  return (
    <div className="menu">

      <a href="/">
        <img className="menu__logo" src="/assets/images/Logo_mono2.png" alt="logo" />
      </a>

      <div className="menu__buttons">
        <a id="link_skills" className="menu__button" href="#skills">
          Skills
        </a>
        <a id="link_projects"  className="menu__button" href="#projects">
          Projects
        </a>
        <a id="link_licenses"  className="menu__button" href="#licenses">
          Licenses
        </a>
        <a id="link_contact"  className="menu__button" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};