<template>
<div>
    <br>

    <div>
        <div>
                <div>
                    <v-col class='nuxt_side'> 
                        <parallax-image />
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
import ParallaxImage from '../components/Images/ParallaxImage'


export default {
    components:{
        MobileIphone,
        ParallaxImage,
    },
    data () {
        return {

        }
    }
}
</script>
