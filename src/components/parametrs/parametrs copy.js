import React, { useContext, useState } from 'react';
import Parametr from '../parametr/parametr';
import ParametrOptions from '../parametrOptions/parametrOptions';
import ParametrRadios from '../parametrRadios/parametrRadios';
import DataContext from './../../contextData';
import './parametrs.style.css';

const Parametrs = (props) => {
  const paramsData = useContext(DataContext);

  console.log(' paramsData ', paramsData);

  const lists = {};
  const pipes = [];

  paramsData.data.forEach((itemData, index) => {
    if (itemData.type === 'list') {
      itemData.id = `${itemData.type}-${itemData.material}-${index}`;
      itemData.realName = itemData.name;
      itemData.value = itemData.width;

      if (lists.hasOwnProperty(itemData.material)) {
        lists[itemData.material].lists.push(itemData);
      } else {
        lists[itemData.material] = {
          realName: paramsData.config.find(
            (itemConfig) => itemConfig.key === itemData.material
          ).name,
          lists: [itemData],
        };
      }
    }

    if (itemData.type === 'pipe') {
      itemData.id = `${itemData.type}-${index}`;
      itemData.realName = itemData.name;
      itemData.value = itemData.width;

      pipes.push(itemData);
    }
  });
  console.log('pipes ', pipes);
  const frames = {};
  paramsData.config.forEach((itemConfig) => {
    if (itemConfig.type === 'frame') {
      frames[itemConfig.key] = {
        realName: itemConfig.name,
        value: itemConfig.step,
      };
    }
  });

  console.log('frames ', frames);

  const [valueCoverType, setValueCoverType] = useState(Object.keys(lists)[0]);
  const [idList, setIdList] = useState(lists[0]);
  const [idPipe, setIdPipe] = useState(pipes[0]);
  const [idFrame, setIdFrame] = useState(Object.keys(frames)[0]);

  const changeValueCoverType = (e) => {
    setValueCoverType(e.target.id);
    console.log(e.target.id);
  };

  const changeIdList = (e) => {
    setIdList(e.target.id);
    console.log(e.target.id);
  };

  const changeIdPipe = (e) => {
    setIdPipe(e.target.id);
    console.log(e.target.id);
  };

  const changeIdFrame = (e) => {
    setIdFrame(e.target.id);
    console.log(e.target.id);
  };

  console.log(' lists ', lists);

  return (
    <div className="parametrs">
      <h3 className="parametrs__title">Исходные данные</h3>

      <Parametr title="Тип покрытия">
        <ParametrRadios
          keys={lists}
          name="coverage-type"
          changeValue={changeValueCoverType}
        />
        <ParametrOptions
          keys={lists[valueCoverType].lists}
          name="coverage-material"
          changeValue={changeIdList}
        />
      </Parametr>

      <Parametr title="Марка трубы">
        <ParametrOptions
          keys={pipes}
          name="pipe-material"
          changeValue={changeIdPipe}
        />
      </Parametr>

      <Parametr title="Прочность конструкции">
        <ParametrRadios
          keys={frames}
          name="srength-type"
          changeValue={changeIdFrame}
        />
      </Parametr>

      <Parametr title="Размеры">
        <div className="parametr__type-number">
          <label for="plastic">Ширина</label>
          <input type="number" />
        </div>
        <div className="parametr__type-number">
          <label for="plastic">Длина</label>
          <input type="number" />
        </div>
      </Parametr>

      <button className="btn">Сделать расчет</button>
    </div>
  );
};

export default Parametrs;
