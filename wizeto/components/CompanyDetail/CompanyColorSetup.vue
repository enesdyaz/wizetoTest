<template>
<div>
        <v-btn class='register subtitle-2' style='margin-left: -27px;' text color='blue-grey' >
                <v-icon class='body-1 pr-2'>mdi-plus</v-icon> Style Setup
        </v-btn>
    <div>
        <table>
                <tr>
                    <th><v-icon class='vIcon'>mdi-chevron-down</v-icon>Font Color</th> 
                    <td><input class='colorBox' v-model='fontColor' v-on:keyup.enter="onEnter" type="color" ></td>
                </tr>
                <tr>
                    <th><v-icon class='vIcon'>mdi-chevron-down</v-icon>Background Color</th> 
                    <td><input class='colorBox' style='border: none' v-model='backgroundColor' v-on:keyup.enter="onEnter" type="color" ></td>
                </tr>

                <tr>
                    <th><v-icon class='vIcon'>mdi-chevron-down</v-icon>Background Image</th> 
                    <td v-if='!backgroundImage'>  
                        <input type="file" @change='onFileChange'>
                    </td>
                    <td v-else>
                        <img class='image' :src="backgroundImage" />
                        <button @click="removeImage" style='padding-left: 10px'>Remove image</button>
                    </td>     
                </tr>
                
                <tr>
                    <th>

                    </th>
                    <td>
                        <v-btn style='margin-left: 370px;' small dark color='blue-grey' @click='onEnter'>SAVE</v-btn>        
                    </td>
                </tr>
        </table>
    </div>
</div>
</template>



<style lang="scss" scoped>

.image{
    width: 240px;
    padding-left: 10px;    

}
.colorBox{
    width: 50px;
    height: 40px;
    border: none;
}

table{
    width: 100%;
    color: #607D8A;
    font-size: 0.8rem;
    text-align: left;
    th{width: 30%}
    td{width:70%;}
    input{width: 100%; border: 1px solid whitesmoke; padding-left: 8px;border-radius: 4px;}
    textarea{
        width:100%;
        margin-top: 20px;
        @extend input;
    }
    
}
.vIcon{
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

import ServiceRegistrationForm from '../../components/Product/ServiceRegistrationForm'
export default {
    components:{
        ServiceRegistrationForm
    },
    data(){
        return{
            fontColor: '',
            backgroundColor:'',
            backgroundImage:''
        }
    },

    computed:{
        category(){
            return this.$store.state.parent.category
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
                vm.backgroundImage = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.backgroundImage = '';
        },

        ModalInfo(i){
            this.isModal = i
        },
        onEnter(){
            if(this.category2){
                const index = this.category.findIndex(v => v.parent === this.category2)
                this.$store.dispatch('parent/addChild', {
                id: Date.now(),
                index: index,
                child: this.category1,
                content: [],
                }).then(()=>{this.category1=''})
                .catch(()=>{console.log('fail')})
            } 
            else{
                this.$store.dispatch('parent/addParent', {
                id: Date.now(),
                parent: this.category1,
                child: [],
                content: [],
                toggle: false
            }).then(()=>{ this.category1=''}).catch(()=>{ console.log('fail')})
            }
        }
    }
}
</script>