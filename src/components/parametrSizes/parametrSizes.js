import React, { useState } from 'react';

import './parametrSizes.style.css';

const ParametrSizes = (props) => {
  const [valuesRange, setValuesRange] = useState(
    props.cfgSizes.reduce((acc, cfgSize) => {
      acc[cfgSize.key] = cfgSize.min;
      return acc;
    }, {})
  );

  return (
    <div className="parametr__sizes">
      {props.cfgSizes.map((cfgSize) => (
        <div className="parametr__type-range" key={'size-' + cfgSize.key}>
          <label htmlFor={`size-${cfgSize.key}`}>
            {`${cfgSize.name} - ${valuesRange[cfgSize.key]} м`}
          </label>
          <input
            type="range"
            id={'size-' + cfgSize.key}
            min={cfgSize.min}
            max={cfgSize.max}
            defaultValue={cfgSize.min}
            step={cfgSize.step}
            onChange={(e) => {
              const values = { ...valuesRange };
              values[cfgSize.key] = e.target.value;

              setValuesRange(values);
              props.changeValue(values);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ParametrSizes;
