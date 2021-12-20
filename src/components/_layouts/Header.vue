<template>
  <nav class="navbar navbar-light navbar-expand-lg">
    <button
      class="navbar-toggler ms-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav w-100">
        <li class="nav-item">
          <a class="nav-link" aria-current="page"> الرئيسية </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">التصنيفات</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">التطبيقات</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">طور تطبيق</a>
        </li>
      </ul>
    </div>
    <a class="navbar-logo">
      <img
        class="logo-image justify-self-start"
        height="47"
        src="@/assets/media/app-logo-purple.png"
        alt="image"
      />
    </a>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style lang="scss" scoped>
nav {
  margin-bottom: 62px;
  padding-bottom: 0px;
  font-family: Cairo;
}
@media (min-width: $breakpoint-lg-up) {
  .navbar-nav {
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
}
.nav-link {
  color: black;
  line-height: 30px;
}

.nav-item {
  margin-right: 100px;
}

.logo-image {
  margin-right: 145px;
}
@media (max-width: $breakpoint-lg-up) {
  .logo-image {
    margin-right: 25px;
  }
}
</style>
