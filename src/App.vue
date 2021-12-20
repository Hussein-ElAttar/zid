<template>
  <div id="app">
    <div id="header"><Header /></div>
    <div id="content"><router-view /></div>
    <div id="footer"><Footer /></div>
  </div>
</template>
<script>
import Header from "@/components/_layouts/Header.vue";
import Footer from "@/components/_layouts/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
#header,
#content {
  max-width: 1426px;
}

#footer {
  margin-top: 100px;
}
</style>
