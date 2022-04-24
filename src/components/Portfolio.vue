<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h1 class="nest">About page</h1>
        <v-btn class="success ml-5 mb-5 mt-5" @click="show = !show"
          >Описание/Скрыть</v-btn
        >
        <transition name="anm">
          <p class="mt-5" v-if="show">
            Landing page написан на популярном в настоящее время фреймверке tailwindcss.
             <!-- <v-btn class="success ml-12">Смотреть сайт</v-btn> -->
          </p>
          <v-btn class="success ml-12">Смотреть сайт</v-btn>
        </transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'AppPortfolio',
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style scoped>
.nest {
  text-align: center;
  margin-top: 50px;
}
.anm-enter {
  opacity: 0;
}
.anm-enter-active {
  transition: opacity 1s;
}
/* .anm-enter-to {
}

.anm-leave {
} */
.anm-leave-active {
  animation: 1s anm-slide forwards;
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
