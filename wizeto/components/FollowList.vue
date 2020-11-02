<template>
    <div>
            <ul>
                <li v-for="user in users" :key="user.id">
                    <span>{{user.nickName}}</span>
                    <v-icon @click='remove(user.id)'> mdi-minus-circle-outline</v-icon>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    props:{
        users:{
            type: Array,
            required: true
        },
        remove:{
            type: Function,
            required: true
        }
    },

}
</script>