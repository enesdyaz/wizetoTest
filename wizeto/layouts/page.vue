<template>
  <v-app class='app'>
    <div>
<!-- top_app_bar -->
        <div class='menu'>
          <div class='image_wrap'>
            <div class='menu_item_image'> <Nuxt-link class='nuxt_link' to='/'><img src="../assets/image/logo/logo_png.png"></Nuxt-link> </div>
          </div>
          

              <!-- <div class='menu_item'> <v-btn  color='indigo' class='pr-12' large  text_color="white" dark ><v-icon style='padding-right: 10px; '>mdi-calendar-check-outline</v-icon> Booking</v-btn> </div>
              <div class='menu_item'> <v-btn  color='indigo' class='pr-10' large  text_color="white" dark ><v-icon style='padding-right: 10px; '>mdi-book-open</v-icon> Blogging</v-btn> </div>
              <div class='menu_item'> <v-btn  color='indigo' class='pr-7' large  text_color="white" dark ><v-icon style='padding-right: 10px; '>mdi-elevator</v-icon> Inventory</v-btn> </div>
              <div class='menu_item'> <v-btn  color='indigo' class='pr-8' large   text_color="white" dark ><v-icon style='padding-right: 10px; '>mdi-lan</v-icon> Managing</v-btn> </div>
              <div class='menu_item'> <v-btn  color='indigo' class='pr-8' large   text_color="white" dark ><v-icon style='padding-right: 10px; '>mdi-file-document-edit-outline</v-icon> Document</v-btn> </div> -->

              <div class='menu_item'> <nuxt-link style='text-decoration: none' to='/Product'><v-btn  text> Product/Service </v-btn></nuxt-link> </div>
              <div class='menu_item'> <nuxt-link style='text-decoration: none' to='/Booking'><v-btn  text> Booking </v-btn></nuxt-link> </div>
              <div class='menu_item'> <v-btn  text>Commenting </v-btn> </div>
              <div class='menu_item'> <v-btn  text>Managing </v-btn> </div>
              <div class='menu_item'> <v-btn  text><nuxt-link class='nuxt_link' to='/layout'> Layout </nuxt-link>  </v-btn> </div>
              <div class='menu_item'> <v-btn  text><nuxt-link class='nuxt_link' to='/Login'> Login </nuxt-link>  </v-btn> </div>
              <div class='menu_item'> <v-btn  text><nuxt-link class='nuxt_link' to='/Profile'> Profile </nuxt-link>  </v-btn> </div>
              <div class='menu_item'> <v-btn  text><nuxt-link class='nuxt_link' to='/device/MobilephoneClientView'> Client </nuxt-link>  </v-btn> </div>
              <div class='menu_item'> <v-btn  text><nuxt-link class='nuxt_link' to='/test'> Test Mode </nuxt-link>  </v-btn> </div>
              <div class='menu_item'> <v-btn  text><nuxt-link class='nuxt_link' to='/productCategory'> product Category </nuxt-link>  </v-btn> </div>
              <div class='menu_item'> <v-btn  text><nuxt-link class='nuxt_link' to='/css-1'> css </nuxt-link>  </v-btn> </div>
      </div>


      <div class='account'>
            <div v-if='!me' class='account_wrap' >
                <div class='login'> <v-btn color='blue-grey' to="/login" small outlined style='font-size: 0.7rem;'><v-icon style='font-size: 1rem;padding-right: 5px;'>mdi-account</v-icon> Log in</v-btn></div>
                <div class='signup'> <v-btn color='blue-grey' to="/signup" small outlined style='font-size: 0.7rem;'><v-icon style='font-size: 1rem;'></v-icon> Sign up</v-btn></div>
            </div>
            <div v-else class='account_wrap'>
                <div class='login'><v-icon>mdi-account</v-icon>{{me.nickName}}</div>
                <div class='signup'> <v-btn color='blue-grey' small outlined style='font-size: 0.7rem;' @click='onLogOut'><v-icon style='font-size: 1rem;'></v-icon> Logout</v-btn></div>

            </div>

      </div>


      <div class='content'>
        <nuxt />
      </div>
  </div>
</v-app>
</template>

<style lang="scss" scoped>

.button_wrap{
  
  &:hover{ 
    display: inline-block;
    background: #303f9f;
    border-radius: 3px;
    margin-left: 4%;

     .v_icon{
      color: white;
    }

     .v_btn{
      color: white;
    }
  }
 
}


.app{
      .menu{
          width: 20%;
          height: 100vh;
          float: left;

          .image_wrap{
            text-align: center;
            padding: 10%;
            margin-bottom: 10%;
                 .menu_item_image{
                display: inline-block;
                } 
           }
           .menu_item{
             margin-left: 25%;
             margin-bottom: 5%;
           }
          
    }
    .account{
      background: whitesmoke;;
      width: 80%;
      height: 5vh;
      float: left;
      .account_wrap{
        margin-right: 2%;
        float: right;
        line-height: 5vh;
        .signup{padding-left: 4px; float: left;}
        .login{padding-left: 4px; float: left;}
      }
  
      

    }
    .content{
          background: whitesmoke;
          width: 80%;
          height: 100vh;
          float: left;
    }
}


img{
  width: 120px;
}
</style>

<script>
import MobileIphone from '../pages/device/MobileIphone';
import MobilephoneClientView from  '../pages/device/MobilephoneClientView'


export default {
  components:{
    MobileIphone,  // Mobile I phone 
    MobilephoneClientView, 
  },
  data () {
    return {
    }
  },
  computed: {
    me(){
      return this.$store.state.users.me
    }
  },
  methods:{
    onLogOut(){
      this.$store.dispatch('users/logOut')
    }
  }
}
</script>
