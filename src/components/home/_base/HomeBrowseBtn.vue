<template>
  <button class="btn zid-btn-primary">
    <div><img src="@/assets/media/down-arrow.gif" /> {{ text }}</div>
  </button>
</template>

<script>
export default {
  name: "HomeBrowseBtn",
  components: {},
  props: {
    text: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
.zid-btn-primary {
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 11px;
      height: 20px;
      width: auto;
      transform: rotate(90deg);
    }
  }
}
</style>
