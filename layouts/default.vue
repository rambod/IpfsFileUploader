<template>
  <v-app dark>
    <v-app-bar
      width="50%"
      class="d-flex justify-center mb-6"
      fixed
      app
      dense
      shaped
      style="margin-left: 25%"
    >
      <v-col>
      <v-btn icon color="cyan darken-1" to="./"  >
          <v-icon>mdi-upload</v-icon>
      </v-btn>
      <v-btn icon color="cyan darken-1" to="./info">
        <v-icon >mdi-information</v-icon>
      </v-btn>
      </v-col>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
