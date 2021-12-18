<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            class="nav-link active"
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
      <a class="navbar-brand">
        <img
          class="logo-image justify-self-start"
          height="47"
          src="@/assets/app-logo.png"
          alt="image"
        >
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>
<style scoped>
</style>
