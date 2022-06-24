<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <v-vanta effect="waves" :options="options"></v-vanta>
        <h1 class="nest">Some sertificates</h1>
        <v-btn class="success ml-5 mb-5 mt-5" @click="show = !show"
          >Описание/Скрыть</v-btn
        >
        <transition name="anm">
          <h3 class="discript" mt-5 v-if="show">
            Некоторые сертификаты об оканчании курсов, оформлено в landing page.
            <!-- <v-btn class="success ml-12">Смотреть сайт</v-btn> -->
          </h3>
          <v-btn
            class="success ml-12"
            target="_blank"
            href="https://sertificates-1b388.web.app/"
            >Смотреть сайт</v-btn
          >
        </transition>
        <v-btn
          class="success ml-5 mb-5 mt-5"
          target="_blank"
          href="https://main-page-df26b.web.app/"
          >Бывший сайт</v-btn
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VVanta from 'vue-vanta'
export default {
  name: 'AppSertificates',
   components: {VVanta},
  data() {
    return {
      show: false,
      options: {
        mouseControls: true,
        touchControls: true,
        color: 0x53552,
        minHeight: 800.0,
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
