import { Link } from "react-router-dom";

import "./PersonalMessage.scss";
import { ChatLinks } from "../../components/ChatLinks/ChatLinks";
export const PersonalMessage = ({selectedChatId}) => {
  return (
    <>
      <div className="direct">
        <ChatLinks chatId={selectedChatId}/>

        <div className="personal chat">
          <div className="personal__window window">
            <div className="personal__title">Ця сторінка скоро з’явиться</div>
            <div className="personal__text">
              Наші розробники уже на фінішній прямій і скоро ми додамо
              можливість особистого спілкування
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
