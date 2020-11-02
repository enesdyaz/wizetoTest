<template>
    <div>
        <v-card>
            <v-container>
                <v-form ref='form' v-model='validForm' @submit.prevent = 'onSubmitForm'> 
                    <v-textarea outlined auto-grow clearable label='any text' 
                    :hide-details='hideDetails' 
                    :success-messages = 'successMessages'
                    :success = 'success'
                    @input = 'onChangeTextArea' 
                    v-model='content'
                    > </v-textarea>
                    <v-btn type='submit' color='green' absolute right>SUBMIT</v-btn>
                    <v-btn color='green'>IMAGE upload</v-btn>

                </v-form>
            </v-container>
        </v-card>
    </div>
</template>

<script>

export default {
    data(){
        return{
            successMessages: '',
            success: false,
            validForm: '',
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
                this.$store.dispatch('posts/add', {
                    content : this.content,
                    user: {
                        nickName: this.me.nickName
                    },
                    comments: [],
                    images: [],
                    id: Date.now(),
                    createdAt: Date.now()
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