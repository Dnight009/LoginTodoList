import { createNavigator, createStackNavigator } from "@react-navigation/stack";
import Contacts from "../Screen/Contact"
import Profile from "../Screen/Profile"

const Stack = createStackNavigator()

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Contacts" component={Contacts}/>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    )
}
export default HomeStackNavigator