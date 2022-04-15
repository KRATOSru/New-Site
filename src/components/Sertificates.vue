<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs6 sm4 md3 v-for="ad in ads" :key="ad.id">
        <v-card class="mx-auto mt-2 elevation-10" max-width="400">
          <v-img height="200px" :src="ad.imageSrc"> </v-img>

          <v-card-subtitle class="mb-2"
            ><h2>{{ ad.title }}</h2>
          </v-card-subtitle>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'AppSertificates',
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
          {
          title: 'First site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg',
          id: '7',
        },

        {
          title: 'Second site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg',
          id: '8',
        },
        {
          title: 'Third site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2018/05/28/09/32/technology-3435575__340.jpg',
          id: '9',
        },
          {
          title: 'Forth site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835__340.jpg',
          id: '10',
        },
        {
          title: 'Fifth site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2019/07/07/06/34/network-4321833__340.jpg',
          id: '11',
        },
        {
          title: 'Sixth site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2016/05/14/11/10/board-1391679__340.jpg',
          id: '12',
        },
        {
          title: 'First site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg',
          id: '13',
        },

        {
          title: 'Second site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg',
          id: '14',
        },
        {
          title: 'Third site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2018/05/28/09/32/technology-3435575__340.jpg',
          id: '15',
        },
        {
          title: 'Forth site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835__340.jpg',
          id: '16',
        },
        {
          title: 'Fifth site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2019/07/07/06/34/network-4321833__340.jpg',
          id: '17',
        },
        {
          title: 'Sixth site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2016/05/14/11/10/board-1391679__340.jpg',
          id: '18',
        },
          {
          title: 'First site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg',
          id: '19',
        },

        {
          title: 'Second site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg',
          id: '20',
        },
        {
          title: 'Third site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2018/05/28/09/32/technology-3435575__340.jpg',
          id: '21',
        },
          {
          title: 'Forth site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835__340.jpg',
          id: '22',
        },
        {
          title: 'Fifth site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2019/07/07/06/34/network-4321833__340.jpg',
          id: '23',
        },
        {
          title: 'Sixth site',
          imageSrc:
            'https://cdn.pixabay.com/photo/2016/05/14/11/10/board-1391679__340.jpg',
          id: '24',
        },
      ],
    }
  },
}
</script>

<style></style>
