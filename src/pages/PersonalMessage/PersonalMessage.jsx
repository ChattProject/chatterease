import { Link } from "react-router-dom";

import './PersonalMessage.scss';
export const PersonalMessage = ({ }) => {
  return (
    <>
      <div className="chatpage__links">
          <div className="chatpage__chats chatpage__subtitle chatpage__subtitle_selected paragraph">
            <Link to={"/chats"} className="chatpage__link">Чати</Link>
          </div>
          <div className="chatpage__personal chatpage__subtitle paragraph">
            <Link to={"/direct"} className="chatpage__link">
              Особисті повідомлення
            </Link>
          </div>
        </div>
      
      <div className="personal chat">
        <div className="personal__window">
          <div className="personal__title">Ця сторінка скоро з’явиться</div>
          <div className="personal__text">
            Наші розробники уже на фінішній прямій і скоро ми додамо можливість
            особистого спілкування
          </div>
        </div>
      </div>
    </>
  );
};
