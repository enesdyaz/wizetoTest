<template>
<div :class="{modal: isModal}" >
    
    <table style='font-size: 0.8rem;width: 95%;margin-bottom: 10px;color: #607D8A'>
                <tr style='text-align: left;'>
                    <th> <v-icon style='font-size: 1rem;'>mdi-chevron-down</v-icon>List</th> 
                </tr>
                <tr>
                    <td>
                        <ul class='parent' v-for="(p,i) in category" :key="i">
                            
                            
                            <div :class='{parent_item : p.toggle && p.child.length >0, bottom : true}'>
<!-- 1. Parent Category -->
                                <button   @click='toggle(p.id)'>
                                    <v-icon style='font-size: 1rem;padding-right: 6px;'>mdi-text</v-icon>
                                    <button v-if='!p.child.length < 1'>{{p.parent.toUpperCase()}}</button>
                                    <button v-else >{{p.parent.toUpperCase()}}</button>
                                </button>

                                    <div v-if='p.child.length < 1'><button style='float:right;margin-top: -20px; padding-right: 2px;'><v-icon style='font-size: 1rem;'>
                                        mdi-chevron-right</v-icon></button></div>
                                    <div v-else-if='p.toggle' ><v-icon style='font-size: 1.3rem;float:right;margin-top: -16px;'>mdi-chevron-down</v-icon></div>
                                    <div v-else><v-icon  style='font-size: 1.3rem;float:right;margin-top: -16px;'>mdi-chevron-right</v-icon></div>
                            </div>



                                <transition name='slide-fade'>
                                    <div v-if="p.toggle" style='border-top: transparent'>
<!-- 2. Child Category -->
                                    <li class='child' v-for='(c, index) in p.child' :key='index'>
                                        <v-icon style='font-size: 1rem;padding-right: 6px;'>mdi-square-small</v-icon>
                                        <button>{{c.child}}</button>
                                    </li>
                                    </div>
                                </transition>
                        </ul>
                    </td>
                </tr>
            </table>
            
</div>
</template>


<script>
export default {
    data(){
        return{
            dialog: false,
            isModal: false,
        }
    },
    computed:{
        category(){
            return this.$store.state.parent.category
        }
    },
    methods:{
        ModalInfo(i){
            this.isModal = i
        },
        onDialog(){
            alert('dialog')
        },
        onDelete(id){
            this.$store.dispatch('parent/delete', id)
        },
        toggle(id){
            console.log(id)
            this.$store.dispatch('parent/toggle', id)
        },
    },
}
</script>


<style lang="scss" scoped>
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


.bottom{
    border-bottom: 1px solid grey;
    padding: 10px 0;
}
.parent{
    .parent_item{
        border-bottom: 1px solid transparent;
        padding: 10px 0;
    }
}
.child{
    list-style:none;
    padding-left: 20px;
    font-size: 0.9rem;
        &:last-child{
        border-bottom: 1px solid grey;
        padding-bottom: 10px;
    }

}
.modal{
    display: none;
}
</style>