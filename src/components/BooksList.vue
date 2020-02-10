<template>
  <v-container>
    <v-layout row wrap>
      <v-flex v-for="book in books" :key="book.id" xs12 sm10 md8 offset-sm-1 offset-md-2></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
</style>