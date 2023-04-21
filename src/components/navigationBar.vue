<template>
  <div>
    <v-app-bar
      color="white"
      absolute
      elevate-on-scroll
    >
      <router-link to="/">
        <v-toolbar-title>  <img src="../assets/tell.png" > </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div class="area">
      <v-autocomplete
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
      company:""
    }),
    async created (){
      this.$http.get("http://localhost:7000/api/company")
            .then((result) => {
              this.items = result.body
             })
            .catch((error) => {
              
            });
    },
    watch: {
      company(val){
        let url = "/review/"+val
        this.$router.push(url);
      }
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
</style>
