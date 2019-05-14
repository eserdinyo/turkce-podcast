<template lang="pug">
	.Login
		input(type='text', placeholder='E-posta')
		input(type='password', placeholder='Şifre')
		button Giriş
</template>

<script>
export default {
  data() {
    return {
      fo: 'foo',
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(vm.fo);
    });

    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
  },
};
</script>


<style lang="scss" scoped>
@import "@/style/main.scss";

.Login {
  display: flex;
  width: 30rem;
  margin: 0 auto;
  margin-top: 20rem;
  flex-direction: column;
  background-color: #fff;
  padding: 7rem 4rem;
  border-radius: 3px;

  input {
    margin: 1rem 0;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid $primary-color;
    font-size: 14px;
    outline: none;
    transition: all 0.3s;
  }

  button {
    margin: 0 auto;
    padding: 1rem 5rem;
    border-radius: 3px;
    margin-top: 1rem;
    background-color: $primary-color;
    color: #fff;
    border-radius: 10rem;
  }
}
</style>
