const exch_rate = 0.91;

function roundTwoDecimals(amount) {
  return Math.round(amount * 100) / 100;
}

const obj = {};
obj.canadianToUs = function (canadian) {
  return roundTwoDecimals(canadian * exch_rate);
};
obj.usToCanadian = function (us) {
  return roundTwoDecimals(us / exch_rate);
};

module.exports = obj;
