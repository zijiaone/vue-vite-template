<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
  <router-view />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<style lang="less" scoped>
header {
  max-height: 100vh;
  line-height: 1.5;

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }
}
</style>
