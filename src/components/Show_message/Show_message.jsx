import "./Show_message.css";
export const Show_message = ({name, message, messages, nameUser}) => {

    return(
        <>
            <div className={"show_message container"}>
                <div  className={"show_message__messages"}>
                    {messages.map(card =>
                        <>
                            <div className={"show_message__message message"} key={card.id}>
                                <div className={"message__name"}>From: {card.name}</div>
                                <div  className={"message__text"}>Message: {card.message}</div>
                                <div  className={"message__date"}>{`Posted: ${card.date.getHours()}:${card.date.getMinutes()}:${card.date.getSeconds()} ${card.date.getDate()}.${card.date.getMonth() + 1}.${card.date.getFullYear()}`}</div>
                            </div>
                        </>
                    )}
                </div>

                {message &&  <div>{nameUser || name} is typing...</div>}

            </div>
        </>
    )
}
