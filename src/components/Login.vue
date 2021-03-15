<template>
<v-layout justify-center>
            <v-flex xs8>
       
        <v-divider></v-divider>
          <v-form @submit.prevent="login()">
          <input model="email" label="Email"/>
          <input model="password" label="Password" type="password"/>
          <button type="submit">Log in</button>
        </v-form>
          
        </v-flex>
        </v-layout>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    /**
     * On assigne à notre component une valeur qui
     * vient directement du store en passant
     * par une computed property
     */
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    login() {
      //On déclenche l'action du store qui permettra de se connecter
      //(on ne peut dispatch que les noms de méthodes existant dans les actions du store)
      this.$store.dispatch("login", {
        username: this.email,
        password: this.password
      });
    },
    logout() {
      
      //on déclenche une action du store pour se déconnecter
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>

</style>
