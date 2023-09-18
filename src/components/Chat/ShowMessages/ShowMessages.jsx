export const ShowMessages = ({ messages, message, userName }) => {
  function getDate(posted) {
    const date = new Date(posted);

    const year = date.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[date.getMonth()];

    function fullNumber(number) {
      if (number.toString().length === 1) {
        return `0${number}`;
      } else {
        return number;
      }
    }

    const day = fullNumber(date.getDate());

    const hours = fullNumber(date.getHours());
    const minutes = fullNumber(date.getMinutes());
    const seconds = fullNumber(date.getSeconds());

    return `${hours}:${minutes}:${seconds} ${month} ${day}, ${year}`;
  }
  return (
    <>
      <div className={"show_message container"}>
        <div className={"show_message__messages"}>
          {messages.map((card) => {
            return (
              <div
                className={`show_message__message message ${
                  userName === card.user && "message_left"
                }`}
                key={card.id}
              >
                <div className={"message__name"}>{card.user}</div>
                <div className={"message__text"}>{card.text}</div>
                <div className={"message__date"}>{getDate(card.posted)}</div>
              </div>
            );
          })}
        </div>
        {message && <div>{userName} is typing...</div>}
      </div>
    </>
  );
};
