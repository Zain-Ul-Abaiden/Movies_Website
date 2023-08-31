import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from "../views/RegisterView.vue"
import LoginView from "../views/LoginView.vue"
import AddMovies from "../components/AddMovies.vue"
import AllMovies from "../components/AllMovies.vue"
import EditMovie from "../components/EditMovie.vue"
import ChangePasswordView from "../views/ChangePasswordView.vue"
import UserCreationView from "../views/UserCreationView"
import AdminPanelView from "../views/AdminPanelView.vue"
import PageNotFoundView from "../views/PageNotFoundView.vue"

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/usercreation',
    name: 'usercreation',
    component: UserCreationView
  },
  {
    path: '/addmovies',
    name: 'add',
    component: AddMovies
  },
  {
    path: '/allmovies',
    name: 'all',
    component: AllMovies
  },
  {
    path:'/edit/:id',
    component: EditMovie
  },
  {
    path:'/editPassword/:id',
    component: ChangePasswordView
  },
  {
    path:'/adminpanel',
    name: 'adminpanel',
    component: AdminPanelView
  },
  {
    path: '/*',
    name: 'pagenotfound',
    component: PageNotFoundView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
