import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import appropriate icons

const contactIcons = [
    {
        id: '1',
        icon: 'github',
        link: 'https://github.com/NapsTorres',
    },
    {
        id: '2',
        icon: 'facebook',
        link: 'https://www.facebook.com/misterlittle.n/',
    },
    {
        id: '3',
        icon: 'instagram',
        link: 'https://www.instagram.com/misterlittle.n/',
    },
    {
        id: '4',
        icon: 'email',
        link: 'mailto:ntorres@gbox.ncf.edu.ph',
    },
];

const Contact = () => {
    const handleIconPress = (link) => {
        Linking.openURL(link); // Open the link when icon is pressed
    };

    return (
        <LinearGradient colors={['#F5D300', '#00704a']} style={styles.gradient}>
            <View style={styles.container}>
                <Text style={styles.header}>Feel free to connect with me</Text>
                <View style={styles.contactIconsContainer}>
                    {contactIcons.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.contactIcon}
                            onPress={() => handleIconPress(item.link)}
                        >
                            <MaterialCommunityIcons name={item.icon} size={40} color="#000" />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contactIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', // Center vertically
        width: '100%', // Full width
    },
    contactIcon: {
        alignItems: 'center',
    },
});

export default Contact;
