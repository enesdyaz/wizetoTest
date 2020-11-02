<template>
<div>
    <div  :class="{modal: isModal || isEditModal || isCategoryModal}" >
        <div >
            <v-btn class= 'body-2' color='blue-grey' text><v-icon >mdi-chevron-down</v-icon>Service Category</v-btn>
        </div>

<!-- select1 -->
        <div class='select_box'>
            <div class = 'select_inner'>
                <div>
                    <v-chip-group v-model='select1' column>
                        <v-chip style='font-weight: bold'
                            v-for="(item, index) in categoryList" :key="index" 
                            label  color='blue-grey darken-2' text-color='white' 
                            :value="item"> {{item.toUpperCase()}} <v-icon style='padding-left: 9px; font-size: 1rem;'>mdi-chevron-down</v-icon>
                        </v-chip>
                    </v-chip-group>
                </div>
                <div>
                    <v-btn text  @click="isCategoryModal = true"><v-icon>mdi-shape-square-rounded-plus</v-icon></v-btn>
                </div>

<!-- select2 -->
        <br>
   
                <v-btn class= 'body-2' style='margin-left: -30px;' color='blue-grey' text><v-icon >mdi-chevron-down</v-icon>Service List </v-btn>
            
     <transition name='fade'>
            <div v-if='select1'>
                <div class='select2_inner'>
                    <v-chip-group column v-model='select2'  v-if='select1'>
                        <v-chip @click='editService(item.id)'
                        v-for="(item, index) in categoryName" :key="index"
                        label color='blue-grey darken-3' outlined draggable
                        >{{item.name}} - ${{item.price}}</v-chip>
                    </v-chip-group>
                </div>
            </div>
        </transition>
    </div>
</div>
        
    
<!-- add form -->
        <div class='add_form'>
            <v-btn text  @click="isModal = true"><v-icon>mdi-shape-square-rounded-plus</v-icon></v-btn>
        </div>
    </div>





<!-- service registration form -->    
    <transition name='fade'> 
        <div v-if='isModal' >
            <v-container >
                <service-registration-form  @ModalEmit="ModalInfo"/>
            </v-container>
        </div>
    </transition>

<!-- service category form -->
    <transition name='fade'> 
        <div v-if='isCategoryModal' >
            <v-container >
                <service-category-form  @ModalEmit="ModalInfo"/>
            </v-container>
        </div>
    </transition>
<!-- EDIT registration form -->  
    <transition name='fade'> 
        <div v-if='isEditModal' >
            <v-container >
                <service-registration-form-edit :service_id='service_id' @ModalEmit="ModalInfo"/>
            </v-container>
        </div>
    </transition>  





</div>
</template>


<script>
import ServiceRegistrationForm from '../../components/Product/ServiceRegistrationForm'
import ServiceRegistrationFormEdit from '../../components/Product/ServiceRegistrationFormEdit'
import ServiceCategoryForm from '../../components/Product/ServiceCategoryForm'
export default {
    components: {
        ServiceRegistrationForm,
        ServiceRegistrationFormEdit,
        ServiceCategoryForm,
    },
    data () {
        return {
            dialog: false,
            isModal: false,
            isEditModal: false,
            items: this.$store.state.category.service_items,
            select1: '',
            select2: '',
            nameList: [],
            service_id: '',
            isCategoryModal: false,
        }
    },
    computed:{
        categoryList(){
            let array = this.items.map(function(e){ return e.category})
            return Array.from(new Set(array))
        },

        categoryName(){
            let select = this.select1
            if(this.select1===''){
                return null
            }else{
                return this.items.filter(function(e){
                    if(e.category == select){
                        return e.name
                    }
                    
            })
        }}
   
    
    },

    methods:{
        ModalInfo(i){
            this.isModal = i
            this.isEditModal = i
            this.isCategoryModal = i
        },
        editService(id){
            this.isEditModal = true
            this.service_id = id
            // this.$store.category.dispatch('editData', todo)
        }
    }
  }
</script>



<style lang="scss" scoped>

.select_box{
    margin-left: 10px;

    .select_inner{
        margin-top: 12px;
        border-radius: 14px;
        padding: 0 20px;
        // white-space: nowrap;
    }
    .select2_inner{
    overflow: scroll;
}
}

.add_form{
    margin-left: 2%;
}
.modal{
    border-radius: 10px;
    display: none;
}


.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}


</style>