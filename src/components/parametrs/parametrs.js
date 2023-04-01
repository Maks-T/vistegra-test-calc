import React, { useContext, useState } from 'react';
import Parametr from '../parametr/parametr';
import ParametrOptions from '../parametrOptions/parametrOptions';
import ParametrRadios from '../parametrRadios/parametrRadios';

import data from './../../data/data.json';
import config from './../../data/config.json';
import './parametrs.style.css';
import ParametrSizes from '../parametrSizes/parametrSizes';

const Parametrs = (props) => {
  data = data.map((item, i) => {
    item.id = `data_${i}`;
    return item;
  });
  config = config.map((item, i) => {
    item.id = `config_${i}`;
    return item;
  });

  console.log('data', data);
  console.log('config', config);

  const [valueMaterial, setValueMaterial] = useState('metal');
  const [valueList, setValueList] = useState();
  const [valuePipe, setValuePipe] = useState();
  const [valueFrame, setValueFrame] = useState();
  const [valueSizes, setValueSizes] = useState({});

  const changeValue = (setState) => (e) => {
    console.log('valueRadio  ', e.target.value);
    setState(e.target.value);
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

      <button className="btn">Сделать расчет</button>
    </div>
  );
};

export default Parametrs;
