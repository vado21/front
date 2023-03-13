<template>
  <div>
    <v-app-bar
      color="white"
      absolute
      elevate-on-scroll
    >

      <v-toolbar-title>  <img src="../assets/tell.png" > </v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="area">
      <v-text-field 
            solo
            label="Buscar empresa"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
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
      
    }),
  }
</script>

<style scoped>
  .area{
    margin-top: 2% ;
  }
  .avatar{
    margin-left:3%;
  }
</style>
