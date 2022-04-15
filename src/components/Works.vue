<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <template v-slot:prev="{on, attrs}">
              <v-btn color="success" v-bind="attrs" v-on="on"
                >Previous slide</v-btn
              >
            </template>
            <template v-slot:next="{on, attrs}">
              <v-btn color="info" v-bind="attrs" v-on="on">Next slide</v-btn>
            </template>
            <v-carousel-item v-for="ad in ads" :key="ad.id" :src="ad.imageSrc">
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <!-- можно без row -->
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad in ads" :key="ad.id">
          <v-card class="mx-auto mt-2 elevation-10" max-width="400">
            <v-img height="200px" :src="ad.imageSrc"> </v-img>

            <v-card-subtitle class="mb-2"
              ><h2>{{ ad.title }}</h2>
            </v-card-subtitle>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AppWorks',
  data() {
    return {
      ads: [
        {
          title: 'First site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg',
          id: '1',
        },

        {
          title: 'Second site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg',
          id: '2',
        },
        {
          title: 'Third site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2018/05/28/09/32/technology-3435575__340.jpg',
          id: '3',
        },
          {
          title: 'Forth site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835__340.jpg',
          id: '4',
        },
          {
          title: 'Fifth site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2019/07/07/06/34/network-4321833__340.jpg',
          id: '5',
        },
          {
          title: 'Sixth site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2016/05/14/11/10/board-1391679__340.jpg',
          id: '6',
        },
      ],
    }
  },
}
</script>

<style></style>
