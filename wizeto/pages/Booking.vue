<template>
<div>
      <br>

      <div>
          <div>
                <v-btn class='register subtitle-2' text color='blue-grey' >
                  <v-icon class='body-1 pr-2'>mdi-plus</v-icon> Setup your Booking Preference
                </v-btn>
                <div>
                      <v-col class='nuxt_side'> <booking-setup /></v-col>
                </div>
          </div>


          <div>
                <v-col class='iphone_side' > <mobile-iphone /></v-col>
          </div>
            
  
      </div>
</div>
</template>

<style lang="scss" scoped>
.main_section{
  margin: 0 auto;
}

.register{
  margin-left: 3%;;
}
.nuxt_side{
  width: 50%;
  padding-left: 5%;
  float: left;
}
.iphone_side{
  width: 40%;
  padding: 0;
  float: left;
}

@media screen and (max-width: 992px) {

  .menu_item{
    display: none;
  }
  .show{
    display: none;
  }
  .nuxt_side{
    width: 100%;
    padding-left: 5%;
    float: left;
}
.iphone_side{
    width: 100%;
    padding: 0;
    float: left;
}
}

/* On screens that are 600px wide or less, the background color is olive */
@media screen and (max-width: 600px) {
  body {
    background-color: olive;
  }
  .nuxt_side{border-radius: 0; padding: 10px; margin: 20px 0 ;}
  .iphone_side{display: none;padding:10px; margin: 0;}
  .menu_item{
    display: none;
  }
  .show{
    display: block;
    text-align: center;
    .show_container{
      padding-top: 5px;
    }
  }


}


</style>

<script>
import MobileIphone from '../pages/device/MobileIphone'
import BookingSetup from '../components/Booking/BookingSetup'


export default {
  components:{
    MobileIphone,
    BookingSetup,
  },
  data () {
    return {
      clipped: false,
      drawer: false,

      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Product',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Wizeto'
    }
  }
}
</script>
