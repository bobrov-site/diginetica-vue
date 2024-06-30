const whatInConsole = () => {
  var a = { b: 1 };
  var b = a;
  b.b = 2;
  console.log(a);
  // {b: 2}
  // Это происходит потому что обьекты в JS являются ссылками.
  // После того, как б присвоено а, изменения совершенные с б, так же отразятся и на а
};

export default whatInConsole;
