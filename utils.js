const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    if(b != 0) {
      return a / b;
    } else {
      return 'Error: Division by zero';
    }
  }
};

module.exports = calculator;
