import { Tabs } from 'expo-router'
import NavHeader from '../../components/NavHeader.jsx'

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
        headerShown: false,
        headerTitle: '',
        headerShadowVisible: false
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
          tabBarIcon: () => <StandIcon />,
          headerShown: true,
          headerLeft: () => <NavHeader title='Mesita de noche' />
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
