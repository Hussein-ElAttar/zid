<template>
  <div class="home">
    <div class="header">
      <home-headline></home-headline>
      <media-viewer
        media-path="zid-product-animation.gif"
        img-width="845px"
        img-height="550px"
      />
    </div>
    <home-zid-features></home-zid-features>

    <div class="home-featured-apps">
      <home-featured-apps></home-featured-apps>
    </div>
  </div>
</template>

<script>
import MediaViewer from "@/components/_base/MediaViewer";
import HomeFeaturedApps from "@/components/home/HomeFeaturedApps.vue";
import HomeZidFeatures from "@/components/home/HomeZidFeatures.vue";
import HomeHeadline from "@/components/home/HomeHeadline.vue";

export default {
  name: "Home",
  components: { MediaViewer, HomeFeaturedApps, HomeHeadline, HomeZidFeatures },
};
</script>

<style lang="scss" scoped>
.home {
  font-family: Cairo;
}

.header {
  margin-bottom: 250px;
}

.home-featured-apps {
  margin-top: 250px;
  margin-bottom: 120px;
}
</style>
