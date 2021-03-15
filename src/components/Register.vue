<template>
  <v-layout justify-center>
    <v-flex xs7>
      <h2>Join us now!</h2>
      <h2>Sign up !</h2>
      <v-divider></v-divider>
      <v-form @submit.prevent="register()">
        <input hold="username" name="username" label="Username" v-model="user.username">
        <input name="email" label="Email" v-model="user.email">
        <input name="name" label="Name" v-model="user.name">
        <input name="surname" label="Surname" v-model="user.Surname">
        <input type="password" name="password" label="Password" v-model="user.password">
        <input type="password" name="password" label="Repeat Password" v-model="repeatPass">
        <button type="submit" color="success">Sign in</button>
      </v-form>
    </v-flex>
    {{message}}

  </v-layout>

</template>

<script>
export default {
  data() {
    return {
      alert: false,
      user: {
        email: "",
        username: "",
        name: "",
        Surname: "",
        password: ""
      },
      message: "",
      repeatPass: ""
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", this.user)
        .then(() => (this.message = "You have been registered"))
        .catch(errors => (this.message = errors));
    }
  }
};
</script>

<style>
</style>
