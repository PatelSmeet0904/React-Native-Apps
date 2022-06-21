import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from './screens/CantegoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteItemsScreen from './screens/FavoriteItemsScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigatorHandler() {
  return (
    <Drawer.Navigator useLegacyImplementation={false} screenOptions={{
      headerStyle: { backgroundColor: '#3b1d01' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#5d4228' },
      drawerContentStyle: { backgroundColor: '#3b1d01' },
      drawerActiveBackgroundColor: '#e6b587',
      drawerActiveTintColor: '#3b1d01',
      drawerInactiveTintColor: 'white'
    }}>
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />
        }} />
      <Drawer.Screen
        name='Favorites'
        component={FavoriteItemsScreen} options={{
          drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
        }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#3b1d01' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#5d4228' }
        }}>
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigatorHandler}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailScreen} options={{ title: 'About the meal' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({

});
