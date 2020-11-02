<template>
<div>
    <div>
        <signup-component />
    </div>
</div>
</template>

<style lang="scss" scoped>


</style>

<script>
import LoginComponent from '../components/login/LoginComponent'
import PostComponent from '../components/login/PostComponent'
import SignupComponent from '../components/login/SignupComponent'
export default {
    components:{
        LoginComponent,
        PostComponent,
        SignupComponent,
    },
    computed: {
        me(){
            return this.$store.state.users.me;
        }
    },
    watch:{
        me(value){
            if(value){
                this.$router.push({  // programming 적으로 넘김
                    path: '/', 
                })
            }
        }
    },
    middleware: 'anonymous'
}
</script>