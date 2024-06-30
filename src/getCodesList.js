const getCodesList = () => {
  const list = [];
  // у каждого элемента с классом _product есть data-id, который понимается как артикул
  // соответственно получим все эти элементы и значение этих атрибутов
  const items = document.querySelectorAll("._product");
  //если элементов нет вернем пустой список, иначе пройдемся по элементам и получим id
  if (items.length !== 0) {
    items.forEach((item) => {
      list.push(item.dataset.id);
    });
  }
  return list;
};

export default getCodesList;
