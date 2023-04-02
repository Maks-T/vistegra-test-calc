import data from './data.json';
import config from './config.json';

data = data.map((item, i) => {
  item.id = `data_${i}`;
  return item;
});
config = config.map((item, i) => {
  item.id = `config_${i}`;
  return item;
});

export default { data, config };
