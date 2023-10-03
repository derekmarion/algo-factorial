function factorial(num) {
  result = 1;
  for (i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

module.exports = factorial;
