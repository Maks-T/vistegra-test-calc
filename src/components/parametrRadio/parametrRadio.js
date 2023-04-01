import React from 'react';
import './parametrRadio.style.css';

const ParametrRadio = (props) => {
  const { id, name, value, checked, changeValue, realName } = props;

  return (
    <div className="parametr__type-radio">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={checked}
        onChange={changeValue}
      />

      <label htmlFor={id}>{realName}</label>
    </div>
  );
};

export default ParametrRadio;
