<template>
<div class="content">
  <br>
  <br>
  <div style="padding:20px" v-for="review in reviews" v-bind:key="review.id">
  <v-card
    color="#3CA3FF"
    dark
    max-width="700"
    class="mx-auto"
  >
    <v-row justify="left">
            <v-col>
          <div class="text-h6 mb-1">
              {{review.title}}
          </div>
          </v-col>
          <v-col>
          <v-rating
              v-model="review.rating"
              bg-color="orange-lighten-1"
              color="white"
              readonly
            ></v-rating>
            </v-col>
          </v-row>
    <v-card-subtitle class="text-h5">{{review.body}}</v-card-subtitle>
      <v-card-actions>
        <p>&nbsp  {{review.likeCount}} me gusta</p>
      </v-card-actions>
      
      <div class="text-h6">
              ¿Que mejorarias? {{review.footer}}
          </div>
    <v-card-title class="text-h6">
      Empleo: {{review.reviewerOccupation}}
    </v-card-title>
  </v-card>
  <br>
  <br>
  </div>  
  </div>
</template>
<script>
  export default {
    
   name:"MostLiked",
      data(){
        
        return{
            reviews: [],
            
          }
        },
        async created(){
            this.$http.get("review/most-liked/")
            .then((result) => {
              this.reviews = result.body
             })
            .catch((error) => {
              console.log(error)
            });
        },
    methods: {
      
    }
  }
</script>

<style scoped>
  .welcome {
    margin-top: 5vh;
    color: #2282F0;
    font-size: 25px;
    height: 15vh;
    padding: 25px;
    
  }
  .blue{
    background-color: #2282F0 ;
    color: white;
    font-size: 30px;
    height: 25vh;
  }
  .icon{
    width:30%;
    height: 50%;
  }
  .white{
    background-color: white ;
    color: #2282F0 ;
    font-size: 30px;
    height: 25vh;
  }
  .bluesecond{
    background-color: #2282F0 ;
    color: white;
    font-size: 30px;
    height: 30vh;
  }
</style>

