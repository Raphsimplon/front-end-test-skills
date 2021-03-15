<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs5>
        <h2>Already have account ?</h2>
        <h2>Sign in !</h2>
        <login-vue></login-vue>
      </v-flex>
      <register-vue></register-vue>
    </v-layout>
  </v-container>
</template>

<script>
import LoginVue from "../components/Login.vue";
import RegisterVue from "../components/Register.vue";

export default {
  components: {
    LoginVue,
    RegisterVue
  }
};
</script>

<style>
h2 {
  display:flex;
  justify-content: center;
}
</style>
