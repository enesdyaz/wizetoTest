<template>
    <div>
        <v-card>
            <v-form ref='form' v-model='commentForm' @submit.prevent = 'onSubmitForm'>
                <v-textarea outlined auto-grow clearable label='any comment'
                 :hide-details='hideDetails' 
                :success-messages = 'successMessages'
                :success = 'success'
                @input = 'onChangeTextArea' 
                v-model='content'>
                </v-textarea>
                <v-btn type='submit' color='green' right>SUBMIT</v-btn>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    props:{
        postId:{
            type: Number,
            required: true
        }
    },

    data(){
        return {
            commentForm: '',
            successMessages: '',
            success: false,
            content:'',
            hideDetails: true,
        }
    },
    computed:{
        me(){
            return this.$store.state.users.me
        }
    },

    methods: {
        onChangeTextArea(){
            this.hideDetails = true;   // data를 보낸 이후 textarea 창 깨끗하게 함
            this.success = false;
            this.successMessages = ''
        },
        onSubmitForm(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('posts/addComment', {
                    id: Date.now(),
                    Content : this.content,
                    PostId: this.postId,
                    User: {
                        NickName: this.me.NickName
                    }

                }).then(()=>{
                    this.hideDetails = false
                    this.success = true
                    this.successMessages = 'success'
                    this.content=''
                }).catch(()=>{})
            }
        }
    }
}
</script>
