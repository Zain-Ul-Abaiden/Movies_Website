<template>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="flex justify-center items-center h-screen">
        <div class="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 class="text-3xl block font-semibold text-center">
                Login
            </h1>
            <hr class="mt-3" />
            <div class="mt-3">
                <label for="email" class="block text-base mb-2">Email</label>
                <input v-model="form.email" type="text" id="email"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter Email..." />
            </div>

            <div class="mt-3">
                <label for="password" class="block text-base mb-2">Password</label>
                <input type="password" v-model="form.password" id="password"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter Password..." />
            </div>
            <div class="mt-5 flex justify-between">
                <button class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md"
                    @click="userAuthenticationFunc(form)">
                    Log in
                </button>
                <router-link to="/register"
                    class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md">
                    Sign Up
                </router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapActions } from "vuex";
export default {
    name: "LoginView",
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        ...mapActions({ userAuthentication: "userAuthentication" }),
        userAuthenticationFunc(obj) {
            this.userAuthentication(obj)
            this.$router.push("/usercreation")
        }
    },
};
</script>
  
<style>
.bg {
    animation: slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
    bottom: 0;
    left: -50%;
    opacity: .5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
}

.bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 4s;
}

.bg3 {
    animation-duration: 5s;
}


@keyframes slide {
    0% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(25%);
    }
}
</style>
  