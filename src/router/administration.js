const lazy = (name) => {
  return () => import(/* webpackChunkName: "group-administration-routes" */ '@/components/administration/' + name)
}

export default [
  {
    path: '/',
    name: 'admin',
    component: lazy('Dashboard')
  }
]
