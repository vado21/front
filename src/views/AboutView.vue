<template>
  <div class="main">
    <br>
    <br>
    <br>
    <div>
        <img src="../assets/bbva.png" >
      
        <div class="">
        <p style="font-size:30px; font:Inter">BBVA</p>
        <p style="font-size:20px; font:Inter"> Grupo Financiero BBVA México, S.A. de C.V.</p>
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
    <v-card
    class="mx-auto"
    max-width="700"
    
    color="#F9F9F9"
  > <v-list-item three-line>
      <v-list-item-content>
        <v-row justify="left">
          <v-col>
        <div class="text-h6 mb-1">
          Buena experiencia
        </div>
        </v-col>
        <v-col>
         <v-rating
            :v-model="4"
            bg-color="orange-lighten-1"
            color="blue"
            readonly
          ></v-rating>
          </v-col>
        </v-row>
        <v-list-item-title  class="text-overline mb-4">
          <p class="text-left">
            10-Marzo-2023 &nbsp &nbsp &nbsp
            Empleo: Ejecutivo bancario
          </p>
        </v-list-item-title>
          <div>
          <p class="text-left">Lo recomiendo, fue una gran experiencia en donde mis compañeros de la sucursal eran bastante amigables y el jefe tenía una buena comunicación con todos.</p>
          </div>
         <div >
        <h4 class="text-left">¿Que mejoraria?</h4>
        </div>
        <br>
        <div>
          <p  class="text-left" >Las jornadas estaban muy pesadas y no siempre saliamos a nuestra hora de salida.</p>
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
    <v-card
    class="mx-auto"
    max-width="700"
    outlined
    color="#F9F9F9"
  > <v-list-item three-line>
      <v-list-item-content>
        <v-row justify="left">
          <v-col>
        <div class="text-h6 mb-1">
          Buena experiencia
        </div>
        </v-col>
        <v-col>
         <v-rating
            :v-model="4"
            bg-color="orange-lighten-1"
            color="blue"
            readonly
          ></v-rating>
          </v-col>
        </v-row>
        <v-list-item-title  class="text-overline mb-4">
          <p class="text-left">
            10-Marzo-2023 &nbsp &nbsp &nbsp
            Empleo: Ejecutivo bancario
          </p>
        </v-list-item-title>
          <div>
          <p class="text-left">Lo recomiendo, fue una gran experiencia en donde mis compañeros de la sucursal eran bastante amigables y el jefe tenía una buena comunicación con todos.</p>
          </div>
         <div >
        <h4 class="text-left">¿Que mejoraria?</h4>
        </div>
        <div  >
          <p  class="text-left" >Las jornadas estaban muy pesadas y no siempre saliamos a nuestra hora de salida.</p>
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
  </div>
</template>


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