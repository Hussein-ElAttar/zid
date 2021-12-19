<template>
  <div id="app">
    <div id="header"><Header /></div>
    <div id="content"><router-view /></div>
    <div id="footer"><Footer /></div>
  </div>
</template>
<script>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
// TODO: add this to some kind of config
@import url("https://fonts.googleapis.com/css2?family=Cairo");

#header,
#content {
  max-width: 1426px;
  margin: auto;
}

#footer {
  margin-top: 100px;
}
</style>
