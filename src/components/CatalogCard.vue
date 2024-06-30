<template>
  <div class="card">
    <div class="card-img-container">
      <div class="card-img-hot">
        Хит продаж
        <img src="/fire.svg" alt="fire" />
      </div>
      <div class="card-img-discount">{{ props.card.discount }}%</div>
      <img src="/box.svg" alt="box" width="60px" />
    </div>
    <span class="card-content-label">{{ props.card.brand }}</span>
    <a href="#">
      <h4 class="card-content-title">
        {{ props.card.title }}
      </h4>
    </a>
    <div v-if="props.card.itemCount > 0" class="card-content-price">
      <span class="card-content-price-new">{{ props.card.price }} ₽</span>
      <span class="card-content-price-old">{{ props.card.oldPrice }} ₽</span>
    </div>
    <div class="card-action">
      <button
        v-if="props.card.itemCount > 0"
        class="btn btn-primary btn-inline"
      >
        Купить
      </button>
      <button v-else class="btn btn-secondary btn-block">
        Сообщить о поступлении
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  card: Object,
});
</script>

<style lang="scss" scoped></style>
