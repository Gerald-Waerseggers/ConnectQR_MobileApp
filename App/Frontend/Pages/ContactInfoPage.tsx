// ContactInfoPage.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { RouteProp, NavigationProp } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

type ContactInfoPageProps = {
  navigation: NavigationProp<any>; // Use the correct type for your navigation stack
  route: RouteProp<any, any>; // Use the correct type for your route
};

const ContactInfoPage: React.FC<ContactInfoPageProps> = ({ navigation }) => {
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Facebook, setFacebook] = useState('');
  const [Instagram, setInstagram] = useState('');
  const [LinkedIn, setLinkedIn] = useState('');
  const [Discord, setDiscord] = useState('');
  // Add state for other contact possibilities
  // Function to load saved contact information from AsyncStorage
  const loadContactInfo = async () => {
    try {
      // Retrieve the contact information from AsyncStorage
      const savedContactInfoString = await AsyncStorage.getItem('contactInfo');

      if (savedContactInfoString) {
        // If data exists, parse it from JSON and set the state
        const savedContactInfo = JSON.parse(savedContactInfoString);

        setPhoneNumber(savedContactInfo.PhoneNumber || '');
        setFacebook(savedContactInfo.Facebook || '');
        setInstagram(savedContactInfo.Instagram || '');
        setLinkedIn(savedContactInfo.LinkedIn || '');
        setDiscord(savedContactInfo.Discord || '');
        // Set state for other contact possibilities
      }
    } catch (error) {
      // Handle errors, e.g., show an alert or log the error
      console.error('Error loading contact information:', error);
    }
  };
  useEffect(() => {
    // Load saved contact information when the component mounts
    loadContactInfo();
  }, []);

  const saveContactInfo = async () => {
    try {
      // Create an object with the contact information
      const contactInfo = {
        PhoneNumber,
        Facebook,
        Instagram,
        LinkedIn,
        Discord,
        // Add other contact possibilities
      };
      // Convert the contactInfo object to a JSON string
      const contactInfoString = JSON.stringify(contactInfo);

      // Save the contact information to AsyncStorage
      await AsyncStorage.setItem('contactInfo', contactInfoString);
      // Log a success message
      console.log('Contact information saved successfully:', contactInfo);

      // Navigate back to the home screen
      navigation.navigate('ConnectQR');
      } catch (error) {
      // Handle errors, e.g., show an alert or log the error
    console.error('Error saving contact information:', error);
      }

     

    

    // Optionally, you can navigate back to the home screen or perform other actions
    // For example:
    // navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Contact Info</Text>

      {/* Form to input contact information */}
      <Text style={styles.description}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={PhoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Text style={styles.description}>Facebook</Text>
      <TextInput
        style={styles.input}
        placeholder="Facebook"
        value={Facebook}
        onChangeText={setFacebook}
      />
      <Text style={styles.description}>Instagram</Text>
      <TextInput
        style={styles.input}
        placeholder="Instagram"
        value={Instagram}
        onChangeText={setInstagram}
      />
      <Text style={styles.description}>LinkedIn</Text>
      <TextInput
        style={styles.input}
        placeholder="LinkedIn"
        value={LinkedIn}
        onChangeText={setLinkedIn}
      />
      <Text style={styles.description}>Discord</Text>
      <TextInput
        style={styles.input}
        placeholder="Discord"
        value={Discord}
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

  description: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ContactInfoPage;
