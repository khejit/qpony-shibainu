<template>
  <div id="app" class="container">
    <navbar />
    <router-view />
    <footer-component></footer-component>
  </div>
</template>

<script>
import Test from '@/components/Test';
import Navbar from '@/components/Navbar';
import FooterComponent from '@/components/Footer';

export default {
  name: "app",
  components: {
    Test,
    Navbar,
    FooterComponent
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
