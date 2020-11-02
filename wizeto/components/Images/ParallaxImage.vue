<template>
<div>
    <div>
        <div style='margin-left: -26px;margin-top: -28px;'>
            <v-btn class='register subtitle-2' text color='blue-grey' >
                <v-icon class='body-1 pr-2'>mdi-plus</v-icon> Main Image Information 
            </v-btn>
            <v-switch style='display: inline-block;float: right;margin-top: 2px;' color='primary' hide-details v-model="addOn" inset dense ></v-switch>

        </div><br>
        <table>
                <tr>
                    <th ><v-icon class='vIcon'>mdi-chevron-down</v-icon>Parallax Image</th> 
                    <td v-if='!parallaxImage'>  
                        <input style='border: none'  type="file" @change='onFileChange'>
                    </td>
                    <td v-else>
                        <img class='image' :src="parallaxImage" />
                        <button @click="removeImage" style='padding-left: 10px'>Remove image</button>
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
    width: 240px;
    padding-left: 10px;    
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
            parallaxImage: '',
            addOn: false,
        }
    },

    methods:{
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },

        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.parallaxImage = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.parallaxImage = '';
        },
        ModalInfo(i){
            this.isModal = i
        },
        onEnter(){
            console.log(this.parallaxImage)
            this.$store.dispatch('image/addData', {
                parallaxImage:this.parallaxImage,
                addOn: this.addOn
            } ).then(()=>{alert('successfully inserted')}).catch(()=>{alert('error')})
        }
    }
}
</script>