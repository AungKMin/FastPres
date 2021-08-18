import { Typography } from '@material-ui/core';
import React from 'react';

import styles from './styles.js'

export default () => { 
    return (
        <footer style={styles.bar}>
            <div style={styles.container}>
                <a href="https://github.com/AungKMin/FastPres"><Typography style={styles.item}>Link to GitHub repoistory (the web application and python script)</Typography></a>
            </div>
        </footer>
    )
}