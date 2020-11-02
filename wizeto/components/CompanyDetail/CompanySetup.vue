<template>
<div>
    <div>
        <div style='margin-left: -26px;margin-top: -28px;'>
            <v-btn class='register subtitle-2' text color='blue-grey' >
                <v-icon class='body-1 pr-2'>mdi-plus</v-icon> Register Company Information 
            </v-btn>
             <v-switch style='display: inline-block;float: right;margin-top: 2px;' color='primary' hide-details v-model="addOn" inset dense ></v-switch>

        </div>
        <br>{{companyInfo}}
        <table>
                <tr style='border: 1px solid green;'>
                    <th><v-icon class='vIcon'>mdi-chevron-down</v-icon>Company Name</th> 
                    <td><input  v-model='companyName' v-on:keyup.enter="onEnter" type="text" ></td>
                </tr>
                <tr>
                    <th><v-icon class='vIcon'>mdi-chevron-down</v-icon>Company Type</th> 
                    <td ><input  v-model='companyType' v-on:keyup.enter="onEnter" type="text" placeholder='ex.retail, autoservice' /></td>
                </tr>
                <tr>
                    <th><v-icon class='vIcon'>mdi-chevron-down</v-icon>Address</th> 
                    <td ><input  v-model='companyAddress' v-on:keyup.enter="onEnter" type="text"  /></td>
                </tr>
                <tr>
                    <th><v-icon class='vIcon'>mdi-chevron-down</v-icon>PhoneNumber</th> 
                    <td ><input  v-model='companyPhoneNuymber' v-on:keyup.enter="onEnter" type="text"  /></td>
                </tr>
                <tr>
                    <th><v-icon class='vIcon'>mdi-chevron-down</v-icon>Description</th> 
                    <td ><textarea  v-model='companyDescription' v-on:keyup.enter="onEnter" type="text" ></textarea></td>
                </tr>
        </table><br><br>


         <v-btn class='register subtitle-2' style='margin-left: -27px;' text color='blue-grey' >
                <v-icon class='body-1 pr-2'>mdi-plus</v-icon> Style Setup
        </v-btn>
        <table>
                <tr>
                    <th><v-icon class='vIcon'>mdi-chevron-down</v-icon>Font Color</th> 
                    <td><input class='colorBox' v-model='fontColor' v-on:keyup.enter="onEnter" type="color" ></td>
                </tr>
                <tr>
                    <th><v-icon class='vIcon'>mdi-chevron-down</v-icon>Background Color</th> 
                    <td><input class='colorBox' style='border: none' v-model='backgroundColor' v-on:keyup.enter="onEnter" type="color" ></td>
                </tr><br>

                <tr>
                    <th><v-icon class='vIcon'>mdi-chevron-down</v-icon>Background Image</th> 
                    <td  v-if='!backgroundImage'>  
                        <input style='border: none'  type="file" @change='onFileChange'>
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

import ServiceRegistrationForm from '../../components/Product/ServiceRegistrationForm'
export default {
    components:{
        ServiceRegistrationForm
    },
    data(){
        return{
            companyName: '',
            companyType: '',
            companyDescription: '',
            companyAddress: '',
            companyPhoneNuymber: '',

            fontColor: '#000000',
            backgroundColor: '#fff',
            backgroundImage: null,

            addOn: false,
        }
    },


    computed:{
        category(){
            return this.$store.state.parent.category
        },
        companyInfo(){
            const companyInfo = this.$store.state.company.companyInfo
            console.log(companyInfo)
            this.companyName=companyInfo.companyName,
            this.companyType=companyInfo.companyType,
            this.companyDescription=companyInfo.companyDescription,
            this.companyAddress=companyInfo.companyAddress,
            this.companyPhoneNuymber=companyInfo.companyPhoneNuymber,

            this.fontColor=companyInfo.fontColor,
            this.backgroundColor=companyInfo.backgroundColor,
            this.backgroundImage=companyInfo.backgroundImage,

            this.addOn = companyInfo.addOn 
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
            this.$store.dispatch('company/addData', {
                companyName: this.companyName,
                companyType: this.companyType,
                companyDescription: this.companyDescription,
                companyAddress: this.companyAddress,
                companyPhoneNuymber: this.companyPhoneNuymber,

                fontColor: this.fontColor,
                backgroundColor: this.backgroundColor,
                backgroundImage:this.backgroundImage,

                addOn: this.addOn
            } ).then(()=>{alert('data have been successfully inserted ')}).catch(()=>{alert('error')})
        }
    }
}
</script>