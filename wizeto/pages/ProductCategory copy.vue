<template>
  <div>
    <form @submit='onSubmit'>

        <input type="text" v-model='category' label='category' style='border: 1px solid grey;'>
        <!-- <select  v-model='category2' style='border: 1px solid grey; width: 100px;'>
          <option value="" selected>------</option> -->
          <!-- <option value="parent" v-for="(p, i) in parent" :key='i'>{{p.child}}</option> -->
      
        <!-- </select> -->
        <div>
          <v-btn small color='red' type='submit'>submit</v-btn>
        </div>
    </form>

    <div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      category:'',
      category2:''
    }
  },
  // computed:{
  //   parent(){
  //     return this.$store.state.parent.catergory
  //   }
  // },
  methods:{
      onSubmit(){
        console.log('submit')
          // if(this.category2){
          //   this.$store.dispatch('parent/add', {
          //     child: this.category,
          //     parent: this.category2
          //   }).then(()=>{console.log('success')})
          //   .catch(()=>{console.log('fail')})
          // } 
          // else{
          //     this.$store.dispatch('parent/add', {
          //     child: this.category,
          //     parent: null
          // });
          // }
    }
  }


}
</script>