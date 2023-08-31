<template>
    <div class="bg-blue-300 h-screen px-10 py-10">
        <div class="grid grid-cols-4 gap-4">
            <div v-for="(item, index) in users" :key="index"
                class="bg-white rounded-md flex flex-col justify-around h-64 items-center">
                {{ item.users }}
                <h2 class="text-3xl block font-semibold">Name: {{ item.name }}</h2>
                <p class="text-gray-600">Email: {{ item.email }}</p>
                <p class="text-gray-600">Role: {{ item.role }}</p>
                <button @click="changeRole(item.id, item.role)"
                    class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Change
                    Role</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "AdminPanelView",
    data() {
        return {

        }
    },
    methods: {
        ...mapActions({ allusers: "allUsers" }),
        ...mapActions(['updateRole']),
        async changeRole(id, role) {
            if (role == "admin") {
                role = "user";
            } else {
                role = "admin";
            }
            const obj = {
                id: id,
                role: role,
            };
            console.log(obj)
            await this.updateRole(obj)
        },

    },

    mounted() {
        this.allusers();
    },
    computed: {
        ...mapGetters({ users: "getAllUsers" }),
    }
};
</script>