<script>
import Header from "@/components/admin/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<template>
  <div id="app">
    <Header v-if="$route.path.includes('/admin')" />
    <div class="container mt-5 d-flex justify-content-center align-items-center">
      <router-view />
    </div>
  </div>
</template>

<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>