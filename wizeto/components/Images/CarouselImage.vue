<template>
<div>
    <div>
        <div style='margin-left: -26px;margin-top: -28px;'>
            <v-btn class='register subtitle-2' text color='blue-grey' >
                <v-icon class='body-1 pr-2'>mdi-plus</v-icon> Carousel Image Information 
            </v-btn>
            <v-switch style='display: inline-block;float: right;margin-top: 2px;' color='primary' hide-details v-model="addOn" inset dense ></v-switch>

        </div><br>
        <table>
                <tr>
                    <th ><v-icon class='vIcon'>mdi-chevron-down</v-icon>carousel Image</th> 
                    <td v-if='carouselImage.length<1'>  
                        <input style='border: none'  type="file" @change='onFileChange' multiple>
                    </td>
                    <td v-else style='border; 1px solid blue'>
                    
                        <div v-for="(image, index) in carouselImage" :key='index'  style='width: 50%; float: left;padding-right: 8px;'>
                            <div style='margin: 10px; position: relative'>
                                <img  height='30%' class='image'  :src="image" />
                                    <button @click="removeImage(index)" 
                                    style='border: 2px solid white;position: absolute;top:-15px;right: -15px;
                                    ;background-color: #455A64; width:25px; height: 25px;border-radius: 12.5px;'>
                                        <v-icon style='font-size: 12px; color: white;margin-top:-2px;'>mdi-close</v-icon>
                                    </button>
                            </div>
                        
                        </div>
                    </td>     
                </tr>
                <tr>
                    <th></th>
                    <td>
                        <v-btn style='margin-left: 370px;' small dark color='blue-grey' @click='onEnter'>SAVE</v-btn>        
                    </td>
                </tr>
        </table>

    </div>
</div>
</template>



<style lang="scss" scoped>
.fontColorSetup{
    color: #607D8A;
    background-color: whitesmoke;
}

.colorBox{
    width: 50px;
    height: 40px;
    border: none;
}
.image{
    margin: 0;
}

table{
    width: 100%;
    font-size: 0.8rem;
    text-align: left;
    @extend .fontColorSetup;
    th{width: 30%; vertical-align: top;}
    td{width:70%;}
    input{width: 100%; border: 1px solid grey; padding-left: 8px;border-radius: 4px;}
    textarea{
        width:100%;
        margin-top: 20px;
        @extend input;
    }
    
}
.vIcon{
    @extend .fontColorSetup;
    font-size: 1rem;
}



.slide-fade-enter-active {
    transition: all .5s ;
}
.slide-fade-leave-active {
    transition: all .5s ease cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(10px);
    opacity: 0;
}

</style>

<script>

export default {

    data(){
        return{
            carouselImage: [],
            addOn: false,
        }
    },

    methods:{
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files);
        },

        createImage(files) {
            var vm = this;
            for (var index = 0; index < files.length; index++) {
                var reader = new FileReader();
                reader.onload = function(event) {
                const imageUrl = event.target.result;
                vm.carouselImage.push(imageUrl);
                }
                reader.readAsDataURL(files[index]);
            }
        },
        removeImage: function (id) {
            console.log(id)
            this.$store.dispatch('image/deleteCarouselData', id)

        },
        ModalInfo(i){
            this.isModal = i
        },
        onEnter(){
            console.log(this.carouselImage)
            this.$store.dispatch('image/addCarouselData', {
                carouselImage:this.carouselImage,
                addOn: this.addOn,
            } ).then(()=>{alert('successfully inserted')}).catch(()=>{alert('error')})
        }
    }
}
</script>