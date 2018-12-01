/**
 * @file Demonstrates named "styleName" resolution.
 * @see https://github.com/gajus/babel-plugin-react-css-modules#named-styleName-resolution
 */

import React from 'react';
import style from './table.css';

export default () => {
  return <div className={style.table}>
    <div className={style.row}>
      <div className={style.cell}>A1</div>
      <div className={style.cell}>B1</div>
      <div className={style.cell}>C1</div>
    </div>
  </div>;
};
