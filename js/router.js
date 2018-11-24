
const routes = [
  { path: '/', component: Vue.component('home') },
  { path: '/nested', component: Vue.component('nested') },
  { path: '/foo', component: Vue.component('foo') },
  { path: '/bar', component: Vue.component('bar') }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
