<template>
    <div class="bg-blue-300">
        <NavBar />
        <p class="text-white font-serif text-center text-2xl mt-12">The user can create movies and then see all the movies
            who's created</p>
        <div class="flex justify-center  h-[87vh]">
            <div class="w-80 p-6 shadow-lg bg-white rounded-md  h-40 mt-5">
                <div>
                    <router-link to="/addmovies"
                        class="border-2 border-indigo-700 bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                        Create Movies
                    </router-link>
                </div>
                <div class="mt-5">
                    <router-link to="allmovies"
                        class=" border-2 border-indigo-700 bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                        See All Movies
                    </router-link>
                </div>
                <div class="mt-5">
                    <router-link to="/adminpanel"
                        class=" border-2 border-indigo-700 bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                        Admin Panel
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
    name: 'UserCreationView',
    components: {
        NavBar
    }
}
</script>