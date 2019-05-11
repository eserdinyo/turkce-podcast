<template>
  <div class="Header">
    <div class="container">
      <router-link class="Header__logo" to='/'>
        Turkce
        <br>Podcast
      </router-link>
      <ul class="Header__nav">
        <li>Home</li>
        <li>News</li>
        <li>Sport</li>
        <li>Weather</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

.container {
  width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 8rem;
}

.Header {
  background-color: $bg-podcast;
  color: #fff;
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