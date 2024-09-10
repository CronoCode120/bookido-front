import { Tabs } from 'expo-router'
import NavHeader from '../../../components/NavHeader.jsx'

import {
  HomeIcon,
  StandIcon,
  ShelfIcon,
  ProfileIcon
} from '../../../components/icons/index.js'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTitle: '',
        headerShadowVisible: false,
        headerLeftContainerStyle: { paddingHorizontal: 14 }
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
      <Tabs.Screen
        name='shelf'
        options={{
          title: 'Estantería',
          tabBarIcon: () => <ShelfIcon />,
          headerShown: true,
          headerLeft: () => <NavHeader title='Estantería' />
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Perfil',
          tabBarIcon: () => <ProfileIcon />
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
