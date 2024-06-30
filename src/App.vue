<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppSidebar from "./components/AppSidebar.vue";
import CatalogGrid from "./components/CatalogGrid.vue";
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <AppHeader />
      </div>
      <div class="row content">
        <AppSidebar />
        <CatalogGrid />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
