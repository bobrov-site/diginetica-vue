const getChartsList = () => {
  const list = [];
  const items = document.querySelectorAll(".tab-pane-product-parameter-item");
  if (items.length !== 0) {
    items.forEach((item) => {
      const attribute = {};
      const children = item.children;
      const name = children[0].textContent;
      const value = children[1].textContent;
      attribute.name = name;
      attribute.value = value;
      list.push(attribute);
    });
  }
  return list;
};

export default getChartsList;
