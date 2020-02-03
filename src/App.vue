<template>
  <v-app id="app">
    <AppHeader></AppHeader>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>
<style>
</style>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',

  components: { AppHeader, AppFooter },

  data: () => ({
    //
  })
}
</script>
