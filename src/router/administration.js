const lazy = (name) => {
  return () => import(/* webpackChunkName: "group-administration-routes" */ '@/components/administration/' + name)
}

export default [
  {
    path: '/',
    name: 'admin',
    component: lazy('Dashboard')
  },
  {
    path: 'devices',
    name: 'admin.devices',
    component: lazy('DeviceList')
  },
  {
    path: 'users',
    name: 'admin.users',
    component: lazy('UserList')
  },
  {
    path: 'settings',
    name: 'admin.settings',
    component: lazy('Settings')
  }
]
