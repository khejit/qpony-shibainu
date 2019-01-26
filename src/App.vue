<template>
  <div id="app" class="container">
    <navbar />
    <router-view />
    <footer-component></footer-component>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import FooterComponent from '@/components/Footer';

export default {
  name: "app",
  components: {
    Navbar,
    FooterComponent
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
