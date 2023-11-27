import { Link } from "react-router-dom";
import BgEndPage from '../../images/welcome/people.svg'

import './EndPage.scss'

export const EndPage = () => {
  return (
    <>
      <div className="endpage">
        <img className='endpage__bg' src={BgEndPage} alt='people'/>
        <div className="endpage__title">Ви завершили сесію.</div>
        <div className="endpage__title">До нових зустрічей!</div>
        <button className="endpage__button button-green">
          <Link to={'/chats'} className="endpage__link">Почати спілкування</Link>
        </button>
      </div>
    </>
  );
};