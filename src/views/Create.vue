<template> 
  <div class="main">
    <br>
    <br>
    <br>
    <v-card
    class="mx-auto"
    max-width="900"
    outlined
  >
  <center>
  <v-img
      :src="imgUrl"
      height="100px"
      width="300px"
    ></v-img>
    </center>
    <center>
    <v-card-title class="text-h4 justify-center">
      {{name}}
    </v-card-title>
    </center>
    <center>
    <v-card-title class="text-h5 justify-center">
      Cuentanos tu experiencia
    </v-card-title>
    </center>
    <v-card-text>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="title"
      label="Titulo de la reseña"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-text-field
      v-model="occupation"
      :rules="employRules"
      label="Empleo"
      required
    ></v-text-field>
    <v-text-field
      v-model="opinion"
      :rules="opinionRules"
      label="Cuentanos tu opinion"
      required
    ></v-text-field>
    <v-text-field
      v-model="improve"
      :rules="improveRules"
      label="¿Que mejorarias?"
      required
    ></v-text-field>

     <v-card-title class="text-h5 justify-center">
      ¿Que calificacion pondrias?
    </v-card-title>

    <v-rating
      v-model="rating"
      bg-color="orange-lighten-1"
      color="blue"
    ></v-rating>
    <br>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Crear
    </v-btn>

  </v-form>
  </v-card-text>
  </v-card>
  <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          CERRAR
        </v-btn>
      </template>
    </v-snackbar>
    <br>
  </div>
</template>

<script>
  export default {
    
   name:"Create",
      data(){
        
        return{
            name: "",
            imgUrl: "",
            valid: true,
            nameRules: [v => !!v || 'Titulo es requerido'],
            employRules: [v => !!v || 'Empleo es requerido'],
            opinionRules: [v => !!v || 'Opinion es requerido'],
            improveRules: [v => !!v || 'Mejorar es requerido'],
            title:"",
            opinion:"",
            improve:"",
            rating:0,
            occupation:"",
            snackbar: false,
            text: "",
          }
        },
        async created(){
          
            let idCompany = this.$route.params.id
            this.$http.get("http://localhost:7000/api/company/"+idCompany)
            .then((result) => {
              this.name = result.body.companyName
              this.imgUrl = result.body.companyLogo
             })
            .catch((error) => {
              this.$router.push("/");
            });
        },
    methods: {
      validate () {
        let validation = this.$refs.form.validate()
        if(validation){
          let idCompany = this.$route.params.id
          const body = { 
                        title: this.title,
                        rating: this.rating,
                        body: this.opinion,
                        footer: this.improve,
                        likeCount: 0,
                        dislikeCount: 0,
                        reportCount: 0,
                        sharedCount: 0,
                        reviewerOccupation: this.occupation,
                        companyId: parseInt(idCompany)
                    };
          this.$http.post("http://localhost:7000/api/review",body)
          .then((result) => {
            let history = "/review?id=" + idCompany
            this.$router.push(history);
          })
          .catch((error) => {
            this.text = "Hubo un error al subir la reseña "
            this.snackbar = true
          });
        }
      },
    }
  }
</script>


<style scoped>
.main {
  height: 100%;
  width: 100%;
  background-color: #3CA3FF;
  
}
</style>