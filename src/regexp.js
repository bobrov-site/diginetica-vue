const getRegexp = () => {
  const regexp = /^-?\d+(\.\d{1,3})?$/;
  const number = 1.234;
  const number2 = 1.23456;
  const number3 = 1.2;
  console.log(regexp.test(number)); // true
  console.log(regexp.test(number2)); // false
  console.log(regexp.test(number3)); // true
};

export default getRegexp;
