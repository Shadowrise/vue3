<template>
  <v-app id="inspire">
    <v-app-bar app dark color="primary">
      <v-toolbar-title v-text="'VUE2'"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="(item, i) in menuItems"
          :key="`menuItem${i}`"
          :to="item.route"
          icon
        >
          <v-icon left v-html="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  computed: {
    menuItems() {
      return [
        {
          icon: 'mdi-thumb-up',
          title: 'Read',
          route: '/books'
        },
        {
          icon: 'mdi-thumb-up',
          title: 'Learn words',
          route: '/words'
        },
        {
          icon: 'mdi-thumb-up',
          title: 'Profile',
          route: '/profile'
        },
        {
          icon: 'mdi-thumb-up',
          title: 'Logout',
          route: '/logout'
        },
        {
          icon: 'mdi-thumb-up',
          title: 'Sign In',
          route: '/signin'
        },
        {
          icon: 'mdi-thumb-up',
          title: 'Registration',
          route: '/signup'
        }
      ];
    }
  }
};
</script>

<style></style>
