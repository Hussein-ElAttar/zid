<template>
  <div id="footer">
    <div class="icon-container">
      <div class="action-icon">
        <font-awesome-icon :style="{ color: '#8D5DA7' }" icon="arrow-up" />
      </div>
    </div>
    <div>
      <div class="logo">
        <img
          class="logo-image"
          src="@/assets/media/app-logo-white.png"
          alt="image"
        />
      </div>
      <div class="social-links">
        <font-awesome-icon
          :style="{ color: 'white' }"
          :icon="['fab', 'youtube']"
        />
        <font-awesome-icon
          :style="{ color: 'white' }"
          :icon="['fab', 'linkedin-in']"
        />
        <font-awesome-icon
          :style="{ color: 'white' }"
          :icon="['fab', 'instagram']"
        />
        <font-awesome-icon
          :style="{ color: 'white' }"
          :icon="['fab', 'twitter']"
        />
      </div>
    </div>
    <div class="icon-container">
      <div class="action-icon">
        <font-awesome-icon icon="comments" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<style scoped lang="scss">
#footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $zid-purple;
  text-align: center;
  height: 233px;

  .logo-image {
    width: 250px;
    height: auto;
  }

  .icon-container {
    height: 100%;
    display: flex;
    align-items: flex-end;
  }

  .action-icon {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: $zid-yellow;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
}
</style>
