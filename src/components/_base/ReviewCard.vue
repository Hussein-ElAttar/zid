<template>
  <div class="review-card">
    <!-- Avatar -->
    <div class="card-avatar">
      <img src="@/assets/media/review-avatar-placeholder.png" />
    </div>

    <div class="card-content">
      <!-- title & stars -->
      <div class="title-stars-container">
        <div class="title">{{ title }}</div>
        <div class="stars">
          <div strong>{{ stars }}</div>
          <img src="@/assets/media/star-yellow.png" />
        </div>
      </div>

      <!-- Author -->
      <div class="author">
        تطوير : <span>{{ author }}</span>
      </div>

      <!-- Comment -->
      <div class="comment">
        {{ comment }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCard",
  props: {
    title: { type: String, default: "" },
    stars: { type: Number, default: 5 },
    author: { type: String, default: "" },
    comment: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: $breakpoint-lg-up) {
  .review-card {
    width: 295px;
    height: 170px;
  }
}

.review-card {
  border-radius: 10px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: row-reverse;
  padding-top: 30px;
  padding-left: 22px;
  text-align: end;
}

.author {
  font-size: 10px;
  line-height: 24px;
  span {
    color: rgba(0, 0, 0, 0.56);
  }
}

.card-content {
  margin-right: 10px;

  .title-stars-container {
    display: flex;
    flex-direction: row-reverse;
    font-size: 10px;

    .title {
      font-weight: 600;
      color: $zid-purple;
      margin-left: 21px;
    }
    .stars {
      display: flex;
      color: #45a787;
      font-weight: 600;
      font-size: 14px;

      div {
        margin-top: 2px;
        margin-right: 3px;
      }
      img {
        height: auto;
        width: 12px;
        object-fit: contain;
      }
    }
  }

  .comment {
    font-weight: 400;
    font-size: 10px;
    line-height: 24px;
    width: 196px;
    margin-top: 20px;
  }
}

.card-avatar {
  img {
    border-radius: 10px;
    height: 45px;
    width: auto;
    margin-right: 22px;
  }
}
</style>
