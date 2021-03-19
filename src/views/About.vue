<template>
  <v-container>
    
      <v-card class="mx-auto my-auto" max-width="1024">
        <v-img
          lazy-src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"          
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          max-height="300"
          aspect-ratio="2"
        >
          <v-card-title class="white--text mt-8">
            <p class="ml-3">
              使用的套件列表
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Today
          </div>

          <v-timeline align-top dense>
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong><a :href=message.link target="_blank"> {{ message.from }}</a></strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>                
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          from: "You",
          message: `Sure, I'll see you later.`,
          link: "",
          time: "2021-03",
          color: "deep-purple lighten-1",
        },
        {
          from: "Vuetify 2",
          message: "Vuetify 是建立在Vue.js之上的完備的介面框架。 該專案的目標是向開發人員提供他們積累的豐富且吸引用戶體驗所需的工具。",
          link: "https://vuetifyjs.com/en/introduction/why-vuetify/#getting-started",
          time: "2021-02",
          color: "green",
        },
        {
          from: "Vuejs 2",
          message: "Vue (讀音 /vjuː/，類似於 view) 是一套用於構建使用者介面的漸進式框架。與其它大型框架不同的是，Vue 被設計為可以自底向上逐層應用。",
          link: "https://vuejs.org/v2/guide/",
          time: "2021-01",
          color: "deep-purple lighten-1",
        },
      ],
    };
  },
};
</script>
