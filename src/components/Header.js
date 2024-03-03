import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}> 
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/todos">Todo List</Link>
                        </li>
                    </ul>
                </nav>
           </div>
        </header>
    );
}

export default Header;