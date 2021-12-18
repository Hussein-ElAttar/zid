<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>

import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">

// TODO: add this to some kind of config
@import url("https://fonts.googleapis.com/css2?family=Cairo"); 

#app {
  width: 1426px;
  text-align: center;
  margin: auto;
}

</style>
