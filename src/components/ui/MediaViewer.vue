<template>
  <div id="animator" class="mx-auto">
    <img class="dot-pattern" src="@/assets/media/dot-pattern.png" />
    <img
      class="animation"
      :src="require('@/assets/media/' + mediaPath)"
      :style="animationStyle"
      alt="Loading ..."
    />
    <img class="circle" src="@/assets/media/circle.png" />
  </div>
</template>

<script>
const DEFAULT_MEDIA_PATH = "app-logo.png";
const DEFAULT_HEIGHT = "500px";
const DEFAULT_WIDTH = "500px";

export default {
  name: "MediaViewer",
  components: {},
  props: {
    mediaPath: { type: String, default: DEFAULT_MEDIA_PATH },
    imgHeight: { type: String, default: DEFAULT_HEIGHT },
    imgWidth: { type: String, default: DEFAULT_WIDTH },
  },
  computed: {
    animationStyle() {
      return {
        height: this.imgHeight,
        width: this.imgWidth,
        "object-fit": "cover",
        "border-radius": "40px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 992px) {
  #animator {
    width: fit-content;
    position: relative;
    .circle {
      position: absolute;
      height: 367px;
      bottom: -75px;
      right: -75px;
      z-index: -1;
    }
    .dot-pattern {
      position: absolute;
      width: 176px;
      height: 191px;
      top: -45px;
      left: -75px;
      z-index: -1;
    }
  }
}
</style>
