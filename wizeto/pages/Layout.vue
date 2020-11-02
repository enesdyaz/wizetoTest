<template>
    <div>
        <v-container>
            <v-row class='row'>
                <v-col class='cols_top' cols='12'>
                    <div style='text-align: center;line-height: 16vh;' class='carousel'>
                        <v-btn  text  style='border: 1px dotted white; color: white;'><v-icon style='font-size: 3rem;'>mdi-plus</v-icon></v-btn>
                    </div>
                </v-col>
                <v-col class='cols_left' cols='12' md='4'>
                    <div class='square_top'></div>
                    <div class='square_bottom'></div>
                </v-col>
                <v-col class='cols_right' cols='12' md='8'>
                    <div class='main_box'></div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style lang="scss" scoped>
.row{
    width: 1000px;
    .cols_top{
        height: 20vh;
        .carousel{
            height: 17vh;
            background: #78909c;
            border-radius: 10px;
        }
    }
    .cols_left{
        height: 80vh;

        .square_top{
            height: 30vh;
            background: #78909c;
            margin-bottom: 20px;
            border-radius: 10px;


        }
        .square_bottom{
            height: 43vh;
            background: #78909c;
            border-radius: 10px;



        }

    }
    .cols_right{
        .main_box{
            height: 75vh;
            background: #78909c;
            border-radius: 10px;
        }
    }
}

</style>


<script>
export default {
}
</script>