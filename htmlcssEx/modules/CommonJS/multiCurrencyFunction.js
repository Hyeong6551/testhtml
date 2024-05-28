const exch_rate = 0.91;
function roundTwoDecimals(amount) {
  return Math.round(amount * 100) / 100;
}

const candianToUs = function (canadian) {
  return roundTwoDecimals(canadian * exch_rate);
};

function usToCanadian(us) {
  return roundTwoDecimals(us / exch_rate);
}

exports.candianToUs = candianToUs;
exports.usToCanadian = usToCanadian;
