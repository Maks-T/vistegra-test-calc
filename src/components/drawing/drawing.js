import React, { useRef, useEffect } from 'react';
import draw from './draw';
import './drawing.style.css';

const Drawing = (props) => {
  const canvasRef = useRef();
  const { drawData } = props;

  useEffect(() => {
    draw(drawData, canvasRef);
  }, [drawData]);

  return (
    <div className="drawing">
      <h3 className="drawing__title">Схема каркаса</h3>
      <div className="drawing__body">
        <div className="drawing__body-top">
          <p>L = {drawData.L}</p>
        </div>
        <div className="drawing__body-bottom">
          <p>W = {drawData.W}</p>
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Drawing;
