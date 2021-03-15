<template>
  <v-app id="page-container" >

    <header-vue id="nav"/>
    <router-view/>

    <footer-vue/>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
  },
  mounted() {
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style lang="scss">
html {
  height: 100%;
  margin-top: 10%;
  position: relative;
}

body {
  height: 100%;
  min-height: 100%;
}

#footer {
  position: relative;
  height: 100px;
  background-color: black;
  color: white;
}

#page-container {
  position: relative;
  min-height: 100vh;
}

h1 {
  display: flex;
  justify-content: center;
}


</style>
