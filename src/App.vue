<template>
  <!-- App.vue -->
  <v-app>
    <!-- 頂部導覽列 -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link class="mx-2" v-for="(v, k) in topNav" :key="k" :to="'/'+k">{{ v }}</router-link>      
    </v-app-bar>
    <!-- 側邊導覽列 -->
    <v-navigation-drawer app v-model="drawer">
      <!-- 網頁標題 -->
      <v-list-item to="/">
        <v-list-item-content>
          <v-list-item-title class="title"> Vuetify 學習 </v-list-item-title>
          <v-list-item-subtitle>
            Polin WEI - 波林
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- 選單 -->
      <v-list dense>
        <v-list-item v-for="(n, v) in asideNav" :key="v" :to="'/plugin-' + v">
          <v-list-item-icon>
            <v-icon>mdi-{{ n.vicon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ n.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: true,
    asideNav: [],
    topNav: [],
  }),
  methods:{
    isDesktop() {
      // window.visualViewport.width for chrome   
      return Math.max(window.innerWidth,window.visualViewport.width) > 1024;
    },
  },
  created() {    
    // fir-1a50d-default-rtdb.firebaseio.com 要替換成你的 firebase project 名稱
    fetch("https://fir-1a50d-default-rtdb.firebaseio.com/vue2-spa/nav.json")
      .then((res) => res.json())
      .then((res) => (this.asideNav = res));

    fetch("https://fir-1a50d-default-rtdb.firebaseio.com/vue2-spa/topNav.json")
      .then((res) => res.json())
      .then((res)=> this.topNav = res);

    if (!this.isDesktop()){      
      this.drawer = false;
    }
  },
};
</script>
