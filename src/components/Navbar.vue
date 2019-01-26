<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to='/' class="navbar-item">
        <img class="navbar__logo" src="@/assets/chiba-clicker-logo.png" alt="Logo">
      </router-link>
      <span
        class="navbar-burger burger"
        @click="burgerActive = !burgerActive"
        :class="{'is-active': burgerActive}"
      >
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
    <div class="navbar-menu" :class="{'is-active': burgerActive}">
      <div class="navbar-end">
        <router-link to="/" exact-active-class="is-active" class="navbar-item">Home</router-link>
        <router-link to="/favourites" exact-active-class="is-active" class="navbar-item">Favourites</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      burgerActive: false
    };
  },
  methods: {
    toggleBurger() {
      this.burgerActive = !this.burgerActive;
    }
  }
};
</script>