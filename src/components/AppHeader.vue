<template>
  <div id="inspire">
    <v-navigation-drawer v-model="drawer" class="hidden-md-and-up" absolute temporary>
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click.stop="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-btn :to="{ name: 'home' }" text x-large>VUE</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          color="primary"
          v-for="(item, i) in menuItems"
          :key="`menuItem${i}`"
          :to="item.route"
          depressed
        >
          <v-icon left v-html="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  computed: {
    menuItems() {
      return [
        {
          icon: 'mdi-eye',
          title: 'Read',
          route: '/books'
        },
        {
          icon: 'mdi-puzzle',
          title: 'Learn words',
          route: '/words'
        },
        {
          icon: 'mdi-account',
          title: 'Profile',
          route: '/profile'
        },
        {
          icon: 'mdi-logout',
          title: 'Logout',
          route: '/logout'
        },
        {
          icon: 'mdi-login',
          title: 'Sign In',
          route: '/signin'
        },
        {
          icon: 'mdi-lock-open-outline',
          title: 'Registration',
          route: '/signup'
        }
      ]
    }
  }
}
</script>

<style></style>
