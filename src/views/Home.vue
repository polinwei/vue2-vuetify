<template>
  <v-card class="mx-auto my-auto" max-width="1024" :loading="loading">
    <v-img
      class="white--text align-end"
      lazy-src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      aspect-ratio="2"
    >
      <v-card-title>
        學習是一件美好的事情
      </v-card-title>
    </v-img>

    <v-card-title>
      <h2 class="headline font-weight-bold mb-3">
        <a href="https://vuetifyjs.com/en" target="_blank">Vuetify</a>
        與
        <a href="https://firebase.google.com/" target="_blank">Firebase</a>
        的學習
      </h2>
    </v-card-title>

    <v-card-text>
      <v-layout wrap>
        <v-flex mb-5 xs12>
          <h3 class=" font-weight-bold mb-3">            
            本前端網站是運用 <a href="https://www.npmjs.com/package/vue-cli-ghpages" target="_blank">vue-cli-ghpages</a> 套件佈署到 GitHub Pages, 藉此來學習 <a href="https://vuetifyjs.com/en/getting-started/installation/" target="_blank">Vuetify</a> 的 Material Design Framework
          </h3>
        </v-flex>

        <v-flex mb-5 xs12 text-center>
          <a href="https://polinwei.com/">
            <h2 class="headline font-weight-bold mb-3">IT Skills 波林</h2>
          </a>
          <p>Polin WEI - 資訊工作者的技術手札</p>
          <v-btn color="blue" dark link large target="_blank" href="https://polinwei.com/vuetify-spa-development/">造訪官網</v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

// @ is an alias to /src
<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  }
};
</script>
