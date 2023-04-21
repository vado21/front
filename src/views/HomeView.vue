<template>
<div class="content">
  <div class="text-center welcome" >
    Bienvenido a TellTell!
  </div>
  <div class="text-center blue" >
    <v-row>
      <v-col md="5">
        <img class="icon" src="../assets/empresa1.png">
      </v-col>
      <v-col md="7">
            Busca las empresas que más te interesan, Entre nuestro repertorio de más de 1 millon de empresas

      </v-col>
    </v-row>
  </div>
  <div class="text-center white" >
    <v-row>
      <v-col md="7">
        Comparte tus  experiencias y conecta, Genera una reseña para la empresas que hayas trabajado y conecta con otros colaboradores     
      </v-col>
      <v-col md="5">
          <img class="icon" src="../assets/chat1.png">
      </v-col>
    </v-row>
  </div>
  <div class="text-center bluesecond" >
    <v-row>
      <v-col md="5">
        <img class="icon" src="../assets/toma-de-decisiones1.png">
      </v-col>
      <v-col md="7">
            Toma la mejor decisión de tu siguiente empleo, Revisa las reseñas y comentarios de otros empleados para equilibrar la balanza
      </v-col>
    </v-row>
  </div>
  </div>
</template>

<style scoped>
  .welcome {
    margin-top: 5vh;
    color: #2282F0;
    font-size: 35px;
    height: 15vh;
    padding: 25px;
    
  }
  .blue{
    background-color: #2282F0 ;
    color: white;
    font-size: 35px;
    height: 25vh;
  }
  .icon{
    width:35%;
    height: 55%;
  }
  .white{
    background-color: white ;
    color: #2282F0 ;
    font-size: 35px;
    height: 25vh;
  }
  .bluesecond{
    background-color: #2282F0 ;
    color: white;
    font-size: 35px;
    height: 30vh;
  }
</style>

