import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './Screens/Home';
import Projects from './Screens/Project';
import Education from './Screens/Education';
import Contact from './Screens/Contact';
import Login from './Screens/Login';
import Logout from './Screens/Logout';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token); // Update isLoggedIn based on the presence of token
    } catch (error) {
      console.error('Error checking token:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'gold',
            inactiveTintColor: 'white',
          }}
          screenOptions={({ route }) => ({
            tabBarStyle: {
              backgroundColor: '#00704a',
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Education') {
                iconName = 'school';
              } else if (route.name === 'Projects') {
                iconName = 'album';
              } else if (route.name === 'Contact') {
                iconName = 'contacts';
              }

              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Education" component={Education} />
          <Tab.Screen name="Projects" component={Projects} />
          <Tab.Screen name="Contact" component={Contact} />
          <Tab.Screen
            name="Logout"
            component={Logout}
            listeners={{
              tabPress: (e) => {
                e.preventDefault(); // Prevent the default action of switching tabs
                handleLogout(); // Call the logout function when the logout tab is pressed
              },
            }}
            options={{
              tabBarIcon: ({ color }) => <MaterialIcons name="logout" size={26} color={color} />,
            }}
          />
        </Tab.Navigator>
      ) : (
        // Render the Login component directly
        <Login setIsLoggedIn={setIsLoggedIn} />

      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    backgroundColor: '#00754A',
  },
});