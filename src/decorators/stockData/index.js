const baseStock = {
  value: '',
  time: '',
  name: '',
};

const stockDecorator = (base = baseStock, payload) => ({
  ...base,
  value: payload[1] || '',
  name: payload[0] || '',
  time: new Date() / 1,
});

export default (base = undefined, payload = {}) => {
  const returnPayload = {};
  payload.map((stock, i) => { //eslint-disable-line
    returnPayload[stock[0] || 'default'] = { ...stockDecorator(undefined, stock) };
  });
  return returnPayload;
};
