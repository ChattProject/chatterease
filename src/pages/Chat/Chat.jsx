import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
// import "./Chat.css";
import { Link } from "react-router-dom";
import { InputMessage } from "../../components/Chat/InputMessage/InputMessage";
import { ShowMessages } from "../../components/Chat/ShowMessages/ShowMessages";
import { CloseSession } from "../../components/Chat/CloseSession/CloseSession";
import { ChatLinks } from "../../components/ChatLinks/ChatLinks";
import { useDispatch } from "react-redux";
// import socket from "../../websocket";
import { fetchChatMessages } from "../../store/middleware/middlewareMessages";
import { updateMessages } from "../../store/actions/actionsMessages";
import { Loader } from "../../components/Loader/Loader";
import { useAutoScroll } from "../../hooks/AutoScroll";

export const Chat = ({
  // chat,
  chatTitle,
  // messages,
  userName,
  addMessageToChat,
  setChatMenu,
  chatMenu,
  selectedChatId,
  // userId = -1,
  users,
}) => {
  const selectChatMessages = (state) => state.messages.messages;
  const chatMessages = useSelector(selectChatMessages);
  const [userId, setUserId] = useState(-1);
  const [message, setMessage] = useState("");
  const [isClosingChat, setIsClosingChat] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const [searchInChat, setSearchInChat] = useState("");
  const [searchNothingVisible, setSearchNothingVisible] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const containerRef = useAutoScroll(chatMessages.length);

  useEffect(() => {
    if (chatMessages.length !== 0) {
      setShowLoader(false);
    } else {
      const timeoutId = setTimeout(() => {
        setShowLoader(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [chatMessages]);

  useEffect(() => {
    if (userName !== "") {
      const newUser = users.find((user) => user.username === userName);

      const timeoutId = setTimeout(() => {
        setUserId(newUser.user_id);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [userName, users]);

  const container = containerRef.current;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatMessages(selectedChatId));
    const intervalId = setInterval(() => {
      dispatch(fetchChatMessages(selectedChatId));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [dispatch, selectedChatId]);

  const scrollToBottom = () => {
    if (container) {
      if ("scrollIntoView" in container) {
        container.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      } else {
        const keyboardHeight =
          window.innerHeight - document.documentElement.clientHeight;
        const targetScrollPosition =
          container.getBoundingClientRect().bottom - keyboardHeight;

        window.scrollTo({
          top: targetScrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  const handleChatClose = () => {
    setIsClosingChat(true);
    setChatMenu(false);
  };

  const handleSearch = () => {
    setSearchInput(!searchInput);
  };

  const handleSearchInChat = (e) => {
    setSearchInChat(e.target.value);
  };

  return (
    <>
      <div className="chatpage">
        <ChatLinks chatId={selectedChatId} />

        <div className="chatpage__chat chat">
          {showLoader && <Loader />}
          <div className="chat__header">
            <div className="chat__title">
              {!searchInput ? (
                <div className="chat__info">
                  <div className="chat__name">{chatTitle}</div>
                  <div className="chat__count paragraph">
                    {chatMessages.length === 0
                      ? "немає повідомлень"
                      : `${chatMessages.length} повідомлень`}
                  </div>
                </div>
              ) : (
                <div className="chat__search">
                  <button
                    className="chat__search_back"
                    onClick={() => {
                      handleSearch();
                      setSearchInChat("");
                    }}
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
                        fill="#292929"
                      />
                    </svg>
                  </button>

                  <fieldset className="chat__search_form">
                    <input
                      type="text"
                      value={searchInChat}
                      onChange={handleSearchInChat}
                      placeholder="Пошук в чаті..."
                      className="chat__search_input paragraph"
                    />
                    {searchNothingVisible && (
                      <p className="chat__search_nothing paragraph">
                        Нічого не знайшли :(
                      </p>
                    )}
                  </fieldset>
                </div>
              )}

              <div className="chat__buttons">
                {!searchInput && (
                  <button
                    type="button"
                    className="chat__button_search"
                    onClick={handleSearch}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="chat__button_search_icon"
                    >
                      <path
                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                        stroke="#292929"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 21.0004L16.65 16.6504"
                        stroke="#292929"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}

                <button
                  type="button"
                  className="chat__exit"
                  aria-label="Close"
                  onClick={() => setIsClosingChat(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="chat__exit_icon"
                  >
                    <path
                      d="M12 10.5866L6.70704 5.29357C6.51844 5.11141 6.26584 5.01062 6.00364 5.0129C5.74144 5.01517 5.49063 5.12034 5.30522 5.30575C5.11981 5.49116 5.01465 5.74197 5.01237 6.00417C5.01009 6.26636 5.11088 6.51897 5.29304 6.70757L10.586 12.0006L5.29304 17.2936C5.11088 17.4822 5.01009 17.7348 5.01237 17.997C5.01465 18.2592 5.11981 18.51 5.30522 18.6954C5.49063 18.8808 5.74144 18.986 6.00364 18.9882C6.26584 18.9905 6.51844 18.8897 6.70704 18.7076L12 13.4146L17.293 18.7076C17.4816 18.8897 17.7342 18.9905 17.9964 18.9882C18.2586 18.986 18.5095 18.8808 18.6949 18.6954C18.8803 18.51 18.9854 18.2592 18.9877 17.997C18.99 17.7348 18.8892 17.4822 18.707 17.2936L13.414 12.0006L18.707 6.70757C18.8026 6.61532 18.8787 6.50498 18.9311 6.38297C18.9836 6.26097 19.0111 6.12975 19.0123 5.99697C19.0134 5.86419 18.9881 5.73251 18.9379 5.60962C18.8876 5.48672 18.8133 5.37507 18.7194 5.28117C18.6255 5.18728 18.5139 5.11303 18.391 5.06275C18.2681 5.01247 18.1364 4.98717 18.0036 4.98832C17.8709 4.98947 17.7396 5.01706 17.6176 5.06947C17.4956 5.12188 17.3853 5.19806 17.293 5.29357L12 10.5866Z"
                      fill="#292929"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <Link to={"/chats"} className="chat__back paragraph">
              Обрати інший чат
            </Link>

            <div className="chat__flexiblemenu flexiblemenu ">
              <button
                className="flexiblemenu__dots"
                onClick={(event) => {
                  event.stopPropagation();
                  setChatMenu(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"
                    fill="#292929"
                  />
                  <path
                    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                    fill="#292929"
                  />
                  <path
                    d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z"
                    fill="#292929"
                  />
                </svg>
              </button>
              {chatMenu && (
                <div
                  className="flexiblemenu__links"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    className="flexiblemenu__search flexiblemenu__item"
                    onClick={(e) => {
                      handleSearch(e);
                      setChatMenu(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="flexiblemenu__icon"
                    >
                      <path
                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                        stroke="#292929"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.9999 21.0004L16.6499 16.6504"
                        stroke="#292929"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flexiblemenu__title">Пошук</div>
                  </button>
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={handleChatClose}
                    className="flexiblemenu__close flexiblemenu__item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="flexiblemenu__icon"
                    >
                      <path
                        d="M12.0004 10.5866L6.70741 5.29357C6.5188 5.11141 6.2662 5.01062 6.00401 5.0129C5.74181 5.01517 5.491 5.12034 5.30559 5.30575C5.12018 5.49116 5.01501 5.74197 5.01273 6.00417C5.01045 6.26636 5.11125 6.51897 5.29341 6.70757L10.5864 12.0006L5.29341 17.2936C5.11125 17.4822 5.01045 17.7348 5.01273 17.997C5.01501 18.2592 5.12018 18.51 5.30559 18.6954C5.491 18.8808 5.74181 18.986 6.00401 18.9882C6.2662 18.9905 6.5188 18.8897 6.70741 18.7076L12.0004 13.4146L17.2934 18.7076C17.482 18.8897 17.7346 18.9905 17.9968 18.9882C18.259 18.986 18.5098 18.8808 18.6952 18.6954C18.8806 18.51 18.9858 18.2592 18.9881 17.997C18.9904 17.7348 18.8896 17.4822 18.7074 17.2936L13.4144 12.0006L18.7074 6.70757C18.8029 6.61532 18.8791 6.50498 18.9315 6.38297C18.9839 6.26097 19.0115 6.12975 19.0127 5.99697C19.0138 5.86419 18.9885 5.73251 18.9382 5.60962C18.8879 5.48672 18.8137 5.37507 18.7198 5.28117C18.6259 5.18728 18.5143 5.11303 18.3914 5.06275C18.2685 5.01247 18.1368 4.98717 18.004 4.98832C17.8712 4.98947 17.74 5.01706 17.618 5.06947C17.496 5.12188 17.3857 5.19806 17.2934 5.29357L12.0004 10.5866Z"
                        fill="#292929"
                      />
                    </svg>
                    <div className="flexiblemenu__title">Вийти з чату</div>
                  </button>
                </div>
              )}
            </div>
          </div>

          <ShowMessages
            messages={chatMessages}
            message={message}
            userName={userName}
            containerRef={containerRef}
            scrollToBottom={scrollToBottom}
            searchInChat={searchInChat}
            setSearchNothingVisible={setSearchNothingVisible}
          />
          {userName === "" ? (
            <div className="chat__login">
              <div className="chat__login_text paragraph">
                Щоб писати повідомлення - введи свій унікальний логін
              </div>
              <button className="chat__button_input button-green">
                <Link to={"/login"} className="chat__input-link">
                  Ввести логін
                </Link>
              </button>
            </div>
          ) : (
            <div className="chat__input">
              <InputMessage
                userName={userName}
                chatId={selectedChatId}
                addMessageToChat={addMessageToChat}
                setMessage={setMessage}
                message={message}
                containerRef={containerRef}
                scrollToBottom={scrollToBottom}
                userId={userId}
                container={container}
              />
            </div>
          )}
          {/* {showLoader && <Loader />} */}
        </div>
        <p className="chatpage__enter">Enter+shift</p>
      </div>
      {isClosingChat && <CloseSession setIsClosingChat={setIsClosingChat} />}
    </>
  );
};
