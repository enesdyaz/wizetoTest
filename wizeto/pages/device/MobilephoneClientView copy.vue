<template>

  <div class='background'>
    <div class='left_box'>
      <div class='left_banner'>
        <div class='image'></div>
      </div>

      <div class='left_top_box'>
              <br>
              <v-btn class='register' text color='blue-grey' >
                <v-icon>mdi-plus-outline</v-icon> Select your service
              </v-btn>
<!-- new -->
            <div>

            <div class='select_box'>
               <div class = 'select_inner'>
                  <div>
                      <v-chip-group v-model='select1'>
                          <v-chip 
                              style='font-weight: bold; padding: 0 10px;'
                              text-color='white'
                              v-for="(item, index) in firstSelect" :key="index" 
                                color='teal' light  small
                              :value="item"> {{item.toUpperCase()}} <v-icon style='padding-left: 9px; font-size: 1rem;'>mdi-chevron-down</v-icon>
                          </v-chip>
                      </v-chip-group>
                    </div>
                  </div>
              </div>
      </div>
  </div>
  <!-- select2 -->
  <div>


<transition name='fade'>
  <div v-if='select1'>
    <v-list dense style='background: #eceff1; margin: 10px auto; padding: 25px;border-radius: 15px; width: 90%;' >
      <v-list-item-group v-model="select2" color="primary" >

        <v-list-item style='background: #fff; margin: 10px 0;border-radius: 30px;' @click="detailList(item.id)" :value="item.id" v-for="(item, i) in secondSelect" :key="i" >

            <v-list-item-icon >
              <v-icon  color="pink">mdi-vector-square</v-icon>
            </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title style='font-size: 1rem' v-text="item.name"></v-list-item-title>
              </v-list-item-content>


                <v-list-item-icon style='padding-left: 40px;'>
                <v-icon style='font-size: 1rem;' color="purple">mdi-currency-usd</v-icon>
                <v-list-item-title style='font-size: 1rem;color: purple;' >{{item.price}}</v-list-item-title>
              </v-list-item-icon>
        
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </div>
</transition>
  </div>
</div>



    <div class='right_box'>
      <div class='right_top_box'>

       
            <div>
              <v-icon>mdi-chevron-down</v-icon> Summary  
            </div>


        <div v-if='select3' class="summary_wrap">
            <div v-if='select3.image'>
              <img style='width: 150px;' :src="select3.image" :alt="select3.name">
            </div>
      
            <div class='summary'>
              <div>
                <div class='overline'>{{select3.category}}</div>
                <div class='title'>{{select3.name}}</div>
                <div class='caption'> {{select3.description}}</div>
              </div>
              <br>
              <div style='margin-top: -20px;margin-left: -5px;'>
                  <v-rating class='float-left' :value="4.5" color="amber" dense half-increments readonly size="14" ></v-rating>
                  <div class="grey--text ml-4 pt-1 caption">4.5 (413)</div>
                </div>
                <br>
              <div class='body-2'>
                Duration: {{select3.duration}} min
              </div>
              <br>
              <div class='h5' style='color: #424242'>
                AU$ {{select3.price}}
              </div>

              <br>
              <v-btn color='blue-grey darken-4' @click="isBooking = !isBooking" dark outlined>BOOKING</v-btn>
              <br>
              
            <transition name='fade'>
              <div v-if='isBooking'>
                <div style='margin-top: 30px;'>
                    <booking-index />
                </div>
              </div>
            </transition>
              
        </div>



        </div>


      </div>
    </div>

</div>
</template>

<style lang="scss" scoped>



.v_chip_group{
  margin-top: 30px;
  margin-left: 3%;
  .v_chip{
  width: 100%;
  height: 60px;
    .detail_chip{
      font-size: 1rem;
    }
}
}

.background{
  background: #eceff1;
  width: 1080px;

    .left_box{
      width: 60%;
      float: left;

      .left_banner{
        width: 90%;
        height: 200px;
        margin: 0 auto;
        border-radius: 10px;
        margin-top: 10px;
        .image{
          border-radius: 10px;
          background-image: url('../../assets/image/banner/banner.jpg');
          background-color: #cccccc;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          width: 100%;
          height: 100%;

        }
      }

      .left_top_box{
          background: rgb(233, 231, 231, 0.4);
          border-radius: 20px;

          width: 90%;
          height: 15vh;
          margin: 0 auto;
          margin-top: 5%;

          .category_container{
            .category_wrap{
              padding-left: 3%;
              .category{
                border: 1px solid red;
                margin: 10px;
                .v_btn{
                  padding: 0 8px;
                  margin: 4px 0;
                  border: 1px solid blue;
                }

            }
          }
        }
      }
    }

.select_box{
    margin-left: 10px;

    .select_inner{
        margin-top: 12px;
        padding: 0 20px;
        white-space: nowrap;
    }
   
}

 .select2_inner{
        background: rgb(233, 231, 231, 0.4);
        border: 1px solid red;
        margin-top: 100px;
        overflow: scroll;
        border-radius: 20px;

        width: 100%;
        height: 5vh;
        
}

.right_box{
  height: 90vh;
  width: 40%;

  float: left;
  border-left: 1px solid #fff;

    .right_top_box{
      border-radius: 10px;
      width: 90%;
      margin: 0 auto;
      margin-top: 2%;


        .summary_wrap{
          padding: 10px;
          margin: 10px 0;
}


    }

}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

}
</style>


<script>
import BookingIndex from '../../components/Booking/BookingIndex'
export default {
    components:{
      BookingIndex
    },
    data () {
        return {
            items: this.$store.state.category.service_items,
            select1: '',
            select2: '',
            select3: '',
            selectedItem: this.categoryName, 
            search: '',

            loading: false,
            selection: 1,

            isBooking: false,
        }
    },
    computed:{
    
      searching () {
        if (!this.search) return this.items

        const search = this.search.toLowerCase()

        return this.items.filter(item => {
          const text = item.title.toLowerCase()
          return text.indexOf(search) > -1
        })
      },
      firstSelect(){
            let array = this.items.map(function(e){ return e.category})
            return Array.from(new Set(array))
      },
      secondSelect(){
            let select = this.select1
            if(this.select1===''){
                return null
            }else{
                return this.items.filter(function(e){
                    if(e.category == select){
                        return e.name
                    }
                    
            })
        }
      }
    },
    methods:{
      detailList(id){
        let list = ''
        this.items.filter(function(e){
            if(e.id == id){
                list = e
            }})
          this.select3 = list

      },
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    
      
    }


}
</script>