<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a
        href="https://vite.dev/"
        rel="noopener"
        target="_blank">
        Vite
      </a>
      +
      <a
        href="https://vuejs.org/"
        rel="noopener"
        target="_blank">
        Vue 3
      </a>
      . What's next?
    </h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<style scoped>
h1 {
  position: relative;
  top: -10px;
  font-size: 2.6rem;
  font-weight: 500;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

a,
.green {
  padding: 3px;
  color: hsl(160deg 100% 37% / 100%);
  text-decoration: none;
  transition: 0.4s;
}
</style>
