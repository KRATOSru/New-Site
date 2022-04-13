<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary> </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Home page</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-items class="hidden-sm-and-down">
        <v-btn class="ma-1">Link one</v-btn>
        <v-btn>Link one</v-btn>
        <v-btn>Link one</v-btn>
      </v-app-bar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({drawer: null}),
}
</script>
