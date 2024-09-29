import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { fetchContacts } from '../utils/api';
import ContactsListItem from '../Component/ContactsListItem';

const keyExtractor = ({ phone }) => phone;
const Contact = () => {

  // State
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Load dữ liệu
  useEffect(() => {
    setLoading(true);
    fetchContacts()
      .then(contacts => {
        setContacts(contacts);
        setLoading(false);
        setError(false);
        //console.log(contacts)
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
        setError(true);
        
      });
  }, []);

  const renderItem = ({ item })=> {
    //console.log(item)
    const {  avatar, name, phone } = item;
    return (
      <ContactsListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate("Profile")}
      />
    )
  }
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator color="blue" size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={contacts}
          keyExtractor={ item => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Contact;
