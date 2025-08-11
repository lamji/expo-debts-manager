import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home';
import SettingsScreen from '../../screens/Settings';
import TransactionsScreen from '../../screens/Transactions';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import DebtsScreen from '../../screens/Debts';
import useTheme from '../../hooks/useTheme';
import { View } from 'react-native';
import LoanDetails from '../../screens/LoanDetails';

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = 'home-outline';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Debt') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          }

          return (
            <View style={{ marginBottom: -20 }}>
              <Ionicons name={iconName as any} size={size} color={color} />
            </View>
          );
        },
        headerShown: false,
        tabBarActiveTintColor: theme.colors.active, // Darker sage for focused state
        tabBarInactiveTintColor: 'white', // White for unfocused state for better contrast
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          bottom: 5,
          borderRadius: 15,
          height: 60,
          borderTopColor: 'transparent',
          borderTopWidth: 0,
          width: '90%',
          alignSelf: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Debt" component={DebtsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      />
      <RootStack.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          presentation: 'card',
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      />
      <RootStack.Screen
        name="LoanDetails"
        component={LoanDetails}
        options={{
          presentation: 'card',
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      />
    </RootStack.Navigator>
  );
}
