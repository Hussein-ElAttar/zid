<template>
  <div class="featured-apps">
    <div class="header">
      <div class="title">اﻟﺘﻄﺒﻴﻘﺎت اﻟﻤﻤﻴﺰة</div>
      <div class="description">
        ﺗﻄﺒﻴﻘﺎت ﺗﻘﺪم ﺣﻠﻮل وﺧﺪﻣﺎت ﻣﻤﻴﺰة ﻧﻮﺻﻲ ﺑﺘﺠﺮﺑﺘﻬﺎ
      </div>
    </div>
    <div class="apps row">
      <div
        v-for="index in 4"
        :key="index"
        class="col-xl-3 col-md-6 d-flex justify-content-center"
      >
        <review-card
          title="قمرة"
          :stars="5"
          author="عمر برهوم"
          comment="نظﺎم اﻟﻮﻟﺎء اﻟﺄﻣﺜﻞ اﻟﺬي ﻳﻤﻜﻨﻚ ﻣﻦ رﻓﻊ ﻣﺒﻴﻌﺎﺗﻚ ﻧﻈﺎم اﻟﻮﻟﺎء اﻟﺄﻣﺜﻞ اﻟﺬي
        ﻳﻤﻜﻨﻚ ﻣﻦ رﻓﻊ ﻣﺒﻴﻌﺎﺗﻚ"
        ></review-card>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewCard from "@/components/ui/ReviewCard";

export default {
  name: "HomeFeaturedApps",
  components: { ReviewCard },
  props: {},
};
</script>

<style lang="scss">
#featured-apps {
  text-align: center;
}
.review-card {
  margin-top: 10px;
  margin-left: 10px;
}
.header {
  .title {
    font-family: Cairo;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -1px;
    margin-bottom: 5px;
  }
  .description {
    font-family: Cairo;
    font-size: 14px;
  }
}
.apps {
  display: flex;
  justify-content: flex-end;
  margin: 40px 82px 105px 40px;
}
</style>
