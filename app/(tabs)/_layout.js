import { Tabs } from 'expo-router'

import {
  HomeIcon,
  StandIcon,
  ShelfIcon,
  ProfileIcon
} from '../../components/icons'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Inicio',
          tabBarIcon: () => <HomeIcon />
        }}
      />
      <Tabs.Screen
        name='nightstand'
        options={{
          title: 'Mesita',
          tabBarIcon: () => <StandIcon />
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
