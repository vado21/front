<template>
  <div class="bar">
    <v-app-bar
      color="white"
      absolute
      elevate-on-scroll
    >
      <router-link to="/">
        <v-toolbar-title>  <img src="../assets/tell.png" > </v-toolbar-title>
      </router-link>

      
    <v-tabs align-with-title>
          <v-tab @click="goToLiked()">Mas populares</v-tab>
        </v-tabs>
      <v-spacer></v-spacer>
      <div class="area">
      <v-autocomplete
        type="text"
        v-model="company"
        :items="items"
        item-text="companyName"
        item-value="id"
        :search-input.sync="search"
        :loading="isLoading"
        color="white"
        solo
        hide-no-data
        hide-selected
        label="Busca una empresa"
        placeholder="Start typing to Search"
        prepend-icon="mdi-city"
      ></v-autocomplete>
      </div>
      <div class="avatar">
      <v-avatar color="blue">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
    </div>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      search: null,
      items: [],
      company:"",
      search:null
    }),
    watch: {
      company(val){
        let url = "/company/"+val
        this.$router.push(url);
        location.reload();
      },
      search (val) {
        this.$http.get("company/search-company/autocomplete?companyName="+val)
            .then((result) => {
              this.items = []
              this.items = result.body
             })
            .catch((error) => {
              
            });
      },

    },
    methods: {
      goToLiked(){
        let url= "/mostLiked"
        this.$router.push(url);
      },
    }
  }
</script>

<style scoped>
  .area{
    margin-top: 2% ;
  }
  .avatar{
    margin-left:3%;
  }
  .navbar {
    margin-bottom: 10%;
  }
  .bar{
    height: 5vh;
  }
</style>
