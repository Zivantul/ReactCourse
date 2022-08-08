import React, { useEffect, useState } from 'react';
import { Message } from './Message'

const defaultPlaceHolder = 'Введите сообщение';
let currentPlaceHolder = defaultPlaceHolder;

export function App() {
  const [messageList, setMessageList] = useState([])
  const [value, setValue] = useState("")


  const sendMessage = () => {
    setMessageList([
      ...messageList,
      { 'text': value, 'author': 'user' }
    ]);
    setValue("");
    currentPlaceHolder = '';
  }

  useEffect(() => {
    if (messageList.length > 0) {
      const lastMessageAuthor = messageList[messageList.length - 1].author;


      if (lastMessageAuthor == 'user') {
        let timeoutId = setTimeout(() => {
          setMessageList([
            ...messageList,
            { 'text': 'Verynice, I am Bot', 'author': 'robot' }
          ]);
          currentPlaceHolder = defaultPlaceHolder;
        }, 1500);

        return () => {
          clearInterval(timeoutId);
        };
      }
    }
  }, [messageList]);


  return (
    <div className="App">
      <div className="inputs">
        <input className="input_form" placeholder={currentPlaceHolder} value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
      <hr></hr>
      {messageList.map((message) => {

        return (
          <Message author={message.author} text={message.text} />
        )
      })}
    </div>
  );

}
