<template>
  <div id="zid-features">
    <div>
      <media-viewer
        media-path="zid-app-animation.gif"
        img-width="700px"
        img-height="441px"
      />
    </div>
    <div id="features-description">
      <div class="heading">كل ما تحتاجه لنمو متجرك فى مكان واحد</div>
      <div class="description">
        مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات وحلول سوق
        التطبيقات لنمو متجرك ومضاعفة أرباحك
      </div>

      <div class="feature-list">
        <div class="feature">
          <span><img src="@/assets/media/easy-management.png" /></span>
          <p>سهولة ادارة و تفعيل تطبيقاتك من نفس لوحة تحكم متجرك</p>
        </div>
        <div class="feature">
          <span><img src="@/assets/media/customer-support.png" /></span>
          <p>دعم فني و تقني متكامل متوفر على مدار الساعة</p>
        </div>
        <div class="feature">
          <span><img src="@/assets/media/competitive prices.png" /></span>
          <p>أسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة</p>
        </div>
      </div>
      <home-browse-btn text="تصفح التطبيقات"></home-browse-btn>
    </div>
  </div>
</template>

<script>
import MediaViewer from "@/components/_base/MediaViewer";
import HomeBrowseBtn from "@/components/home//_base/HomeBrowseBtn";

export default {
  name: "HomeZidFeatures",
  components: { MediaViewer, HomeBrowseBtn },
  props: {},
};
</script>

<style lang="scss" scoped>
@media (min-width: $breakpoint-lg-up) {
  #zid-features {
    display: flex;
    padding-right: 107px;
    padding-left: 43px;
    gap: 31px;
  }
}
@media (max-width: $breakpoint-lg-down) {
  #zid-features {
    display: flex;
    padding-right: 10px;
    flex-wrap: wrap;
    gap: 80px;
    justify-content: center;
  }
}

#features-description {
  text-align: end;

  .feature {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 20px;
    img {
      height: 50px;
    }
  }
  .heading {
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: $zid-purple;
    margin-bottom: 20px;
  }
  .description {
    margin-bottom: 34px;
    text-align: end;
  }
  .feature-list {
    display: flex;
    flex-direction: column;
    span {
      display: flex;
      align-items: center;
    }
    p {
      margin-top: 0;
      display: flex;
      align-items: center;
      margin-bottom: 0;
      font-weight: 600;
    }
  }
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
