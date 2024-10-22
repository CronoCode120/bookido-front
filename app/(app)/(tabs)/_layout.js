import { Tabs } from 'expo-router'
import NavHeader from '../../../components/NavHeader.jsx'

import {
  HomeIcon,
  StandIcon,
  ShelfIcon,
  ProfileIcon
} from '../../../components/icons/index.js'
import theme from '../../../theme.js'

const TabsLayout = () => {
  const selectColor = theme.colors.ROSE_400
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTitle: '',
        headerShadowVisible: false,
        headerLeftContainerStyle: { paddingHorizontal: 14 },
        tabBarActiveTintColor: selectColor
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Inicio',
          tabBarIcon: ({ focused }) => (
            <HomeIcon selected={focused} selectColor={selectColor} />
          )
        }}
      />
      <Tabs.Screen
        name='nightstand'
        options={{
          title: 'Mesita',
          tabBarIcon: ({ focused }) => (
            <StandIcon selected={focused} selectColor={selectColor} />
          ),
          headerShown: true,
          headerLeft: () => <NavHeader title='Mesita de noche' />
        }}
      />
      <Tabs.Screen
        name='shelf'
        options={{
          title: 'Estantería',
          tabBarIcon: ({ focused }) => (
            <ShelfIcon selected={focused} selectColor={selectColor} />
          ),
          headerShown: true,
          headerLeft: () => <NavHeader title='Estantería' />
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <ProfileIcon selected={focused} selectColor={selectColor} />
          )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
