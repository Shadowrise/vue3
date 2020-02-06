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
          v-for="(item, i) in menuRouteItems"
          :key="`menuRouteItem${i}`"
          :to="item.route"
          depressed
        >
          <v-icon left v-html="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn
          color="primary"
          v-for="(item, i) in menuBtnItems"
          :key="`menuBtnItem${i}`"
          @click="dialogShow"
          depressed
        >
          <v-icon left v-html="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Logout confirmation</v-card-title>
        <v-card-text>Are you sure you want to logout?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialogResult(true)">Yes</v-btn>
          <v-btn color="green darken-1" text @click="dialogResult(false)">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    drawer: false,
    dialog: false
  }),
  computed: {
    ...mapGetters({
      error: 'getError',
      processing: 'getProcessing',
      isUserAuthenticated: 'isUserAuthenticated'
    }),
    menuItems() {
      return this.isUserAuthenticated
        ? [
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
              click: 'signOut'
            }
          ]
        : [
            {
              icon: 'mdi-login',
              title: 'Sign In',
              route: '/login'
            },
            {
              icon: 'mdi-lock-open-outline',
              title: 'Registration',
              route: '/signup'
            }
          ]
    },
    menuRouteItems() {
      return this.menuItems.filter(i => i.route)
    },
    menuBtnItems() {
      return this.menuItems.filter(i => i.click)
    }
  },
  methods: {
    ...mapActions(['signOut']),
    dialogShow() {
      this.dialog = true
    },
    dialogResult(res) {
      this.dialog = false
      if (res) {
        this.signOut()
      }
    }
  },
  watch: {
    isUserAuthenticated(v) {
      if (!v) {
        this.$router.push({ name: 'login' })
      }
    }
  }
}
</script>

<style></style>
