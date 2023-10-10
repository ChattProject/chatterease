import rules from "../../json/rules.json";
import { useNavigate } from "react-router-dom";

// import './Rules.scss';

export const Rules = ({}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="rules">
        <div className="rules__title">Правила користування Chatter easy</div>
        <ul className="rules__list">
          {rules.map((rule) => (
            <li className="rules__item" key={rule.id}>
              {rule.rule}
            </li>
          ))}
        </ul>
        <button
          className="rules__button button-green"
          onClick={() => navigate(-1)}
        >
          Повернутися назад
        </button>
      </div>
    </>
  );
};
