<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <v-vanta effect="waves" :options="options"></v-vanta>
        <h1 class="nest">About page</h1>
        <v-btn class="success ml-5 mb-5 mt-5" @click="show = !show"
          >Описание/Скрыть</v-btn
        >
        <transition name="anm">
          <h3 class="discript" mt-5 v-if="show">
            Landing page написан на популярном в настоящее время css фреймверке
            tailwindcss.
            <!-- <v-btn class="success ml-12">Смотреть сайт</v-btn> -->
          </h3>
          <v-btn
            class="success ml-12"
            target="_blank"
            href="https://tailwindportfolio-7a0d1.web.app/"
            >Смотреть сайт</v-btn
          >
        </transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VVanta from 'vue-vanta'
export default {
  name: 'AppPortfolio',
  components: {VVanta},
  data() {
    return {
      show: false,
       options: {
        mouseControls: true,
        touchControls: true,
        color: 0x53552,
        minHeight: 1000.00,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
      },
    }
  },
}
</script>

<style scoped>
.nest {
  text-align: center;
  margin-top: 50px;
}
.discript {
  color: floralwhite;
}
.anm-enter {
  opacity: 0;
}
.anm-enter-active {
  transition: opacity 8s;
}
/* .anm-enter-to {
}

.anm-leave {
} */
.anm-leave-active {
  animation: 3s anm-slide forwards;
  transition: opacity 1s;
}
.anm-leave-to {
  opacity: 0;
}

@keyframes anm-slide {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-100px);
  }
}
</style>
