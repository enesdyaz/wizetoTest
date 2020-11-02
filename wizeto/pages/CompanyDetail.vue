<template>
<div>
    <br>

    <div>
        <div>
                <div>
                    <v-col class='nuxt_side'> 
                        <company-setup /> 
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
import CompanySetup from '../components/CompanyDetail/CompanySetup'
import CompanyColorSetup from '../components/CompanyDetail/CompanyColorSetup'


export default {
    components:{
        MobileIphone,
        CompanySetup,
        CompanyColorSetup,
    },
    data () {
        return {

        }
    }
}
</script>
