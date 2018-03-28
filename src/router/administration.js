const lazy = (name) => {
  return () => import(/* webpackChunkName: "group-administration-routes" */ '@/components/administration/' + name)
}

export default [
  {
    path: 'devices',
    name: 'admin.devices',
    component: lazy('DeviceList')
  },
  {
    path: 'rooms',
    name: 'admin.rooms',
    component: lazy('RoomList')
  },
  {
    path: 'users',
    name: 'admin.users',
    component: lazy('UserList')
  },
  {
    path: 'extensions',
    name: 'admin.extensions',
    component: lazy('ExtensionList')
  },
  {
    path: 'settings',
    name: 'admin.settings',
    component: lazy('Settings')
  }
]
