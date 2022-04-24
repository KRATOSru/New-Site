<template>
  <div>
    <v-container fluid>
      <v-layout>
        <v-flex xs12>
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <template v-slot:prev="{on, attrs}">
              <v-btn color="success" v-bind="attrs" v-on="on"
                >Предыдущий</v-btn
              >
            </template>
            <template v-slot:next="{on, attrs}">
              <v-btn color="info" v-bind="attrs" v-on="on">Следующий</v-btn>
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
            'https://github.com/vladimirKartyshov/Resume-Page/blob/master/public/image/Screenshot%20(10)-min.png?raw=true',
          id: '1',
        },

        {
          title: 'Second site',
          imageSrc:
            'https://github.com/vladimirKartyshov/Resume-Page/blob/master/public/image/Screenshot%20(4)-min.png?raw=true',
          id: '2',
        },
        {
          title: 'Third site',
          imageSrc:
            'https://github.com/vladimirKartyshov/Resume-Page/blob/master/public/image/Screenshot%20(12)-min.png?raw=true',
          id: '3',
        },
          {
          title: 'Forth site',
          imageSrc:
            'https://github.com/vladimirKartyshov/Resume-Page/blob/master/public/image/Screenshot%20(9)-min.png?raw=true',
          id: '4',
        },
          {
          title: 'Fifth site',
          imageSrc:
            'https://github.com/vladimirKartyshov/Resume-Page/blob/master/public/image/Screenshot%20(8)-min.png?raw=true',
          id: '5',
        },
          {
          title: 'Sixth site',
          imageSrc:
            'https://github.com/vladimirKartyshov/Resume-Page/blob/master/public/image/Screenshot%20(6)-min.png?raw=true',
          id: '6',
        },
      ],
    }
  },
}
</script>

<style></style>
