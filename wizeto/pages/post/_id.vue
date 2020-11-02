<template>
<div>
    {{post}}
    <div v-if='post'>
        <post-card :post='post'></post-card>
    </div>
    
    <div v-else>
        Nothing post
    </div>
</div>
</template>

<script>
import PostCard from '../../components/PostCard'
export default {
    components: {
        PostCard,
    },
    computed:{
        post(){
            return this.$store.state.posts.mainPosts.find(v => v.id === parseInt(this.$route.params.id, 10))   
            // this.$route.params -> _id.vue 의 _
            // this.$route.params.id -> _id.vue 의 id 
            // 다시말해, pages/post/_id.vue 파일과 v.id가 일치하는 것을 찾는 것임. 
            // string으로 받기때문에 int로 10진수로 바꿔줘야 함. parseInt(foo, 10)
            // fetch() asyncData() 가 동적라우팅 매칭이 필요함.
        }
    }
}
</script>