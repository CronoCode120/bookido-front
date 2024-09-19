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
          tabBarIcon: ({ focused }) => <HomeIcon selected={focused} />
        }}
      />
      <Tabs.Screen
        name='nightstand'
        options={{
          title: 'Mesita',
          tabBarIcon: ({ focused }) => <StandIcon selected={focused} />,
          headerShown: true,
          headerLeft: () => <NavHeader title='Mesita de Noche' />,
          headerTransparent: true
        }}
      />
      <Tabs.Screen
        name='shelf'
        options={{
          title: 'Estantería',
          tabBarIcon: ({ focused }) => <ShelfIcon selected={focused} />,
          headerShown: true,
          headerLeft: () => <NavHeader title='Estantería' />,
          headerTransparent: true
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) => <ProfileIcon selected={focused} />
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
