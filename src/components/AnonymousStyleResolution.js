/**
 * @file Demonstrates anonymous "styleName" resolution.
 * @see https://github.com/gajus/babel-plugin-react-css-modules#anonymous-styleName-resolution
 */

import React from 'react';
import style from './table.css';

export default () => {
  return <div className={style.table}>
    <div className={style.row}>
      <div className={style.cell}>A01212</div>
      <div className={style.cell}>B0</div>
      <div className={style.cell}>C0</div>
    </div>
  </div>;
};
