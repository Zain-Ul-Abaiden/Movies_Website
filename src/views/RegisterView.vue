<template>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="flex justify-center items-center h-screen">
        <div class="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 class="text-3xl block font-semibold text-center">
                Register
            </h1>
            <hr class="mt-3">
            <div class="mt-3">
                <label for="username" class="block text-base mb-2">
                    Username
                </label>
                <input v-model="form.name" type="text" id="username"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter Username...">
            </div>
            <div class="mt-3">
                <label for="email" class="block text-base mb-2">
                    Enter Email
                </label>
                <input v-model="form.email" type="text" id="email"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter Email...">
            </div>

            <div class="mt-3">
                <label for="password" class="block text-base mb-2">
                    Password
                </label>
                <input type="password" v-model="form.password" id="password"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter Password...">
            </div>

            <div class="mt-5 flex justify-between">
                <router-link to="/" class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md">
                    Back
                </router-link>
                <router-link to="/" class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md"
                    @click="resgisterUser(form)">
                    Sign up
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'RegisterView',
    data() {
        return {
            form: {
                email: '',
                name: '',
                password: '',
            },
        };
    },
    methods: {
        ...mapActions({ resgisterUser: "registerUser" }),
    },
};
</script>

<style></style>
