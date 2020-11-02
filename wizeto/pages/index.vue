<template>
    <div class='body'>
        <div class='login_top'></div>
        <div class="login_left">
            <div>
                <post-form />
            </div>
            <div>
            </div>
            
        </div>
        <div class="login_right">
            <post-components v-for="post in mainPosts" :key='post.id' :post='post' />
        </div>

    </div>
</template>


<script>
import PostComponents from '../components/Post/PostComponents'
import PostForm from '../components/Post/PostForm'
export default {
    components:{
        PostComponents,
        PostForm,
    },
    computed: {
        me(){
            return this.$store.state.users.me;
        },
        mainPosts(){
            return this.$store.state.posts.mainPosts;
        },
        hasMorePosts(){
            return this.$store.state.posts.hasMorePosts
        }
    },

    // infinite scroll
    fetch({store}){
        store.dispatch('posts/loadPosts')
    },
    mounted(){
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy(){   // 메모리 문제로 사용한 후 제거 해야ㅏㅁ
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {    // hook 간에 순서도 중요함.
        onScroll(){
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 200){
                if(this.hasMorePosts){
                    this.$store.dispatch('posts/loadPosts')
                }
            }
        }
    },
}
</script>

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