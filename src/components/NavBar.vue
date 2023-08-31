<template>
    <div class="flex justify-between p-10 h-14 items-center text-2xl font-serif font-medium bg-blue-500 text-white">
       <router-link to="/">Movies</router-link>
        <button @click="changePassword">Change Password</button>
    </div>
</template>

<script>
import store from "@/store"
    export default {
        name:"NavBar",
        data(){
            return{
                id:store.state.userId,
            }
        },
        methods:{
            changePassword(){
                this.$router.push({path: `/editPassword/${this.id}`})
            }
        }
    }
</script>