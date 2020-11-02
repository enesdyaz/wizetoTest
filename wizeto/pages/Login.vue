<template>
<div>
    <div>
        <login-component />
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
    }
}
</script>