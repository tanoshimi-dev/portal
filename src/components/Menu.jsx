export const Menu = () => {
    return (
      <div className="menu">
  
        <a href="/">
          <img className="menu__logo" src="/assets/images/Logo_mono2.png" alt="logo" />
        </a>

        <div className="menu__buttons">
          <a className="menu__button" href="#skills">
            Skills
          </a>
          <a className="menu__button" href="#achivements">
            Achivements
          </a>
          <a className="menu__button" href="#license">
            License
          </a>
          <a className="menu__button" href="#contact">
            Contact
          </a>
        </div>
      </div>
    );
  };