import './App.css';
import {Input_message} from "./components/Input_message/Input_message";
import {Show_message} from "./components/Show_message/Show_message";
import {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([])

  const addMessage = (message) => {
    setMessages([...messages, message])
    console.log(message, 'meeeeeeeeee')
  }
  return (
    <div className="App">
      {<Show_message
          name={name}
          message={message}
          messages={messages}
          nameUser={nameUser}
      />}
      {<Input_message
          name={name}
          setName={setName}
          message={message}
          setMessage={setMessage}
          addMessage={addMessage}
          nameUser={nameUser}
          setNameUser={setNameUser}
      />}
    </div>
  );
}

export default App;
