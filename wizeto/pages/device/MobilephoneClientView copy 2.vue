<template>
  <div>
  
      <div class='left'>
        <div class='content'>
            <div class='content_title'>{{serviceItems[1].parent}}</div>
            <h6 class='content_subtitle'>Professional Auto Mechanics &amp; Technicians Ready To Assist - Book Here Now. </h6>
        </div>
      </div>
      <div class='right'><v-img class='hero-image' :src="image"></v-img> </div> 



            


  </div>
</template>



<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800&display=swap');

    .left{
      font-family: 'Heebo', sans-serif;
      float: left;
      height: 100vh;
      width: 40%;
        .content{
          padding-top: 150px;
          padding-left: 200px;
          .content_title{
            font-size: 4.5rem; font-weight: 600; position: absolute; z-index: 1;
          }
          .content_subtitle{
            position: absolute; font-size: 1.5rem; font-weight: 300; top: 300px;z-index: 1
          }
        }
      }

    .right{
      float: left;
      width: 60%;
      height: 100vh;
      margin: 0;
      padding-top: 150px;
      

          .hero-image {
              // background-image: url("~@/assets/image/bg/bg-1.jpg");
              /* background-color: #cccccc; */
              // background: darken(#5db4f3, 10%) url("~assets/images/bg.jpg") center;
              width: 600px;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              position: absolute;
              top: 300px;
              left: 900px;

          }

      }

    .hero-text {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }



</style>



<script>
export default {
  layout: 'Landing',
  data(){
    return{
      image: "/landing/auto.jpg"
    }
  },
  computed: {
    serviceItems(){
       return this.$store.state.parent.category
    }
  },

}
</script>