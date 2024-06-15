import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const educationdata = [
    {
        id: '1',
        title: 'Calabanga West Central School (CWCS)',
        description: `I attended Calabanga West Central School (CWCS) for my elementary education. This institution provided me with a strong foundation in various subjects and helped shape my academic journey.`,
        link: 'https://www.facebook.com/calabanga.westcentralsch',
        logo: require('./assets/CWCS.jpg'), // Import the logo or provide the path
    },
    {
        id: '2',
        title: 'Dominican School of Calabanga (DSC)',
        description: `During my high school and senior high school years, I studied at Dominican School of Calabanga (DSC). This institution provided me with a holistic education, focusing not only on academics but also on character development and extracurricular activities.`,
        link: 'https://www.facebook.com/DominicanSchoolOfCalabanga',
        logo: require('./assets/DSC.jpg'), // Import the logo or provide the path
    },
    {
        id: '3',
        title: 'Naga College Foundation (NCF)',
        description: `Currently, I am pursuing my Bachelor of Science degree in Information System at Naga College Foundation (NCF). NCF has provided me with advanced knowledge and skills in the field of information systems, preparing me for a career in technology.`,
        link: 'https://www.ncf.edu.ph',
        logo: require('./assets/NCF.png'), // Import the logo or provide the path
    },
];

const Education = () => {
    const renderEducationItem = ({ item }) => (
        <TouchableOpacity style={styles.educationItem} onPress={() => openLink(item.link)}>
            <Image source={item.logo} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    const openLink = (link) => {
        Linking.openURL(link).catch((error) => console.error('Failed to open link:', error));
    };

    return (
        <LinearGradient colors={['#F5D300', '#00704a']} style={styles.gradient}>
            <View style={styles.container}>
                <FlatList
                    data={educationdata}
                    keyExtractor={(item) => item.id}
                    renderItem={renderEducationItem}
                />
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
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    educationItem: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the opacity here (0.8 for example)
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
    },
    logo: {
        width: 80,
        height: 80,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
});

export default Education;
