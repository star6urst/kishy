import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import KishysListScreen from '../screens/KishysListScreen';
import KishyDetailScreen from '../screens/KishyDetailScreen';
import EventsScreen from '../screens/EventsScreen';
import SubmitScreen from '../screens/SubmitScreen';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { colors, fonts } from '../theme/theme';

const Tab = createBottomTabNavigator();
const KishyStack = createNativeStackNavigator();

const ICONS = {
  Kishys: 'grid',
  Events: 'calendar',
  Submit: 'plus-circle',
  Discovery: 'compass',
  Profile: 'user',
};

const TAB_LABELS = {
  Kishys: "Kishy's",
  Events: 'Events',
  Submit: 'Submit',
  Discovery: 'Discovery',
  Profile: 'Profile',
};

function KishysStackScreen() {
  return (
    <KishyStack.Navigator screenOptions={{ headerShown: false }}>
      <KishyStack.Screen name="KishysList" component={KishysListScreen} />
      <KishyStack.Screen name="KishyDetail" component={KishyDetailScreen} />
    </KishyStack.Navigator>
  );
}

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background,
    card: colors.background,
    border: colors.border,
    text: colors.textPrimary,
    primary: colors.textPrimary,
  },
};

export default function RootNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.border,
            height: 64,
            paddingTop: 8,
            paddingBottom: 10,
          },
          tabBarActiveTintColor: colors.textPrimary,
          tabBarInactiveTintColor: colors.textDim,
          tabBarLabelStyle: {
            fontFamily: fonts.bodySemiBold,
            fontSize: 10,
            letterSpacing: 0.8,
            textTransform: 'uppercase',
          },
          tabBarLabel: TAB_LABELS[route.name],
          tabBarIcon: ({ color, size }) => (
            <Feather name={ICONS[route.name]} color={color} size={size - 4} />
          ),
        })}
      >
        <Tab.Screen name="Kishys" component={KishysStackScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Submit" component={SubmitScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}