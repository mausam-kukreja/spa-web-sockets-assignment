const baseStock = {
  value: null,
  time: null,
  name: '',
};

const roundTo = n => {
  let fln = parseFloat((n * 100).toFixed(11));
  fln = (Math.round(fln) / 100).toFixed(2);
  return fln;
};

const stockDecorator = (base = baseStock, payload) => ({
  ...base,
  value: roundTo(payload[1]) || null,
  name: (payload[0] && payload[0].toUpperCase()) || '',
  time: new Date().getTime(),
});

export default (base = undefined, payload = {}) => {
  const returnPayload = {};
  payload.map((stock, i) => { //eslint-disable-line
    const stockName = stock[0] || 'default';
    returnPayload[stockName] = { ...stockDecorator(undefined, stock) };
  });
  return returnPayload;
};
