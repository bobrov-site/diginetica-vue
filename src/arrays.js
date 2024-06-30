const getResult = () => {
  // будет "1,2,34,5,6"
  // Это происходит потому что JavaScript преобразует массивы в строки перед выполнением операции сложения
  // соответственно "1,2,3" и "4,5,6" будут преобразованы в "1,2,34,5,6"
  console.log([1, 2, 3] + [4, 5, 6]);
};

export default getResult;