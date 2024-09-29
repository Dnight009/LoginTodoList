import "react-native-gesture-handler"
import React, { useEffect, useState } from 'react';
// import { fetchContacts } from "./utils/api";
// import DemoTheme from "./java/DemoDarkLightTheme";
import {PaperProvider, Text } from "react-native-paper";
// import Banner from './java/Banner';
// import DemoDarkLightTheme from './java/DemoDarkLightTheme';
// import Navigator from './java/Navigator';
import Login from './Component/Login';
import Home from './Component/Home';
// import FogotPass from './Component/FogotPass'
// import MyStack from './Router/Mysack';
import { NavigationContainer } from '@react-navigation/native';
import Contact from "./Screen/Contact";
import BottomTabNavigator from "./Router/BottomTabNavigation";
import MyStack from "./Router/Mysack";
// import Profile from "./Screen/Profile";



const App = () => {
  const [contacts, setContacts] = useState([])

  // useEffect(() => {
  //   fetchContacts()
  //   .then( data => {
  //     setContacts(data)
  //     console.log(contacts)
  //   })
  //   console.log(contacts)
  // }, [])

  return (
    <NavigationContainer>
       <PaperProvider>
        {/* <Banner/> */}
        {/* <DemoDarkLightTheme/> */}
        {/* <Navigator/> */}
        {/* <Login/> */}
        {/* <MyStack/> */}
        {/* <FogotPass/> */}        
        {/* <MyDrawer/> */}
        {/* <Contact/> */}
        {/* <Profile/> */}
        <BottomTabNavigator/>
        {/* <Home/> */}
    </PaperProvider>    
    </NavigationContainer>
  )
}
export default  App;

