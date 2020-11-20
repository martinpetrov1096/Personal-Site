import React, { useState } from 'react';

import global from '../styles/global.module.css';
import styles from '../styles/components/name.module.css';

export default function Name() {
   return (
      <h1 className={styles.name}>Mart<span className={`${global.blueText} ${styles.span}`} >i</span>n Petrov</h1>
   )
}