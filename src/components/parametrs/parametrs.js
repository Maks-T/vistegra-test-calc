import React, { useState } from 'react';
import Parametr from '../parametr/parametr';
import ParametrOptions from '../parametrOptions/parametrOptions';
import ParametrRadios from '../parametrRadios/parametrRadios';
import params from './../../data/getData';
import calculateParams from './calculateParams';
import ParametrSizes from '../parametrSizes/parametrSizes';
import './parametrs.style.css';

const Parametrs = (props) => {
  const { data, config } = params;

  const [valueMaterial, setValueMaterial] = useState('metal');
  const [valueList, setValueList] = useState('data_0');
  const [valuePipe, setValuePipe] = useState('data_12');
  const [valueFrame, setValueFrame] = useState('light');
  const [valueSizes, setValueSizes] = useState({ length: 5, width: 5 });

  const changeValue = (setState) => (e) => {
    setState(e.target.value);
  };

  const calculate = () => {
    return calculateParams(
      data,
      config,
      valueMaterial,
      valueList,
      valuePipe,
      valueFrame,
      valueSizes
    );
  };

  return (
    <div className="parametrs">
      <h3 className="parametrs__title">Исходные данные</h3>

      <Parametr title="Тип покрытия">
        <ParametrRadios
          params={config}
          keySort="type"
          valueSort="material"
          keyValue="key"
          name="coverage-type"
          changeValue={changeValue(setValueMaterial)}
        />

        <ParametrOptions
          params={data}
          keySort="material"
          valueSort={valueMaterial}
          keyValue="id"
          name="coverage-material"
          changeValue={changeValue(setValueList)}
        />
      </Parametr>

      <Parametr title="Марка трубы">
        <ParametrOptions
          params={data}
          keySort="type"
          valueSort="pipe"
          keyValue="id"
          name="pipe-material"
          changeValue={changeValue(setValuePipe)}
        />
      </Parametr>

      <Parametr title="Прочность конструкции">
        <ParametrRadios
          params={config}
          keySort="type"
          valueSort="frame"
          keyValue="key"
          name="frame-type"
          changeValue={changeValue(setValueFrame)}
        />
      </Parametr>

      <Parametr title="Размеры">
        <ParametrSizes
          cfgSizes={config.filter((cfg) => cfg.type === 'size')}
          changeValue={setValueSizes}
        />
      </Parametr>

      <button
        className="btn"
        onClick={() => {
          props.setResult(calculate());
        }}
      >
        Сделать расчет
      </button>
    </div>
  );
};

export default Parametrs;
