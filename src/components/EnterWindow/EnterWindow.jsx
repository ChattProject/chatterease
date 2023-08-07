// import "./ShowMessage.css";

export const EnterWindow = ({ setEnter, userName, setUserName }) => {

  const handleEtnerSetUserName = () => {
    const inputName = document.querySelector('#form__user_name');
    setUserName(inputName.value);
  };
  const handleDontSetUserName = () => {
    setUserName("");
  };
  // console.log(userName)

  return (
    <>
      <div className="EnterWindow">
        <div className="EnterWindow__header">
          You can enter you name now or do it later
        </div>
        <form className="EnterWindow__form">
          <input type="text" id="form__user_name" />
          <label htmlFor="form__user_name">Your name</label>
          <button type="button" onClick={() => {
            handleEtnerSetUserName();
            setEnter(true);
          }}>
            Save name
          </button>
          <button type="button" onClick={() => {
            handleDontSetUserName();
            setEnter(true);
            }}>
            Do it later
          </button>
        </form>
      </div>
    </>
  );
};
