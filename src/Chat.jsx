import { useState } from "react";
import io from "socket.io-client";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const socket = io("http://localhost:3000");
    socket.emit("clientMessage", newMessage);
    setNewMessage("");
    socket.on("serverMessage", (data) => {
      setMessages([...messages, data]);
    });
  };

  return (
    <div>
      <h1>Chat App</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' value={newMessage} onChange={handleNewMessage} />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Chat;
