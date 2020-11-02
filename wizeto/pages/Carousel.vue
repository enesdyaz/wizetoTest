<template>
<div>
    <br>

    <div>
        <div>
                <div>
                    <v-col class='nuxt_side'> 
                        <carousel-image />
                    </v-col>
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

</style>

<script>
import MobileIphone from '../pages/device/MobileIphone'
import CarouselImage from '../components/Images/CarouselImage'


export default {
    components:{
        MobileIphone,
        CarouselImage,
    },
    data () {
        return {

        }
    }
}
</script>
