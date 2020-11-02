<template>
    <div>
        <v-row justify='center' style='border: 1px solid red;' >
            <v-col class='vCol' cols='3'>11</v-col>
            <v-col class='vCol' cols='4'>22</v-col>
        </v-row>
        <v-row justify='center' style='border: 1px solid blue'> 
            <v-col class='vCol' cols='2'>    11      </v-col>
            <v-col class='vCol' cols='2'>    22      </v-col>

            <v-col class='vCol' offset-md='4' cols='2'>    33      </v-col>
            <v-col class='vCol' cols='2'>    44      </v-col>
        </v-row>

    </div>
</template>

<style lang="scss" scoped>
.vCol{
    border: 1px dotted red;
}
</style>
<script>
export default {
    layout: 'Landing'
}
</script>