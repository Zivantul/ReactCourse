import React from 'react';
import ReactDOM from 'react-dom/client';
import { Message } from './Message'
import styles from './index.module.css'

const userPhrase = 'фраза, которую скажет пользователь'


const App = () => {
  return (
    <div className={styles.message}>
      <Message userPhrase={userPhrase} />
    </div>

  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
