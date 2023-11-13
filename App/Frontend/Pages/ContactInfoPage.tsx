// ContactInfoPage.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ContactInfoPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [discord, setDiscord] = useState('');
  // Add state for other contact possibilities

  const saveContactInfo = () => {
    // Implement logic to save contact information
    // You can use AsyncStorage, Redux, or send it to a server

    // For demonstration purposes, log the information to the console
    console.log('Saved Contact Information:', {
      phoneNumber,
      facebook,
      instagram,
      linkedIn,
      discord,
      // Add other contact possibilities
    });

    // Optionally, you can navigate back to the home screen or perform other actions
    // For example:
    // navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Contact Info</Text>

      {/* Form to input contact information */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Facebook"
        value={facebook}
        onChangeText={setFacebook}
      />
      <TextInput
        style={styles.input}
        placeholder="Instagram"
        value={instagram}
        onChangeText={setInstagram}
      />
      <TextInput
        style={styles.input}
        placeholder="LinkedIn"
        value={linkedIn}
        onChangeText={setLinkedIn}
      />
      <TextInput
        style={styles.input}
        placeholder="Discord"
        value={discord}
        onChangeText={setDiscord}
      />
      {/* Add input fields for other contact possibilities */}

      {/* Button to save contact information */}
      <TouchableOpacity style={styles.saveButton} onPress={saveContactInfo}>
        <Text style={styles.saveButtonText}>Save Contact Info</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    width: '80%',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ContactInfoPage;
