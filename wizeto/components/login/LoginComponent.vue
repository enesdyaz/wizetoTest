<template>
    <div>
        <div class='card'>
            <div class="card_left">
                <div class="text-h5 login">Login</div>
            </div>

            <div class="card_right">

                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12" >
                                    <v-text-field dense single-line hide-details="off" v-model="email" :rules="emptyRules" label="email" required></v-text-field>
                                </v-col>

                                <v-col cols="12"  >
                                    <v-text-field dense single-line hide-details="off" v-model="password" :rules="emptyRules"  label="password" required ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class='pl-4 mt-2'>
                                <v-btn color='blue-grey mr-2' dark>cancel</v-btn>
                                <v-btn color='blue-grey' dark @click='onSubmitForm'>submit</v-btn>
                            </v-row>
                        </v-container>

                    </v-form>



            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        // input -------->
            email:'',
            password:'',


        // others -------->
            terms: false, 

        // rules ---------->
            emptyRules: [
                v => !!v || 'contents are required in this form'
            ],
            passwordCheckRules: [
                v => !!v || 'error',
                v => v === this.password || 'different password'
            ]
        }
    },
    methods:{

        onSubmitForm(){
            this.$store.dispatch('users/logIn', {
                email: this.email,
                password: this.password

            })
            .then(()=>{                     // 비동기라서 순서가 틀어질수가 있음.그래서 then으로 순서가 정확하게 만듦.
                  this.$router.push({       // 화면 전환
                path: '/'
                });
            })
            .catch(()=>{
                alert('failure')    // 비동기 실패시 에러메시지 
            })
        }

    }
}
</script>



<style lang="scss" scoped>
.card{
    width: 50%;
    height: 30vh;
    background: #fff;
    margin: 20% auto;
    

            .card_left{
            width: 40%;
            float: left;
            background: #546e7a;
            color: white;
            height: 30vh;
            }
            
            .card_right{
            width: 60%;
            float: left;
            height: 30vh;
            }

}
.login{
    line-height: 28vh;
    text-align: center;
}




</style>