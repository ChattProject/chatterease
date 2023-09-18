import { Link } from "react-router-dom";

export const EndPage = ({  }) => {
  return (
    <>
      <div className="endpage">
        <div className="endpage__title">Ви завершили сесію.</div>
        <div className="endpage__title">До нових зустрічей!</div>
        <button className="endpage__button button-green">
          <Link to={'/chats'} className="endpage__link">Почати спілкування</Link>
        </button>
      </div>
    </>
  );
};