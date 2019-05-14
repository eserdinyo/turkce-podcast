<template>
  <div class="Header">
    <div class="container">
      <router-link class="Header__logo" to="/">
        Turkce
        <br>Podcast
      </router-link>
      <ul class="Header__nav">
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
 
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

.container {
  display: flex;
  align-items: center;
  height: 8rem;
  margin: 0 auto;

  @include res(big) {
    width: 120rem;
    margin: 0 auto;
  }
}

.Header {
  background-color: $bg-podcast;
  color: #fff;
  padding: 0 2rem;
  @include res(tab) {
  }
  &__logo {
    margin-right: auto;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  &__nav {
    display: flex;
    li {
      margin-right: 10px;
    }
  }
}
</style>