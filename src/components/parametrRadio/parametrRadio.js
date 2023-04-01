import React from 'react';
import './parametrRadio.style.css';

const ParametrRadio = (props) => (
  <div className="parametr__type-radio">
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      defaultChecked={props.checked}
      onChange={props.changeValue}
    />

    <label htmlFor={props.id}>{props.realName}</label>
  </div>
);

export default ParametrRadio;
