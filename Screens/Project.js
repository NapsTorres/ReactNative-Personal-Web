import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const projectsData = [
    {
        id: '1',
        title: 'Library Management System',
        description: `A Library Management System built with Laravel, MySQL, and PHP to manage books, users, and borrowing records. Provides features for librarians to efficiently organize and maintain the library collection.`,
        technologies: ['Laravel', 'MySQL', 'PHP'],
    },
    {
        id: '2',
        title: 'Clickay - One Click Ukay',
        description: `An experimental one-click e-commerce app built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Allows users to quickly purchase items with just one click.`,
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    },
    {
        id: '3',
        title: 'Food recipe app',
        description: `A React Native food recipe app offers a simple and interactive platform for users to discover, explore, and cook a variety of recipes, enhancing their culinary experience on mobile devices.`,
        technologies: ['React Native', 'Node.js', 'Express', 'MongoDB'],
    },
    {
        id: '4',
        title: 'Personal Task Management',
        description: `A personal task management app built with the MERN stack (MongoDB, Express.js, React.js, Node.js) to help users organize and track their tasks efficiently.`,
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    },
];

const Projects = () => {
    return (
        <LinearGradient colors={['#F5D300', '#00704a']} style={styles.gradient}>
            <View style={styles.container}>
                <FlatList
                    data={projectsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.projectItem}>
                            <Text style={styles.projectTitle}>{item.title}</Text>
                            <Text style={styles.projectDescription}>{item.description}</Text>
                            <View style={styles.technologiesContainer}>
                                {item.technologies.map((tech, index) => (
                                    <View key={index} style={styles.techBox}>
                                        <Text style={styles.techText}>{tech}</Text>
                                    </View>
                                ))}
                            </View>
                        </TouchableOpacity>
                    )}
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
    projectItem: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the opacity here (0.8 for example)
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
    },
    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    projectDescription: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    technologiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    techBox: {
        backgroundColor: '#61dafb',
        borderRadius: 5,
        padding: 5,
        marginRight: 5,
        marginBottom: 5,
    },
    techText: {
        color: '#fff',
    },
});

export default Projects;
