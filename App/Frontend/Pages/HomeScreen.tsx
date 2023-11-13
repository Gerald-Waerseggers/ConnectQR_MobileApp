// HomeScreen.tsx
import React, { useState }  from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RouteProp, NavigationProp } from '@react-navigation/native';
import Modal from 'react-native-modal';
import QRCode from 'react-native-qrcode-svg'

type HomeScreenProps = {
  navigation: NavigationProp<any>; // Use the correct type for your navigation stack
  route: RouteProp<any, any>; // Use the correct type for your route
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const navigateToContactInfoPage = () => {
    navigation.navigate('ContactInfo');
  };
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  const toggleContact = (contact: string) => {
    if (selectedContacts.includes(contact)) {
      // If contact is already selected, remove it
      setSelectedContacts(selectedContacts.filter((c) => c !== contact));
    } else {
      // If contact is not selected, add it
      setSelectedContacts([...selectedContacts, contact]);
    }
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const generateQRCode = () => {
    toggleModal(); // Show modal
    // Logic to generate QR code with selectedContacts
    // ...

    // Display success message or navigate to QR code screen
    // ...
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Introducing ConnectQR</Text>
      <Text style={styles.description}>
        A groundbreaking mobile app developed in React Native that reimagines the way people exchange contact information. ConnectQR offers a modern and convenient solution for seamlessly sharing your contact details with others using QR codes.
      </Text>

      <View style={styles.contactOptions}>
        {['Phone Number', 'Instagram', 'LinkedIn', 'Discord'].map((contact) => (
          <TouchableOpacity
            key={contact}
            style={[
              styles.contactOption,
              selectedContacts.includes(contact) && styles.selectedContactOption,
            ]}
            onPress={() => toggleContact(contact)}
          >
            <Text>{contact}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Button to generate QR code */}
      <TouchableOpacity style={styles.generateButton} onPress={generateQRCode}>
        <Text style={styles.generateButtonText}>Generate QR Code</Text>
      </TouchableOpacity>

      {/* Modal for displaying QR code or any other content */}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContainer}>
          {/* Add content for the modal, such as QR code or any other information */}
          <Text style={styles.modalText}>This is the QR Code or other content</Text>
          <QRCode
            value= "This is the value in the QRcode"
          />
          {/* Add any other content as needed */}
        </View>
      </Modal>

      
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={navigateToContactInfoPage}
      >
        <Text style={styles.navigateButtonText}>Manage Contact Info</Text>
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
  description: {
    textAlign: 'center',
    marginBottom: 24,
  },
  contactOptions: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  contactOption: {
    backgroundColor: '#DDDDDD',
    padding: 8,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  generateButton: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
  },
  generateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedContactOption: {
    backgroundColor: '#007BFF',
    borderColor: 'white',
  },


  navigateButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
  },
  navigateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  modalContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default HomeScreen;
