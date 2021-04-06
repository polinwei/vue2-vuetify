<template>
  <!-- App.vue -->
  <v-app>
    <!-- 頂部導覽列 -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link class="mx-2" v-for="(v, k) in topNav" :key="k" :to="'/' + k"
        >{{ v }}
      </router-link>
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
      <v-sheet dense class="pa-4 primary lighten-2">
        <v-text-field
          v-model="search"
          label="Search"
          dark
          flat
          solo-inverted
          hide-details
          clearable
          clear-icon="mdi-close-circle-outline"
        ></v-text-field>
        <v-checkbox
          v-model="caseSensitive"
          dark
          hide-details
          label="Case sensitive search"
        ></v-checkbox>
      </v-sheet>

      <v-divider></v-divider>

      <!-- 選單 -->
      <v-treeview
        v-model="tree"
        :open="initiallyOpen"
        :items="treeItems"
        activatable
        item-key="name"
        open-on-click
        :search="search"
        :filter="filter"
        return-object
        @update:active="treeNodeClick"
      >
        <template v-slot:prepend="{ item, open }">
          <v-icon v-if="!item.icon">
            {{ open ? "mdi-folder-open" : "mdi-folder" }}
          </v-icon>
          <v-icon v-else>
            {{ icons[item.icon] }}
          </v-icon>
        </template>
      </v-treeview>
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
<style lang="scss" scoped>
/** https://github.com/vuetifyjs/vuetify/issues/5644 */
.v-treeview-node {
  margin-left: 0px;
  width: inherit;
  /* background-color: rgba(var('--node-color-r'), var('--node-color-g'), var('--node-color-b'), 0.1); */
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
<script>
export default {
  name: "App",
  data: () => ({
    drawer: true,
    topNav: [],
    initiallyOpen: ["public"],
    icons: {
      home: "mdi-home",
      tree: "mdi-file-tree",
      html: "mdi-language-html5",
      js: "mdi-nodejs",
      json: "mdi-json",
      md: "mdi-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel",
    },
    tree: [],
    treeItems:[],    
    open: [1, 2],
    search: null,
    caseSensitive: false,
  }),
  computed: {
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    },
  },
  methods: {
    isDesktop() {
      // window.visualViewport.width for chrome
      return Math.max(window.innerWidth, window.visualViewport.width) > 1024;
    },
    treeNodeClick(item) {
      let link = item[0];     
      if (link.to) {
        if (link.codepen){
          this.$router.push({ path: `${link.to}/codepen/${link.codepen}` })
        } else {
          this.$router.push({ path: link.to })
        }        
      }      
    },
  },
  created() {
    // fir-1a50d-default-rtdb.firebaseio.com 要替換成你的 firebase project 名稱
    fetch("https://fir-1a50d-default-rtdb.firebaseio.com/vue2-spa/nav.json")
      .then((res) => res.json())
      .then((res) => (this.asideNav = res));

    fetch("https://fir-1a50d-default-rtdb.firebaseio.com/vue2-spa/topNav.json")
      .then((res) => res.json())
      .then((res) => (this.topNav = res));

    fetch("https://fir-1a50d-default-rtdb.firebaseio.com/vue2-spa/treeMenu.json")
      .then((res) => res.json())
      .then((res) => (this.treeItems = res));

    if (!this.isDesktop()) {
      this.drawer = false;
    }
  },
};
</script>
