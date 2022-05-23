import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Knjige from '../views/BooksView.vue'
import DetaljiKnjige from '../views/BookDetails.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		redirect: '/knjige'
	},
	{
		path: '/knjige',
		name: 'knjige',
		component: Knjige
	},
	{
		path: '/knjige/:bookId',
		name: 'detaljiKnjige',
		component: DetaljiKnjige
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
