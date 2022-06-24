<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <v-vanta effect="waves" :options="options"></v-vanta>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VVanta from 'vue-vanta'
export default {
  name: 'AppHome',
  components: {VVanta},
  data() {
    return {
      options: {
         mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 1000.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  shininess: 83.00,
  waveHeight: 14.00,
  waveSpeed: 1.60,
  zoom: 1.01
      },
    }
  },
}
</script>

<style scoped></style>
