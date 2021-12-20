<template>
  <div class="headline">
    <div class="title">ﻃﻮر ﻣﺘﺠﺮك ووﺳﻊ آﻓﺎق ﺗﺠﺎرﺗﻚ ﻣﻊ ﺳﻮق ﺗﻄﺒﻴﻘﺎت زد</div>
    <div class="description mx-auto">
      في نمو أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي طور تجارتك من خلال
      تطبيقات وحلول سوق تطبيقات زد التي تساعدك
    </div>
    <home-browse-btn text="تصفح التطبيقات"></home-browse-btn>
  </div>
</template>

<script>
import HomeBrowseBtn from "@/components/home//_base/HomeBrowseBtn";

export default {
  name: "HomeHeadline",
  components: { HomeBrowseBtn },
  props: {},
};
</script>

<style lang="scss" scoped>
.headline {
  text-align: center;
}
.title {
  font-weight: bold;
  font-size: 36px;
  line-height: 64px;
  margin-bottom: 20px;
  color: $zid-purple;
}

.description {
  font-size: 18px;
  line-height: 34px;
  text-align: center;
  margin-bottom: 40px;
  max-width: 512px;
}
</style>
