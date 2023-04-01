import React, { useState } from 'react';
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
  const [valueList, setValueList] = useState('data_0');
  const [valuePipe, setValuePipe] = useState('data_12');
  const [valueFrame, setValueFrame] = useState('light');
  const [valueSizes, setValueSizes] = useState({ length: 5, width: 5 });

  const changeValue = (setState) => (e) => {
    console.log('valueRadio  ', e.target.value);
    setState(e.target.value);
  };

  const calculate = () => {
    const W = valueSizes.width;
    const L = valueSizes.length;

    const pipe = data.find((item) => item.id === valuePipe);
    const list = data.find((item) => item.id === valueList);
    const frame = config.find((item) => item.key === valueFrame);
    const fixConfig = config.find(
      (item) => item.key === valueMaterial && item.type === 'fix'
    );
    const fixData = data.find((item) => item.type === 'fix');

    const countPipeW = Math.ceil(W / (frame.step + pipe.width / 1000)) + 1;
    const countPipeL = Math.ceil(L / (frame.step + pipe.width / 1000)) + 1;

    const Wc = (W / (countPipeW - 1)).toFixed(2);
    const Lc = (L / (countPipeL - 1)).toFixed(2);

    const longPipe = +(countPipeW * W + countPipeL * L).toFixed(1);
    const pricePipe = (longPipe * pipe.price).toFixed(2);

    const SList = +(W * L).toFixed(1);
    const priceList = (SList * (list.price / list.width)).toFixed(2);

    const countFix = Math.ceil(SList * fixConfig.value);
    const priceFix = (countFix * fixData.price).toFixed(2);

    console.log({
      W,
      L,
      pipe,
      list,
      frame,
      countPipeW,
      countPipeL,
      longPipe,
      SList,
      pricePipe,
      priceList,
      countFix,
      priceFix,
      fixConfig,
      fixData,
    });

    return {
      sum: (+pricePipe + +priceList + +priceFix).toFixed(2),
      cell: `${Wc}м х ${Lc}м`,
      rows: [
        { name: list.name, unit: list.unit, quantity: SList, sum: priceList },
        {
          name: pipe.name,
          unit: pipe.unit,
          quantity: longPipe,
          sum: pricePipe,
        },
        {
          name: fixData.name,
          unit: fixData.unit,
          quantity: countFix,
          sum: priceFix,
        },
      ],
    };
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
