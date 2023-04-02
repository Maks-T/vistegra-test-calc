const calculateParams = (
  data,
  config,
  valueMaterial,
  valueList,
  valuePipe,
  valueFrame,
  valueSizes
) => {
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
    draw: {
      L,
      W,
      Wc,
      Lc,
      countPipeW,
      countPipeL,
      pipeWidth: pipe.width / 1000,
    },
  };
};

export default calculateParams;