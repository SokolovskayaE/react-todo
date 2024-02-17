import React from 'react';
import styles from "./Home.module.css";
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Todo List!</h1>
      <p className={styles.description}>Simplify your life with Todo App!<br/> The ultimate task manager designed to streamline your day. <br/> The app makes it effortless to stay organized and focused.</p>
      <h2 className={styles.featureHeading}>Key Features:</h2>
      <ul className={styles.featureList}>
        <li><strong>&#10004;Add Tasks: </strong>Quickly jot down tasks as they come to mind.</li>
        <li><strong>&#10004;Remove Tasks:</strong> Easily delete completed or unnecessary tasks.</li>
        <li><strong>&#10004;Sort Tasks:</strong> Arrange your tasks.</li>
      </ul>
      <p className={styles.cta}>Say goodbye to scattered sticky notes.<br/> Start managing your tasks with ease today
        <Link to="/todos" className={styles.link}><strong>{'\u2192'} Todo List </strong></Link>
      </p>
    </div>
  );
}

export default Home;