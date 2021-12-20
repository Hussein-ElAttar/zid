<template>
  <div id="media-viewer" class="mx-auto">
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
@media (max-width: $breakpoint-lg-down) {
  #media-viewer {
    display: flex;
    justify-content: center;
    width: fit-content;
    position: relative;
    .animation {
      max-width: 85%;
      height: auto;
    }
    .circle {
      position: absolute;
      height: 183px;
      bottom: -50px;
      right: 10px;
      z-index: -1;
    }
    .dot-pattern {
      position: absolute;
      width: 78px;
      height: 85px;
      top: -20px;
      left: 30px;
      z-index: -1;
    }
  }
}

@media (min-width: $breakpoint-lg-up) {
  #media-viewer {
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
      left: -85px;
      z-index: -1;
    }
  }
}

@media (max-width: $breakpoint-sm-down) {
  #media-viewer {
    display: flex;
    justify-content: center;
    width: fit-content;
    position: relative;
    .animation {
      max-width: 80%;
      height: auto;
    }
    .circle {
      position: absolute;
      height: 120px;
      bottom: -20px;
      right: 25px;
      z-index: -1;
    }
    .dot-pattern {
      position: absolute;
      width: 58px;
      height: 60px;
      top: -10px;
      left: 25px;
      z-index: -1;
    }
  }
}
</style>
