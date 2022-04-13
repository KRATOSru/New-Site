<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="'About me'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Home page</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-items class="hidden-sm-and-down">
        <v-btn class="ml-1">
          <v-icon left>mdi-account-school</v-icon>
          Sertificates
        </v-btn>
        <v-btn class="ml-1">
          <v-icon left>mdi-human-dolly</v-icon>
          Works
        </v-btn>
        <v-btn class="ml-1">
          <v-icon left>mdi-web</v-icon>
          Vue
        </v-btn>
        <v-btn class="ml-1">
          <v-icon left>mdi-apple</v-icon>
          Apple
        </v-btn>
        <v-btn class="ml-1">
          <v-icon left>mdi-account</v-icon>
          About me
        </v-btn>
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
