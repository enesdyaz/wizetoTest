<template>
<div>
        <div class='post_box'>
            <div class="description body-1 white--text pl-2">
                <nuxt-link :to="'/post/' + post.id">{{post.content}}</nuxt-link>
            </div>
            <div class="name body-2 white--text pl-2" >{{post.user.nickName}}</div>

            <div class="icons mt-2">
                <v-btn text ><v-icon class='white--text'>mdi-all-inclusive</v-icon></v-btn>
                <v-btn text @click='openComment'><v-icon class='white--text'>mdi-chat-outline</v-icon></v-btn>
                <v-btn text><v-icon class='white--text'>mdi-heart-outline</v-icon></v-btn>

                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn text v-bind="attrs" v-on="on" >
                            <v-icon class='white--text' >mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                    <div>
                        <v-btn dark color='red' @click='onRemovePost'>Remove</v-btn>
                        <v-btn dark color='orange' @click='onEditPost'>Edit</v-btn>
                    </div>
                </v-menu>
            </div>
            <template v-if='commentDialog'>
                <comment-form :postId="post.id" />
                <v-list>
                    <v-list-item v-for='comment in post.Comments' :key='comment.id'>
                        <v-list-item-avatar color='teal'>
                            <span>{{comment.user.nickName}} </span>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <h3></h3>
                            <div>{{comment.content}}</div>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

            </template>
            
        </div>
      

</div>
</template>

<script>
import CommentForm from '../comment/CommentForm'
export default {
    props:{
        post:{
            type: Object,
            required: true,  // 무조건
        }
    },
    data(){
        return{
            commentDialog: false
        }
    },
    methods:{
        onRemovePost(){
            this.$store.dispatch('posts/remove', {
                id: this.post.id
            })
        },
        onEditPost(){},
        openComment(){
            this.commentDialog = !this.commentDialog
        }
    }
}
</script>


<style lang="scss" scoped>
.post_box{
    width: 80%;
    margin: 10px auto;
    height: 10vh;
    background: #455a64;
}






</style>