<template>
    <div>
        <draggable v-for="(c,i) in component" :key='i'>
            <component  v-bind:is='c'></component>
        </draggable>
        
        <draggable>
            <div>a</div>
            <div>b</div>
            <div>c</div>
        </draggable>



{{component}}



        <draggable v-model="component" class="dragArea" :options="{animation:300, handle:'.handle'}">

            <li class="list-group-item" v-for="(item, index) in component" :key="index">
                <span class="handle" >
                    <v-icon>mdi-account</v-icon>
                </span>  
                <span>
                    <v-btn text @click="deleteItem(item)">Delete</v-btn>
                </span>
                <div>
                    <component style='border: 1px solid red;'  v-bind:is='item'></component>
                </div>
            </li>
        </draggable>

    </div>
</template>


<script>
import CompanyContent from '../components//widgets/CompanyContent'
import CategoryView from '../components/widgets/CategoryView'
import draggable from 'vuedraggable';


export default {
    components:{
        CompanyContent,
        CategoryView,
        draggable
    },
    data(){
        return{
            component: ['CompanyContent', 'CategoryView'],
            list:[]
        }
    },
    methods:{
            onEnd: function(evt){
            },
            checkMove: function(evt,originalEvent){
                console.log('draggedContext', evt.draggedContext);
                console.log('relatedContext', evt.relatedContext);
                // リンゴだったらドラッグできない
                return (evt.draggedContext.element.name!=='リンゴ');
            },


            insertItem: function(){
                var self = this;
                var newNo = 1;

                if(self.items.concat().length > 0)
                    newNo =  Math.max.apply(null, self.items.concat().map(function(item){return item.no;})) +1;

                this.items.push(
                    {
                        no:　newNo,
                        name:'バナナ'+newNo,
                        categoryNo:'3'
                    }
                );
                self.count =  self.count+1;
            },
            deleteItem: function(item){
                const index = this.component.map(function(e){ e => e === item})
                this.component.splice(index, 1);
            },
        }
        
    
}
</script>