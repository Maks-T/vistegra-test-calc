import React from 'react';
import ParametrOption from '../parametrOption/parametrOption';
import './parametrOptions.style.css';

const ParametrOptions = (props) => (
  <div className="parametr__options">
    {props.params
      .filter((param) => param[props.keySort] === props.valueSort)
      .map((param, i) => (
        <ParametrOption
          key={param.id}
          name={props.name}
          id={param.id}
          realName={param.name}
          value={param[props.keyValue]}
          checked={i === 0 ? true : false}
          changeValue={props.changeValue}
        />
      ))}
  </div>
);

export default ParametrOptions;
