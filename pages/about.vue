<template>
  <div class="container">
    <p>Hi from {{ name }}</p>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  asyncData({ req }) {
    return {
      name: req ? "server" : "client"
    };
  }
};
</script>
<style scoped>
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>