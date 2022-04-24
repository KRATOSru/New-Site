<template>
  <v-container fluid class="container" grid-list-lg>
    <v-layout row wrap>
      <v-flex xs6 sm4 md3 v-for="ad in ads" :key="ad.id">
        <v-card class="mx-auto pb-4 elevation-10" max-width="400">
          <v-img height="200px" :src="ad.imageSrc"> </v-img>
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
          imageSrc:
          'https://3.downloader.disk.yandex.ru/preview/73943553a09482ac179581730cd55794fbfbf3aede94248831951461d1d7d61d/inf/rda4VCfAxO30pU2ZvoIR_sJ1Mhc60OUsgIgZxfM5nncFVuPLr30lrkj0uvyXC6OTq4J_qhnxXHbB71GO7FYjuw%3D%3D?uid=511315473&filename=UC-214c23db-2799-4ee6-ad90-59fdbb2918e3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x761',
          id: '1'
        },

        {
          imageSrc:
            'https://4.downloader.disk.yandex.ru/preview/bbe54e1428aaae54b4c923f9830690f3a30ccf3402fcad28d357e97917df3592/inf/uQui0BInYsZnJtaABmRQGIQBY6j-XxC5LkCxA4LY9YzV51FA2vtfqNMa0idRyGqi_Fo6ZR9clTE2FTnQOFnxWA%3D%3D?uid=511315473&filename=UC-dacdb1f4-e850-4086-81fa-a968c40ee339.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x761',
          id: '2',
        },
        {
          imageSrc:
            'https://3.downloader.disk.yandex.ru/preview/4013c6b97b9546d871933826865d44490c10d6afd6ae79e0dcc4fc7430f0e21e/inf/MNYmmIq9N11f36qPsO_eltDwWZaWExn4AoA0Fa3F6hGUE_7bZYtzrh25pQg_HX9ENuMd16Y688HkWhusYtzIXQ%3D%3D?uid=511315473&filename=UC-691789f6-63fb-4bc5-82af-f85ba113f651.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x697',
          id: '3',
        },
        {
          imageSrc:
            'https://2.downloader.disk.yandex.ru/preview/6c7463425432023db16de744bd562d92dc77b29cfef501e873802c16a647e90e/inf/mamj6yjkyhWH1B-vmGBjuZYdq8Q5DxoJD5ybYQeFzXbagKX_IE6JJiMZU0C9d7-VkRd4vGveH0G951a78r8fYg%3D%3D?uid=511315473&filename=UC-d97193cf-cec5-4b05-ad11-4fe2d667bb41.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x697',
          id: '4',
        },
        {
          imageSrc:
            'https://1.downloader.disk.yandex.ru/preview/0bc807b97f2e16b7646d21a06c95dc79fb1d7d5d1a362a45c07583c1adba7218/inf/QETnPLMUWnjaBBrQr1KcYKsiqUkP6hFGcu4P7pHrTEjh8AZ4yGN82K-N3HfFzkAZPMqiZq4BLTOZqYoBPpCqUg%3D%3D?uid=511315473&filename=UC-99f1110a-efab-4d48-8bdf-d98949a5b2e8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x697',
          id: '5',
        },
        {
          imageSrc:
            'https://4.downloader.disk.yandex.ru/preview/49eeb167bf9f625e2a5446838b70575a145bb0452d8fdeea066c481fd8d518c9/inf/_WlwiehL91pRZ7F4vD0Sea8dvUgRoHyNFr-c-Ng2ykog7li6Us3RASEVzwPzUsKzz6ER3_r8wTYTcoUj8jyYlA%3D%3D?uid=511315473&filename=UC-b98de683-0a73-44ce-8043-8679d1013ea8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x697',
          id: '6',
        },
        {
          imageSrc:
            'https://4.downloader.disk.yandex.ru/preview/ca7c4532d093bcfa86efa9c02c96ce1b33ce5f9999cd1b86689699699a47cc7f/inf/Kca2gRUN9G3xYm7ZEf1_31Z0rLk-uTo0Q5cbrZ_e_sOSl6AlAnXRvLuGnAg7JlH7kBQZ3Dur51dKMEGbs9Hw1A%3D%3D?uid=511315473&filename=UC-19ed93e7-47a6-48be-91ff-6076e455a9a5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x761',
          id: '7',
        },

        {
          imageSrc:
            'https://2.downloader.disk.yandex.ru/preview/324a621d599cfc84f6e9657cd6e6a49eb6bf84022335d6c44d4d5d1396d67240/inf/kz-tyFuh79bJ6agDZjfjKPtmm6sQeNjX9tWvkiTUSltTT44oCXZBMZJQD7q8afvHA-TWLCeS1QAoHFBupXXI9g%3D%3D?uid=511315473&filename=UC-0501ab34-61e3-4743-8eda-38f05ed53755.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x697',
          id: '8',
        },
        {
          imageSrc:
            'https://2.downloader.disk.yandex.ru/preview/874f7212896e9555b2a2dad14495e8c21a9281759e20ff922a25a265820a55ed/inf/L2XoeOXc8-ASo2DmJ_ClPGcpqUCxiOWgsZeh-R_4Ne2MQ9LuLHKlmery5AWMtFjJnAyRf623_hFFLLsM2DHe9w%3D%3D?uid=511315473&filename=Screenshot_20210210-140705_Drive.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x761',
          id: '9',
        },
        {
          imageSrc:
            'https://2.downloader.disk.yandex.ru/preview/e4e570bb5a78dd64cdbd3497f1b99df7bafdec0b8961789b8941b3cf719eec3a/inf/6Emd47ojNZiME6g9Yl76gOnQ8Xle-IkYHWu65PVc6fU2omUaX1EBZa2qlhPh3-y02GtlSsKXfI1_Jb_966Fw8w%3D%3D?uid=511315473&filename=Screenshot_20200109-222345_Gallery.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x761',
          id: '10',
        },
        {
          imageSrc:
            'https://1.downloader.disk.yandex.ru/preview/c5657b8003878bc184d387bd2add7ecff3d13d6eb8f4567401075fcdca83a30a/inf/ibSjubP9x2hw4JVws8A_KPLaVvI7JVe9pQ9g0iDzfxtgJlbpGGpRxvkwYMHbs53Vo1HQPtZRkQ3X7LqDQLRruw%3D%3D?uid=511315473&filename=Screenshot_20191031-132756_Drive.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x697',
          id: '11',
        },
        {
          imageSrc:
            'https://4.downloader.disk.yandex.ru/preview/7c90793c4284a5de132dea9d205027105f82f8b808186d5e826373af21225d26/inf/sB4fHzYazQoPydKvQpQ1a-Rz4MlAKazC5UjvMxWbhS0fU4mXb33vqtKU88CCRURYm2cWDfbBn2mxz_bjGFJKvg%3D%3D?uid=511315473&filename=%D0%A1%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82_20190817_1423236605031961365060854.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=511315473&tknv=v2&size=1585x761',
          id: '12',
        },
        {
          imageSrc:
            'https://1.downloader.disk.yandex.ru/preview/6c8d9f0f29f2f91d8ccaa57380ec6750a201d8054b5e6355e1ebd61fb181c35b/inf/wHmwxoeDZ1EursM1j_mVtWhHrZ3B4Si6xovtvl8n1aJUifB9CRcwfvGauPg7yoJlGYAdfxGNsGnjhakAJHQy2g%3D%3D?uid=511315473&filename=Screenshot_20191031-101046_Drive.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x761',
          id: '13',
        },

        {
          imageSrc:
            'https://2.downloader.disk.yandex.ru/preview/b30dde71040b65631c37dfdc26e344ee685657c2688004a39638d92432c369fb/inf/TiVeoZTFq-DiNVKHy5jtM0vil1DrYmFNFc_Gb9zRh2QPHy2Yv0L-hJsVmGoalqae2HNDf_I6beJTITNnIgfOpA%3D%3D?uid=511315473&filename=JavaScript_certificate.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x761',
          id: '14',
        },
        {
          imageSrc:
            'https://4.downloader.disk.yandex.ru/preview/58fe618439bd682cbbf7c6f0ff7d7ad8274c33ef2a130fa63fa4385a51608714/inf/TiVeoZTFq-DiNVKHy5jtM_R3ecLTmU6DnIcMmeQANnGwfHzYNFJ4V8fEmG7G3ITa-qi1kSBA1TYeMxYjwMv78w%3D%3D?uid=511315473&filename=Java_certificate.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x761',
          id: '15',
        },
        {
          imageSrc:
            'https://2.downloader.disk.yandex.ru/preview/28f71bd17542525f03e4e3ce393ce7554b1060939a1d98e27c52529a4aba3741/inf/TiVeoZTFq-DiNVKHy5jtMz45lER4wlWEQoP-FVB9SKasZBQr7ESF4gqwwdt7GXsgM8HjsGK4nEVAfniH851gLQ%3D%3D?uid=511315473&filename=CSS_certificate.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x761',
          id: '16',
        },
        {
          imageSrc:
            'https://3.downloader.disk.yandex.ru/preview/b65b503170a1b41c12f0e6b36be9bf1971e148dc7fce4594b5eab333e6eaffdc/inf/TiVeoZTFq-DiNVKHy5jtM1Ao4RARvXgmQytHpzvFtces8ES9xzS73-Pcci-O3y-g5wQgf8D2JfajlJ7xsx0fUQ%3D%3D?uid=511315473&filename=SQL_certificate.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x761',
          id: '17',
        },
        {
          imageSrc:
            'https://2.downloader.disk.yandex.ru/preview/27365da31435fa06c041fc8847df93472741a2a37896626d811fe03b85158f79/inf/TiVeoZTFq-DiNVKHy5jtM-IkOtRFD2SNW3w37j8y0pRqw5Iv7RaWobgWTtweoC0AW5nPAgVpWxEB7T2yf_jBHg%3D%3D?uid=511315473&filename=HTML_certificate.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=511315473&tknv=v2&size=1585x761',
          id: '18',
        },
        {
          imageSrc:
            'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg',

          id: '19',
        },

        {
          imageSrc:
            'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg',
          id: '20',
        },
        {
          imageSrc:
            'https://cdn.pixabay.com/photo/2018/05/28/09/32/technology-3435575__340.jpg',
          id: '21',
        },
        {
          imageSrc:
            'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835__340.jpg',
          id: '22',
        },
        {
          imageSrc:
            'https://cdn.pixabay.com/photo/2019/07/07/06/34/network-4321833__340.jpg',
          id: '23',
        },
        {
          imageSrc:
            'https://cdn.pixabay.com/photo/2016/05/14/11/10/board-1391679__340.jpg',
          id: '24',
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  background-color: #e1e1d6;
}
</style>
