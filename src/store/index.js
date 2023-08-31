import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    movie: {
      allMovies: [],
    },
    token: null,
    userId: null,
    users: []
  },
  mutations: {
    SET_ALL_USER(state, payload) {
      state.users = payload;
    },
    SET_MOVIE_LIST(state, payload) {
      state.movie.allMovies = payload;
    },
    SET_REMOVE_MOVIE(state, id) {
      console.log("in the mutation", id);
      state.movie.allMovies = state.movie.allMovies.filter(
        (movie) => movie.id !== id
      );
    },
  },
  actions: {
    async registerUser(_, payload) {
      console.log("PAyloadc in action >>>>>>>>>>", payload);
      const response = await axios.post(
        "/users/register",
        payload
      );
      console.log(response.data);
    },
    async userAuthentication(_, payload) {
      console.log("PAy in action >>>>>>>>>>", payload);
      const { data } = await axios.post(
        "/users/authenticate",
        payload
      );
      this.state.userId = data.data.user._id;
      console.log("hello>>>>>>>>>> ", data);
      this.state.token = data.data.token;
      console.log('response ', data)
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.state.token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
    },
    async createMovies(_, payload) {
      try {
        const token = this.state.token;
        console.log("token---->", token);
        const config = {
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json",
          },
        };
        const res = await axios.post(
          "/movies",
          payload,
          config
        );
        console.log("Movie created:", res);
      } catch (error) {
        console.error("Error creating movie:", error);
      }
    },
    async fetchMovies({ commit }) {
      try {
        const token = this.state.token;
        console.log("token in the fetch----> ", token);
        const config = {
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.get(
          "/movies",
          config
        );
        console.log("data in action: (looking for _id) ", data);
        commit("SET_MOVIE_LIST", data.data.movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },
    async deleteMovie(_, payload) {
      console.log("paylod id in action", payload.id);
      try {
        const token = this.state.token;
        console.log("token---->", token);
        const config = {
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json",
          },
        };
        const response = await axios.delete(
          `/movies/${payload.id}`,
          config
        );
        console.log('Movie updated:', response);
        this.state.movie.allMovies.splice(payload.index, 1);
      } catch (error) {
        console.error("Error creating movie:", error);
      }
    },
    async updateMovies({ commit }, { indx, updateMovie }) {
      
      try {
        console.log("id in updateMovies: ", indx);
      console.log("PAyloaad : ", updateMovie);
        const token = this.state.token;
        console.log('token---->', token)
        const config = {
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json",
          },
        };
        const {data} = await axios.put(
          `/movies/${indx}`,
          updateMovie,
          config
        );
       // console.log('Movie updated:', data.data.movies);
         commit('SET_MOVIE_LIST', data.data.movies)
      } catch (error) {
        console.error("Error updating movie:", error);
      }
    },
    async updatePassword(_, payload) {
      console.log("payload in acton ChngePass : ", payload);
      const { data } = await axios.put(
        `/users/${payload.id}`,
        payload
      );
      console.log("Data in updatePAssword", data);
    },
    async updateRole({commit}, payload) {
      console.log("payload in acton ChngeRole : ", payload);
      const { data } = await axios.put(
        `/users/${payload.id}`,payload
      );
      console.log("Data in updateRole", data.data.users);
        commit("SET_ALL_USER",data.data.users)
    },
    async allUsers({ commit }) {
      const response = await axios.get('/users')
      console.log("responessee of user>>>>>>>>", response.data.data)
      commit('SET_ALL_USER', response.data.data)
    }
  },
  getters: {
    getMovieList(state) {
      return state.movie.allMovies;
    },
    getAllUsers(state) {
      return state.users.users;
    }
  },
});
