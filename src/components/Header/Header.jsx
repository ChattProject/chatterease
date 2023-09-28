// import './Header.scss'
import { Link } from "react-router-dom";

import Logo from '../../images/Logo.svg'

export const Header = () => {
  return (
    <>
      <div className="header">
      <div className="header__container">
            <Link to={"/home"} className="header__title">
            <img src={Logo} alt="logo" className="header__logo" />
            {/* <img src="icon" alt="chat" className="header__logo" /> */}
            {/* <div className="header__logo">CHATTER EASE</div>
            <div className="header__name">chatter ease</div> */}
            </Link>
            <div className="header__additional">
            <Link to={"/rules"} className="header__info header__rules paragraph">
              Правила користування
            </Link>    
            <Link to={"/support"} className="header__info header__help paragraph">
              Технічна підтримка
            </Link>
        </div>
        
      </div>
      </div>
    </>
  );
};
