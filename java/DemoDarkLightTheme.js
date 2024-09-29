import { useState } from "react"
import { View } from "react-native"
import { Button, MD3DarkTheme, MD3LightTheme , Switch, Text, Appbar } from "react-native-paper"

const DemoDarkLightTheme = ()=>{
    const [darkMode, setDarkMode] = useState(false);
    const myTheme = (darkMode)? MD3DarkTheme : MD3LightTheme;
    const onToggleWitch = ()=> setDarkMode(!darkMode)
    return(
        <View style={{
            flex:1,
            backgroundColor: myTheme.colors.background,
        }}>
            <Appbar.Header>               
                <Appbar.Content title="Demo Theme App" />
                <Appbar.Action icon="theme-light-dark" onPress={onToggleWitch} />
                <Appbar.Action icon="magnify" onPress={() => console.log('Search pressed')} />
                <Appbar.Action icon="dots-vertical" onPress={() => console.log('Options pressed')} />
            </Appbar.Header>

            <View style={{ padding: 16 }}>
                <View style={{
                    height: 50, 
                    backgroundColor: myTheme.colors.primary,
                    justifyContent: "center",
                    alignItems:"center",
                    margin: 10
                }}>
                    <Text style={{color: myTheme.colors.onPrimary}}> primary  </Text>
                </View>
                <View style={{
                    height: 50, 
                    backgroundColor: myTheme.colors.secondary,
                    justifyContent: "center",
                    alignItems:"center",
                    margin: 10
                }}>
                    <Text style={{color: myTheme.colors.onSecondary}}> secondary  </Text>
                </View>
                <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
            </View>
        </View>
    )
}

export default DemoDarkLightTheme;