<template>
  <div class="main">
    <br>
    <br>
    <br>
    <div>
        <img v-bind:src="imgUrl" width="150" height="100" >
      
        <div class="">
        <p style="font-size:30px; font:Inter">{{name}}</p>
        <p style="font-size:20px; font:Inter">{{reason}}</p>
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

      <v-tab href="#tab-1" @click="goToInfo()" >
        Informacion General
        <v-icon>mdi-book</v-icon>
      </v-tab>

      <v-tab href="#tab-2" @click="goToReviews()">
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
      @click="goToCreate()"
    >
      + Cuentanos tu experiencia
    </v-btn>
    </div>
    <div v-show="showNoReview">
        <v-card
        class="mx-auto pa-2"
        max-width="1000"
      >
      No hay reseñas
      </v-card>
    </div>
    <div v-show="showReview">
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
          active-class="blue accent-4 white--text"
          column
        >
          
          <v-chip  @click="like(resena.id,resena.index)"> {{resena.likeCount}} Me gusta</v-chip>

          <v-chip  @click="dislike(resena.id,resena.index)">{{resena.dislikeCount}} No me gusta</v-chip>

        </v-chip-group>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
        >
          Reportar
        </v-btn>
      </v-card-actions>
      <div class="pa-4">
      
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="comments[resena.index]"
            outlined
            label="Hacer comentario"
            type="text"
            background-color="white"
          >
            <template v-slot:append-outer>
              <v-menu
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    depressed
                    color="primary"
                    click:clear
                    @click="comment(comments[resena.index],resena.id,resena.index);"
                  >
                    Publicar
                  </v-btn>
                </template>
              </v-menu>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <h3  align="start">Comentarios</h3>
    <v-list-item  v-for="comment in resena.comments" v-bind:key="comment.id">
      <v-list-item-content align="start">
        <v-list-item-title>{{comment.body}}</v-list-item-title>
        <v-list-item-subtitle>{{comment.createdAt}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      </div>
    </v-card>
    <br>
    </div>
  </div>
  
  <div  v-show="showInfo">
    <v-card
    class="mx-auto pa-2"
    max-width="1000"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light" style="color:#3CA3FF" >Informacion General:</span>
    </v-card-title>

    <v-list-item-title class="text-h6">
      <v-row align="start">
        <v-col class="text-left">
          Nombre: {{name}}
        </v-col>
        <v-col class="text-left">
          Pais: {{country}}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-left">
          Razon Social: {{reason}}
        </v-col>
        <v-col class="text-left">
          Tamaño: {{size}}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-left">
          Link : {{siteWeb}}
        </v-col>
        <v-col class="text-left">
         Telefono: {{phone}}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-left">
          email: {{email}}
        </v-col>
      </v-row>
    </v-list-item-title>

    <v-card-title>
      <span class="text-h6 font-weight-light"  style="color:#3CA3FF">Direccion:</span>
    </v-card-title>
   
     <v-list-item-title class="text-h6">
      <v-row align="start">
        <v-col class="text-left">
          Latitud: {{latitude}}
        </v-col>
        <v-col class="text-left">
          Longitud: {{longitude}}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-left">
          Suburbio: {{suburb}}
        </v-col>
        <v-col class="text-left">
          Calle: {{street}}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-left">
          Localizacion: {{location}}
        </v-col>
        <v-col class="text-left">
         Numero exterior: {{exteriorNumber}}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-left">
          Numero interior: {{interiorNumber}}
        </v-col>
        <v-col class="text-left">
          Codigo postal: {{zipCode}}
        </v-col>
      </v-row>
    </v-list-item-title>
    
  </v-card>
  <br>
  </div>
  </div>
</template>

<script>
  export default {
   name:"Resena",
      data(){
        return{
            name: "",
            reason:"",
            resenas: [],
            comments:[],
            currentLikes:[],
            imgUrl: "",
            size: "",
            country:"",
            siteWeb:"",
            email: "",
            latitude:"",
            longitude:"",
            street:"",
            location:"",
            exteriorNumber:"",
            interiorNumber:"",
            suburb:"",
            zipCode:"",
            showInfo: true,
            showReview:false,
            showNoReview:false,
          }
        },
        async created(){
          let idCompany = this.$route.params.id
           this.$http.get("review/company/"+idCompany)
            .then((result) => {
              this.resenas = result.body
              this.getAllComments();
             })
            .catch((error) => {
              
            });

            this.$http.get("company/"+idCompany)
            .then((result) => {
              this.name = result.body.companyName
              this.reason= result.body.socialReason
              this.imgUrl = result.body.companyLogo
              this.size =  result.body.companySize
              this.country = result.body.country
              this.siteWeb = result.body.webPageUrl
              this.phone = result.body.phoneNumber
              this.email = result.body.email
              this.latitude = result.body.latitude
              this.longitude = result.body.longitude
              this.street = result.body.street,
              this.location = result.body.location,
              this.exteriorNumber = result.body.exteriorNumber,
              this.interiorNumber = result.body.interiorNumber,
              this.suburb = result.body.suburb,
              this.zipCode = result.body.zipCode 
                if(this.imgUrl == null){
                  this.imgUrl = require('../assets/descarga.png');
                }
             })
            .catch((error) => {
              console.log(error)
            });
        },
    methods: {
      goToCreate(){
        let history = "/create/" + this.$route.params.id
        this.$router.push(history);
      },
      goToReviews(){
        this.showInfo =false;
        if(this.resenas.length === 0){
              this.showReview = false;
              this.showNoReview = true
        }
        else{
          this.showNoReview = false;
          this.showReview = true;  
        }
      },
      goToInfo(){
        this.showNoReview = false;
        this.showReview =false;
        this.showInfo = true;
      },
      callApiLike(idReview,index,type,currentL){
        const jsonBody ={
          id:idReview,
          type:type
        }
        this.$http.put("review/like/"+idReview,jsonBody)
          .then((result) => {
              this.currentLikes[index].current = currentL
              const newList = result.body
              const jsonObj = this.resenas[index]
              jsonObj.likeCount = newList.likeCount
              jsonObj.dislikeCount = newList.dislikeCount
              this.$set(this.resenas,index,jsonObj)
            })
          .catch((error) => {
            console.log(error)
          });
      },
      callApiDislike(idReview,index,type,currentL){
        const jsonBody ={
          id:idReview,
          type:type
        }
        this.$http.put("review/dislike/"+idReview,jsonBody)
          .then((result) => {
              this.currentLikes[index].current = currentL
              const newList = result.body
              const jsonObj = this.resenas[index]
              jsonObj.likeCount = newList.likeCount
              jsonObj.dislikeCount = newList.dislikeCount
              this.$set(this.resenas,index,jsonObj)
            })
          .catch((error) => {
            console.log(error)
          });
      },
      async like(idReview,index){
        
        if(this.currentLikes[index].current != "like"){
          if(this.currentLikes[index].current == ""){
            //Put like
            this.callApiLike(idReview,index,"increment","like");
          }
          else if(this.currentLikes[index].current == "dislike"){
            //Take out like
            await this.callApiLike(idReview,index,"increment","like");
            //Put dislike
            await this.callApiDislike(idReview,index,"decrement","like");
          }
        }
        else{
          //takeout Like
          this.callApiLike(idReview,index,"decrement","");
        
        }
      },
      async dislike(idReview,index){
        if(this.currentLikes[index].current != "dislike"){
          if(this.currentLikes[index].current == ""){
            //Put dislike
            this.callApiDislike(idReview,index,"increment","dislike");
          }
          else if(this.currentLikes[index].current == "like"){
            //Take out dislike
            await this.callApiDislike(idReview,index,"increment","dislike");
            //Put like
            await this.callApiLike(idReview,index,"decrement","dislike");
          }
        }
        else{
          //takeout dislike
          this.callApiDislike(idReview,index,"decrement","");
        }

      },
      getAllComments(){
        let index = 0
        this.resenas.forEach((unique) => {
            this.$http.get("comment/review-comment/"+unique.id)
            .then((result) => {
              this.comments.push("")
              this.currentLikes.push({current:"",index: index})
              unique.comments= result.body
              unique.index = index;
              index++;
             })
            .catch((error) => {
              console.log(error)
            });
        });
      },
      getCommentsByOne(reviewId,index){
            this.$http.get("comment/review-comment/"+reviewId)
            .then((result) => {
              const newList = result.body
              const jsonObj = this.resenas[index]
              jsonObj.comments = newList
              this.$set(this.resenas,index,jsonObj)
             })
            .catch((error) => {
              console.log(error)
            });
      },
      comment(message,reviewId,index){

        let body = {
            body: message ,
            likeCount: 0,
            dislikeCount: 0,
            reportCount: 0,
            reviewId: reviewId
        }
        
        this.$http.post("comment/",body)
          .then((result) => {
            this.$set(this.comments,index,"")
            this.getCommentsByOne(reviewId,index)
          })
          .catch((error) => {
            console.log(error)
          });
      }

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