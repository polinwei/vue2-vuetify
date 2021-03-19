<template>
  <v-container>    
    <v-row>
      <v-col cols="12">
        <iframe
          height="600"
          scrolling="no"
          :title=id
          :src="'//codepen.io/polinwei/embed/' + params.codepen_id + '/?height=500&theme-id=14916&default-tab=html&embed-version=2'"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          style="width: 100%;"
          > 
            See the Pen <a :href="'//codepen.io/polinwei/pen/' + params.codepen_id + '/'">{{ params.codepen_id }}</a>
            by Polin WEI (<a href="//codepen.io/polinwei">@polinwei</a>) on <a href="//codepen.io">CodePen</a>.
        </iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    triggerRouter() {
      this.params = this.$route.params;
      this.id = this.$route.params.pathMatch;
    },
  },
  computed: {
    id() {
      return this.$route.params.pathMatch;
    },
    params() {
      return this.$route.params;
    },
  },
};
</script>
