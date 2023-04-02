<template>
  <div class="main">
    <br>
    <br>
    <br>
    <div>
        <img :src="imgUrl" width="150" height="100" >
      
        <div class="">
        <p style="font-size:30px; font:Inter">{{nombre}}</p>
        <p style="font-size:20px; font:Inter">{{razon}}</p>
        </div>
    </div>

<v-tabs
      v-model="tab"
      background-color="#3CA3FF"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Informacion General
        <v-icon>mdi-book</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Reseñas
        <v-icon>mdi-star</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Sueldos
        <v-icon>mdi-currency-usd</v-icon>
      </v-tab>

      <v-tab href="#tab-4">
        Interacciones
        <v-icon>mdi-arrow-up-thin</v-icon>
      </v-tab>
      
    </v-tabs>
     
    <div class="sticky-top d-flex justify-end" >
    <v-btn
      class="ma-2"
      color="primary"
    >
      + Cuentanos tu experiencia
    </v-btn>
    </div>
<div style="padding:20px" v-for="resena in resenas" v-bind:key="resena.title">

    <v-card
    class="mx-auto"
    max-width="700"
    
    color="#F9F9F9"
  > <v-list-item three-line>
      <v-list-item-content>
        <v-row justify="left">
          <v-col>
        <div class="text-h6 mb-1">
          {{resena.title}}
        </div>
        </v-col>
        <v-col>
         <v-rating
            v-model="resena.rating"
            bg-color="orange-lighten-1"
            color="blue"
            readonly
          ></v-rating>
          </v-col>
        </v-row>
        <v-list-item-title  class="text-overline mb-4">
          <p class="text-left">
            {{resena.createdAt}} &nbsp &nbsp &nbsp
            Empleo: {{resena.reviewerOccupation}}
          </p>
        </v-list-item-title>
          <div>
          <p class="text-left">{{resena.body}}</p>
          </div>
         <div >
        <h4 class="text-left">¿Que mejoraria?</h4>
        </div>
        <br>
        <div>
          <p  class="text-left" >{{resena.footer}}</p>
        </div>
      </v-list-item-content>
    </v-list-item>
   <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="blue accent-4 white--text"
        column
      >
        <v-chip>Me gusta</v-chip>

        <v-chip>No me gusta</v-chip>

        <v-chip>Compartir</v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reportar
      </v-btn>
    </v-card-actions>
  </v-card>
  <br>
  </div>
  </div>
</template>

<script>
  export default {
    
   name:"Pedidos",
      data(){
        return{
            nombre: "",
            razon:"",
            resenas: [],
            imgUrl: ""
          }
        },
        async created(){
          let idCompany = this.$route.params.id
           this.$http.get("http://localhost:7000/api/review/company/"+idCompany)
            .then((result) => {
              this.resenas = result.body
             })
            .catch((error) => {
              
            });

            this.$http.get("http://localhost:7000/api/company/"+idCompany)
            .then((result) => {
              this.nombre = result.body.companyName
              this.razon= result.body.socialReason
              this.imgUrl = result.body.companyLogo
             })
            .catch((error) => {
              
            });

        
         
        },
    methods: {

    }

  }
</script>


<style scoped>
.main {
  height: 350px;
  width: 100%;
  background-color: #3CA3FF;
  color: white;
}
.container {
  margin:0;
  display: flex;
  justify-content: center
}
.contenedor{
  left: 0;
}
.sticky-top {
    position: sticky;
    top: 0;
}
</style>