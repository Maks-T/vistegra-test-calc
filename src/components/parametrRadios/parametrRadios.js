import React from 'react';
import ParametrRadio from '../parametrRadio/parametrRadio';
import './parametrRadios.style.css';

const ParametrRadios = (props) => (
  <div className="parametr__type-radios">
    {props.params
      .filter((param) => param[props.keySort] === props.valueSort)
      .map((param, i) => (
        <ParametrRadio
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

export default ParametrRadios;
