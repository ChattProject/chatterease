// import "./ChatList.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import create from "../../images/chatList/create.svg";
import { useDispatch } from "react-redux";
import { cleanChatMessages } from "../../store/actions/actionsMessages";
import { Loader } from "../../components/Loader/Loader.jsx";

export const ChatList = ({
  chatsList,
  setSelectedChatIndex,
  userName,
  selectedChatId = -1,
  setSelectedChatId,
  setMobileChatsMenu,
}) => {
  const selectChatMessages = (state) => state.messages.messages;
  const [searchChat, setSearchChat] = useState("");
  const [previousChat, setPreviousChat] = useState(
    parseInt(sessionStorage.getItem("previousChat")) || -1
  );

    const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    setMobileChatsMenu(true);
  }, [setMobileChatsMenu]);

  const handleGoButtonClick = (index, id) => {
    setSelectedChatIndex(index);
    setSelectedChatId(id);
    setPreviousChat(id);
    sessionStorage.setItem("previousChat", id.toString());
  };

  const handleSearchInputChange = (e) => {
    setSearchChat(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedChatId(-1);
    setMobileChatsMenu(true);
  }, [setSelectedChatId, setMobileChatsMenu]);

  const filteredChats = chatsList
    ? chatsList.filter((chat) =>
        typeof chat.chatname === "string"
          ? chat.chatname.toLowerCase().includes(searchChat.toLowerCase())
          : false
      )
    : [];

  // const handleSearchInputChange = (e) => {
  //   setSearchChat(e.target.value);
  // };

  return (
    <>
      <div className="chatlist">
        {showLoader && <Loader />}
        <div className="chatlist__container">
          {previousChat > -1 && (
            <Link
              to={`/chat/${previousChat}`}
              className="chatlist__previous button-default paragraph"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.207 5.79329C12.2999 5.88607 12.3737 5.99628 12.424 6.11759C12.4743 6.23891 12.5002 6.36895 12.5002 6.50029C12.5002 6.63162 12.4743 6.76166 12.424 6.88298C12.3737 7.00429 12.2999 7.1145 12.207 7.20729L8.414 11.0003H18C18.2652 11.0003 18.5196 11.1056 18.7071 11.2932C18.8946 11.4807 19 11.7351 19 12.0003C19 12.2655 18.8946 12.5199 18.7071 12.7074C18.5196 12.8949 18.2652 13.0003 18 13.0003H8.414L12.207 16.7933C12.2999 16.8861 12.3737 16.9963 12.424 17.1176C12.4743 17.2389 12.5002 17.369 12.5002 17.5003C12.5002 17.6316 12.4743 17.7617 12.424 17.883C12.3737 18.0043 12.2999 18.1145 12.207 18.2073C11.817 18.5973 11.183 18.5973 10.792 18.2073L5.293 12.7073C5.1119 12.5269 5.00701 12.2838 5 12.0283V11.9713C5.00716 11.7161 5.11205 11.4734 5.293 11.2933L10.792 5.79329C10.8849 5.70031 10.9952 5.62655 11.1166 5.57623C11.238 5.5259 11.3681 5.5 11.4995 5.5C11.6309 5.5 11.761 5.5259 11.8824 5.57623C12.0038 5.62655 12.1141 5.70031 12.207 5.79329Z"
                  fill="#555454"
                />
              </svg>
              <p className="chatlist__back">Повернутися в чат</p>
            </Link>
          )}
          <div className="chatlist__caption">
            <div className="chatlist__header">
              Обери тему і розпочни спілкування прямо зараз
            </div>

            <fieldset className="chatlist__search">
              <input
                type="text"
                value={searchChat}
                onChange={handleSearchInputChange}
                placeholder="Пошук чатів"
                className="chatlist__input paragraph"
              />
            </fieldset>
          </div>

          {/* <input
            type="text"
            name="search"
            id="search"
            className="chatlist__search"
            value={searchChat}
            onChange={handleSearchInputChange}
            placeholder="Пошук чатів"
          /> */}
          <ul className="chatlist__list">
            {filteredChats.length !== 0 ? (
              <>
                {filteredChats.map((chat, index) => (
                  <li key={chat.id} className="chatlist__item">
                    <Link
                      to={`/chat/${chat.id}`}
                      onClick={() => handleGoButtonClick(index, chat.id)}
                      className="chatlist__link paragraph"
                    >
                      {chat.chatname}
                    </Link>
                  </li>
                ))}
                <button className="chatlist__item chatlist__more">
                  <Link className="chatlist__link chatlist__more_link paragraph">
                    + більше тем для спілкування
                  </Link>
                </button>
              </>
            ) : (
              <div className="chatlist__nochats paragraph">Немає чатів</div>
            )}
          </ul>
          {userName !== "" && (
            <div className="chatlist__newchat">
              <Link
                to={"/newchat"}
                className="chatlist__newchat_button button-default"
              >
                <img
                  src={create}
                  alt="add new chat"
                  className="chatlist__add"
                />
                <p className="chatlist__addchat">Створити власний чат</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
