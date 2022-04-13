<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item-group
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title>Home page</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-items class="hidden-sm-and-down">
        <v-btn
          class="ml-1"
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <v-icon left>
            {{ link.icon }}
          </v-icon>
          {{ link.title }}
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
  name: 'App',
  data() {
    return {
      drawer: false,
      links: [
        {title: 'Sertificates',icon: 'mdi-account-school', url: '/sertificates'},
        {title: 'Works', icon: 'mdi-human-dolly', url: '/works'},
        {title: 'Apple', icon: 'mdi-apple', url: '/apple'},
        {title: 'Nest', icon: 'mdi-web', url: '/nest'},
        {title: 'Vue', icon: 'mdi-web', url: '/vue'},
        {title: 'About me', icon: 'mdi-account', url: '/portfolio'}
      ]
    }
  }
}
</script>
