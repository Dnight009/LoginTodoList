import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Login from "../Component/Login"
import Home from "../Component/Home"
import CreateNewAccount from "../Component/CreateNewAccount"
import FogotPass from "../Component/FogotPass"
const Stack = createStackNavigator()

const MyStack = ()=>{
    return(
            <Stack.Navigator screenOptions={{ headerShown: false}}>        
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name ="CreateNewAccount" component= {CreateNewAccount}/>
                <Stack.Screen name ="FogotPass" component= {FogotPass}/>
            </Stack.Navigator>        
    )   
}
export default MyStack