<template>
  <div class="container">
    <p>Hello {{ name }}!</p>
    <NuxtLink to="/about">Go to /about</NuxtLink>
    <p>
      <button @click="showMiniToastr">Notif me!</button>
    </p>
  </div>
</template>
<script>
let miniToastr;
if (process.client) {
  miniToastr = require("mini-toastr").default;
}
export default {
  // layout: "blog",
  asyncData() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({ name: "world" });
      }, 1000);
    });
  },
  mounted() {
    miniToastr.init();
  },
  methods: {
    showMiniToastr() {
      miniToastr.error("Oops...Something went wrong");
    }
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