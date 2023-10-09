import './Support.scss';
import { Link } from "react-router-dom";

import Close from '../../images/iconClose.png';
// import BgSupport from '../../images/bgSupport.jpg';

export const Support = ({ }) => {
  return (
    <>
      <div className="support">
        {/* <img className='support__bg' src={BgSupport} alt='Support'/> */}
        <div className="support__window window">
          <Link to={"/chats"} >
            <img className="support__close" src={Close} alt="Close" />
          </Link>
          <div className="support__content">
            <div className="support__title">Ми на зв’язку</div>
            <div className="support__text">
              Якщо у Вас виникли запитання до нас з приводу роботи сервісу -
              напишіть нам на електронну пошту:
            </div>
            <a href="mailto:chattereasy@gmail.com" className="support__email">
              chattereasy@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
