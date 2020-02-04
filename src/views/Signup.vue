<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Signing Up</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="text"
                :rules="emailRules"
                v-model="email"
                required
              />
              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :rules="passwordRules"
                v-model="password"
                required
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="submit">Sign Up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      email: null,
      password: null,
      emailRules: [v => (!v ? 'Email is required' : true)],
      passwordRules: [v => (!v ? 'Password is required' : true)]
    }
  },
  methods: {
    ...mapMutations(['signUp']),
    submit() {
      if (this.$refs.form.validate()) {
        this.signUp({ email: this.email, password: this.password })
      }
    }
  }
}
</script>

<style></style>
