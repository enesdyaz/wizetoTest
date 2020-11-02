<template>
  <div>
      <form style='width: 500px;'>
        <v-row>
          <v-col cols='12' md='4'>
            <v-text-field v-model='category1' label='catergory'></v-text-field>
          </v-col>
          <v-col cols='12' md='4'>
              <v-select v-model='category2' :items = 'parent'></v-select>
          </v-col>
          <v-col cols='12' md='4'>
                <v-btn class="mr-4" color='red' @click="submit">submit</v-btn>
          </v-col>
        </v-row>
      </form>

  

      <div>
        <v-expansion-panels accordion>
            <v-expansion-panel v-for="(p,i) in category" :key="i" >
              <v-expansion-panel-header color='blue-grey pa-0 ma-0' class='subtitle-1'>{{p.parent}}</v-expansion-panel-header>

              <v-expansion-panel-content class='pl-10 pt-0 pb-0 subtitle-2'  v-for='(c, index) in p.child' :key='index'>
                <v-btn class='pa-0 ma-0' text small color='blue-grey pa-0 ma-0'>{{c.child}}</v-btn>
              </v-expansion-panel-content>

            </v-expansion-panel>
          </v-expansion-panels>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.parent{
  list-style: none;
  border: 1px solid red;
}
.child{
    list-style: none;
    padding-left: 30px;

}

</style>


<script>
export default {
  data(){
    return{
      category1: '',
      category2: '',
      
    }
  },
  computed:{
    parent(){
      let parent = this.$store.state.parent.category;
      const result = parent.map(function (e){ return e.parent})
      return result
    },
    category(){
      return this.$store.state.parent.category
    }
  },
  methods:{
      submit(){
          if(this.category2){
            const index = this.category.findIndex(v => v.parent === this.category2)

            // const category = this.category[index].child.push({
            //   child: this.category1
            // })

            this.$store.dispatch('parent/addChild', {
              index: index,
              child: this.category1,
              content: [],
            }).then(()=>{console.log('success')})
            .catch(()=>{console.log('fail')})
          } 
          else{
              this.$store.dispatch('parent/add', {
              parent: this.category1,
              child: [],
              content: []
          }).then(()=>{ console.log('success catergory1 only')}).catch(()=>{ console.log('fail')})
          }
    }
  }
}
</script>