import React from 'react';
import './parametr.style.css';

const Parametr = (props) => (
  <div className="parametr">
    <h4 className="parametr__title">{props.title}</h4>
    {props.children}
  </div>
);

export default Parametr;
