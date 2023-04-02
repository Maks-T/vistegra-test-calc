import React, { useRef, useEffect } from 'react';
import draw from './draw';

import './drawing.style.css';

const Drawing = (props) => {
  const canvasRef = useRef();
  console.log('canvasRef', canvasRef);

  useEffect(() => {
    draw(props.drawData, canvasRef);
  }, [props.drawData]);

  return (
    <div className="drawing">
      <h3 className="drawing__title">Схема каркаса</h3>
      <canvas ref={canvasRef} style={{ border: '1px solid gray' }}></canvas>
    </div>
  );
};

export default Drawing;
