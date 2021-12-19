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
      <button class="btn zid-btn-primary">
        <div><img src="@/assets/media/down-arrow.gif" /> تصفح التطبيقات</div>
      </button>
    </div>
  </div>
</template>

<script>
import MediaViewer from "@/components/ui/MediaViewer";

export default {
  name: "HomeZidFeatures",
  components: { MediaViewer },
  props: {},
};
</script>

<style lang="scss" scoped>
@media (min-width: 992px) {
  #zid-features {
    display: flex;
    padding-right: 107px;
    padding-left: 43px;
    gap: 31px;
  }
}
@media (max-width: 991px) {
  #zid-features {
    display: flex;
    padding-right: 10px;
    flex-wrap: wrap;
    gap: 80px;
    justify-content: center;
  }
}
#features-description {
  font-family: Cairo;
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
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: $zid-purple;
    margin-bottom: 20px;
  }
  .description {
    margin-bottom: 34px;
    font-weight: 400;
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
