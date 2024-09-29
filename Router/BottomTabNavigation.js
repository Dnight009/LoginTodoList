import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import User from '../Screen/User';
import Favorite from '../Screen/Favorite';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={24} />, // Sử dụng Icon component
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color }) => <Icon name="star" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ color }) => <Icon name="account" color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
