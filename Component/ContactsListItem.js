import { StyleSheet, TouchableHighlight, View,Text } from "react-native"
import { Avatar } from "react-native-paper"

const ContactsListItem = (props) => {
    const { avatar, name, phone, onPress} = props
    console.log(name)
    return(
        <View style ={myStyle.container}>
            <Avatar.Image source={{ uri:avatar}}/>
                <View>
                    <Text> {name} </Text>
                    <Text> {phone}</Text>
                </View>                
        </View>
    )
}
export default ContactsListItem

const myStyle = StyleSheet.create({
    touchable: {
      borderRadius: 10,
      overflow: 'hidden',
      marginVertical: 5,
      marginHorizontal: 10,
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
      elevation: 2,
    },
    infoContainer: {
      flex: 1,
      marginLeft: 15,
      justifyContent: "center",
    },
    name: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
    },
    phone: {
      fontSize: 14,
      color: "#888",
      marginTop: 4,
    },
  });