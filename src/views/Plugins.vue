<template>
  <v-container>
    <v-layout wrap>
        {{id}}

      <!-- snackbar -->
      <v-snackbar top :timeout="snackTimeout" v-model="snackbar">
        {{ snackbarText }}
        <v-btn
          text
          @click="snackbar = false"
        >
          關閉
        </v-btn>
      </v-snackbar>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {      
      snackTimeout: 3000,
      snackbarText: "",
      snackbar: false,
    }
  },
  methods: {
    triggerRouter(){      
      this.id = this.$route.params.pathMatch;
      console.log(this.id);
    }
  },
  computed: {
    id(){
      console.log(this.$route.params.pathMatch)
      return this.$route.params.pathMatch;
    }
  }
}
</script>
