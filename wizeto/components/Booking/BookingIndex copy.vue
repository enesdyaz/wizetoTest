<template>
    <div>
<!-- select Date -->
        <v-row justify="center">
            <v-date-picker @change = 'onChange' v-model="pickerDate"></v-date-picker>
        </v-row > 
<!-- select Time -->
        <v-chip-group v-for='(s, i) in select.time' :key='i'  active-class="teal white--text" v-model='pickerTime'>
            <v-chip color='primary' :disabled='s.book' :value='s.hour' @click='onClick(select, i)'>{{s.hour}}</v-chip>
        </v-chip-group>

<!-- select Form -->

        <div v-if='showTable'>
            <v-card class="mx-auto" max-width="344" >
                <v-card-text>
                <div>First Name</div>
                <p>
                    <v-text-field
                        v-model="firstname"
                        label="First name"
                        required>
                    </v-text-field>
                </p>

                <p>Last Name</p>
                <p>
                    <v-text-field v-model="lastname" label="Last name" required ></v-text-field>
                </p>
                <p>{{pickerDate}} : {{pickerTime}}</p>
                </v-card-text>
                <v-card-actions>
                <v-btn text color="deep-purple accent-4" @click='click' >
                    Booking
                </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>




<script>

export default {
    data(){
        return{
            pickerDate: '',
            pickerTime: '',
            booking: [],     // 시간대별 전체  

            select: [],   // 선택한 날짜와 내용 D.B 저장
            
            showTable: false,
            firstname:'',
            lastname: '',
            i: '',
            timeObject: [],
        }
    },
    created(){
        this.timeList
        this.booking
    },
    computed:{
        timeList(){
            const setFirstTime = '08:00'
            const setFinishTime = '17:00'
            const setInterval = '15'
            const selectedDate = this.pickerDate

            var date = new Date(selectedDate+" "+setFirstTime)
            var finish = new Date(selectedDate+" "+setFinishTime)
            let timeObject = {date: selectedDate, time: []}

            for( date ; date<=finish ; date.setMinutes(date.getMinutes()+Number(setInterval))) {
                var h = date.getHours()
                var m = date.getMinutes()
                var hours = h >= 10 ? h : '0' + h
                var minutes = m >= 10 ? m : '0' + m;

                timeObject.time.push({hour: hours+":"+minutes, booking: false})
            }    
            this.booking.push(timeObject)
            return timeObject        
        } 
    },

    methods:{
        click(){
            this.select.time[this.i].book=true
        },
        onClick(select, i){
            this.i = i
            this.showTable = true
        },
        onChange(d){
            // console.log(this.timeList)
            console.log(this.booking)
            // var result = this.booking.find(({date})=> date == d)
            console.log(result)

            // if(this.timeList.date == d){
                
            // }
            // const result = this.booking.find((date) => date == d)
            // console.log(result)
            // console.log(result)
            // if(result){
            //     return
            // }else{
            //     this.select = result

                // var text = { date: d, time: this.timeList}
                // this.booking.push(text)
                // const result = this.booking.find(({date}) => date == d)
                // this.select = result
            

        }
    }
}
</script>