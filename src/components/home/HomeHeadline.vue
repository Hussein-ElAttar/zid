<template>
  <div class="headline">
    <div id="title">ﻃﻮر ﻣﺘﺠﺮك ووﺳﻊ آﻓﺎق ﺗﺠﺎرﺗﻚ ﻣﻊ ﺳﻮق ﺗﻄﺒﻴﻘﺎت زد</div>
    <div id="description" class="mx-auto">
      في نمو أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي طور تجارتك من خلال
      تطبيقات وحلول سوق تطبيقات زد التي تساعدك
    </div>
    <button class="btn zid-btn-primary">
      <div><img src="@/assets/media/down-arrow.gif" /> تصفح التطبيقات</div>
    </button>
  </div>
</template>

<script>
export default {
  name: "HomeHeadline",
  components: {},
  props: {},
};
</script>

<style lang="scss" scoped>
#title {
  font-family: Cairo;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 64px;
  margin-bottom: 20px;
  color: $zid-purple;
}

#description {
  font-family: Cairo;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 34px;
  text-align: center;
  margin-bottom: 40px;
  max-width: 512px;
}

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
