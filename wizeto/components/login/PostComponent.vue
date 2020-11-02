<template>
<div>
        <div class='post_box'>
            <post-form  />
            <div class="name body-1 white--text pl-2" >Harry</div>
            <div class="description body-2 white--text pl-2">Hello This is system.</div>
            <div class="icons mt-2">
                <v-btn text ><v-icon class='white--text'>mdi-all-inclusive</v-icon></v-btn>
                <v-btn text><v-icon class='white--text'>mdi-chat-outline</v-icon></v-btn>
                <v-btn text><v-icon class='white--text'>mdi-heart-outline</v-icon></v-btn>
                <v-btn text><v-icon class='white--text'>mdi-dots-horizontal</v-icon></v-btn>
            </div>
        </div>
</div>
</template>


<style lang="scss" scoped>
.post_box{
    width: 80%;
    margin: 10px auto;
    height: 10vh;
    background: #455a64;
}
</style>

<script>
import PostForm from '../Post/PostForm'
export default {
    components:{
        PostForm,
    },
    data(){
        return{

        }
    },
    computed:{
        me(){
            return this.$store.state.users.me
        }
    }
}
</script>