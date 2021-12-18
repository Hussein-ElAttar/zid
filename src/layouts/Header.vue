<template>
  <nav class="navbar navbar-expand-lg ">
    <ul class="navbar-nav w-100 justify-content-start flex-row-reverse">
      <li class="nav-item">
        <a
          class="nav-link"
          aria-current="page"
        > الرئيسية </a>
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
    <a class="navbar-logo">
      <img
        class="logo-image justify-self-start"
        height="47"
        src="@/assets/app-logo.png"
        alt="image"
      >
    </a>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style scoped>
nav{
  margin-bottom: 62px;
  padding-bottom: 0px;
}
.nav-link{
  color: black;
  font-family: Cairo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
}

.nav-item {
  margin-right: 100px;
}

.logo-image {
  margin-right: 145px;
}
</style>
