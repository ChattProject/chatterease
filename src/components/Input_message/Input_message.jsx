
export const Input_message = ( {name, setName, message, setMessage, addMessage, nameUser, setNameUser} ) => {
    const handleSetName = (event) => {
        setName(event.target.value);
    };
    const handleSetNameUser = () => {
        setNameUser(name);
    };
    const removeNameUser = () => {
        setNameUser('');
        setName('');
    };
    const handleSetMessage = (event) => {
        setMessage(event.target.value);
    };
    const handleSubmit = (event) => {
        // setNameUser(name);
        setName('');
        setMessage('');

        addMessage({
            id: Date.now() + Math.random(),
            name: name || nameUser,
            message: message,
            date: new Date(),
        });

        event.preventDefault();
        document.forms[0].reset();
    };

    return(
        <>
            <div className={"input_message container"}>
                <form
                    className={"input_message__form-message form-message"}
                    onSubmit={handleSubmit}
                >
                    <div className={"form-message__name name-message"}>
                        {nameUser
                            ? <>
                                <div>
                                    Your name: {nameUser}
                                </div>
                                <button className={"name-message__remove"} onClick={removeNameUser}>
                                    Remove name
                                </button>
                            </>
                        : <>
                                <label className={"name-message__label"} htmlFor={"name-message"}>Your name</label>
                                <input
                                    type={"text"}
                                    className={"name-message__input"}
                                    id={"name-message"}
                                    onChange={handleSetName}
                                    placeholder={"Type your name..."}
                                    required={'true'}
                                    // autoComplete={'off'}
                                    // value={nameUser}
                                />
                                <input
                                    type={"button"}
                                    className={"name-message__saved"}
                                    onClick={handleSetNameUser}
                                    value={"Save name"}
                                />
                            </>
                        }

                    </div>
                    <div  className={"form-message__message text-message"}>
                        <label className={"text-message__label"} htmlFor={"text-message"}>Your message</label>
                        <input
                            type={"text"}
                            className={"text-message__input"}
                            id={"text-message"}
                            onChange={handleSetMessage}
                            placeholder={"Type your message..."}
                            required={'true'}
                        />
                    </div>
                    <button
                        type={"submit"}
                        className={"name-message__button"}
                    >
                        Add message
                    </button>
                </form>
            </div>
        </>
    )
}