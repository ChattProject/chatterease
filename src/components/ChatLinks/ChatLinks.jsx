import { Link } from "react-router-dom"

export const ChatLinks = () => {
  return (
    <div className="chatlinks">
    <div className="chatlinks__chats chatlinks__subtitle chatlinks__subtitle_selected paragraph">
      <Link className="chatlinks__link" to={'/chats'}>Чати</Link>
    </div>
    <div className="chatlinks__personal chatlinks__subtitle paragraph">
      <Link to={"/direct"} className="chatlinks__link">
        <span className="chatlinks__personal_all">Особисті повідомлення</span>
        <span className="chatlinks__personal_hidden">Особисті</span>
      </Link>
    </div>
  </div>
  )
}