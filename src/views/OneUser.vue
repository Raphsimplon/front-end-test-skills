<template>
    <v-layout >
        {{user}}
    </v-layout>
</template>

<script>
import { UsersService } from '../services/users';

export default {

  mounted() { 
    let user= new UsersService()
    user
      .findOne(this.$route.params.id)
      .then(data => (this.user= data));
  }
}
</script>

<style>

</style>
