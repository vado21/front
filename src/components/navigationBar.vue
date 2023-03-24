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
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        solo
        hide-no-data
        hide-selected
        item-text="Description"
        item-value="telltell API"
        label="Busca una empresa"
        placeholder="Start typing to Search"
        prepend-icon="mdi-city"
        return-object
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
      model: null,
      search: null,
      items: ['BBVA','SIGMA']
    }),
    watch: {
      model(val,oldval){
        if(val == 'BBVA'){
          window.location.href = "http://localhost:8080/#/review?id=2";
          window.location.reload();
        }
        else if(val == 'SIGMA'){
          window.location.href = "http://localhost:8080/#/review?id=1";
          window.location.reload();
        }
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
