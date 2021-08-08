import React from 'react';

import styles from './styles.js';
import logo from '../../images/logo.png';

export default () => { 
    return (
        <nav style={styles.bar}>
            <div style={styles.container}>
                <a style={styles.brand} alt="logo"> 
                    <img style={styles.img} src={logo}/>
                </a>
            </div>
        </nav>
    )
}