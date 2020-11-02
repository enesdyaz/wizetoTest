<template>
    <div class='body'>
        <div class='login_top'></div>
        <div class="login_left">
            <div v-if='!me'>
                <signup-component />
            </div>
            <div v-else>
                <login-component />
            </div>
            
            
        </div>
        <div class="login_right">
            <post-component />
        </div>

    </div>
</template>

<style lang="scss" scoped>
.body{
    margin: 0;padding: 0;
}

.login_top{
    height: 20vh;
    background: #cfd8dc
}
.login_left{
    width: 30%;
    height: 80vh;
    background:#b0bec5;
    float: left;
}
.login_right{
    width: 70%;
    background: #90a4ae;
    float: left;
    height: 80vh;
}


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