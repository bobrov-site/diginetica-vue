<script setup>
import CatalogCard from "./CatalogCard.vue";

const items = [
  {
    id: 1,
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце",
    price: 1500,
    brand: "Бренд",
    oldPrice: 2000,
    discount: 25,
    itemCount: 2,
  },
  {
    id: 2,
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце",
    price: 1500,
    brand: "Бренд",
    oldPrice: 2000,
    discount: 25,
    itemCount: 2,
  },
  {
    id: 3,
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце",
    price: 1500,
    brand: "Бренд",
    oldPrice: 2000,
    discount: 25,
    itemCount: 0,
  },
  {
    id: 4,
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце",
    price: 1500,
    brand: "Бренд",
    oldPrice: 2000,
    discount: 25,
    itemCount: 2,
  },
  {
    id: 5,
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце",
    price: 1500,
    brand: "Бренд",
    oldPrice: 2000,
    discount: 25,
    itemCount: 0,
  },
  {
    id: 6,
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце",
    price: 1500,
    brand: "Бренд",
    oldPrice: 2000,
    discount: 25,
    itemCount: 2,
  },
  {
    id: 7,
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце",
    price: 1500,
    brand: "Бренд",
    oldPrice: 2000,
    discount: 25,
    itemCount: 2,
  },
  {
    id: 8,
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце",
    price: 1500,
    brand: "Бренд",
    oldPrice: 2000,
    discount: 25,
    itemCount: 2,
  },
  {
    id: 9,
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце",
    price: 1500,
    brand: "Бренд",
    oldPrice: 2000,
    discount: 25,
    itemCount: 2,
  },
  {
    id: 10,
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце",
    price: 1500,
    brand: "Бренд",
    oldPrice: 2000,
    discount: 25,
    itemCount: 2,
  },
  {
    id: 11,
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце",
    price: 1500,
    brand: "Бренд",
    oldPrice: 2000,
    discount: 25,
    itemCount: 2,
  },
  {
    id: 12,
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце",
    price: 1500,
    brand: "Бренд",
    oldPrice: 2000,
    discount: 25,
    itemCount: 2,
  },
];
</script>
<template>
  <main class="grid">
    <div class="cards-container">
      <CatalogCard v-for="item in items" :key="item.id" :card="item" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
