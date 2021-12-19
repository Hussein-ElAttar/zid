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

    <div id="home-featured-apps">
      <home-featured-apps></home-featured-apps>
    </div>
    <home-zid-features></home-zid-features>
  </div>
</template>

<script>
import MediaViewer from "@/components/ui/MediaViewer";
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
  text-align: center;
}
.header {
  margin-bottom: 250px;
}
// ====================================================================
#home-featured-apps {
  margin-top: 250px;
  margin-bottom: 120px;
}
</style>
