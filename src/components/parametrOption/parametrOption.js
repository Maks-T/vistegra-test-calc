import React from 'react';
import './parametrOption.style.css';

const ParametrOption = (props) => (
  <div className="parametr__option-radio">
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      defaultChecked={props.checked}
      onChange={props.changeValue}
      className="parametr__option-radio-input"
    />

    <label htmlFor={props.id} className="parametr__option-radio-label">
      {props.realName}
    </label>
  </div>
);

export default ParametrOption;
