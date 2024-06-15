import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const Home = () => {
    const [nameOpacity] = useState(new Animated.Value(0));
    const [subtitleOpacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(nameOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
        
        Animated.timing(subtitleOpacity, {
            toValue: 1,
            duration: 1000,
            delay: 500, // Delay to start after name animation
            useNativeDriver: true,
        }).start();
    }, [nameOpacity, subtitleOpacity]);

    const technologies = [
        'React Native',
        'JavaScript',
        'Node.js',
        'Express',
        'MongoDB',
        'C++',
        'C',
        'Python',
        'Php',
        'React.js',
        'Laravel',
        'Html',
        'CSS'
    ];

    const tools = [
        'VS Code',
        'Visual Studio',
        'Discord',
        'Github',
        'Render',
        'Vercel',
        'MySQL',
        'Xampp'
    ];

    const renderTechBoxes = () => {
        return (
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Technologies Known</Text>
                <View style={styles.techContainer}>
                    {technologies.map((tech, index) => (
                        <View key={index} style={styles.techBox}>
                            <Text style={styles.techText}>{tech}</Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    };

    const renderTechTools = () => {
        return (
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Tools Used</Text>
                <View style={styles.techContainer}>
                    {tools.map((tech, index) => (
                        <View key={index} style={styles.techBox}>
                            <Text style={styles.techText}>{tech}</Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    };

    return (
        <LinearGradient colors={['#F5D300', '#00704a']} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image
                    source={require('./assets/profile.png')}
                    style={styles.profileImage}
                />
                <Animated.Text style={[styles.header, { opacity: nameOpacity }]}>Napoleon Torres</Animated.Text>
                <Animated.Text style={[styles.subheader, { opacity: subtitleOpacity }]}>A full-time student</Animated.Text>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>About Me</Text>
                    <Text style={styles.description}>
                        I'm a full-time student pursuing a Bachelor's degree in Information Systems with a keen interest in backend development, databases, networking, and cloud technologies.
                        {"\n\n"}
                        My journey into the world of programming has ignited a passion for backend technologies, where I've gained knowledge and understanding in languages like C++, C, Python, Node.Js, Php, and React.js.
                        {"\n\n"}
                        I'm fascinated by the complexities of backend systems, databases, and networking protocols, constantly exploring their intricacies and applications.
                        {"\n\n"}
                        Additionally, I'm eager to delve into cloud computing, understanding its role in modern technology infrastructure and its impact on scalability, security, and reliability.
                        {"\n\n"}
                        Whenever time permits, I enjoy applying my skills to develop scalable and efficient backend solutions using technologies like Node.js, while also venturing into cloud platforms and services.
                    </Text>
                </View>
                {/* Add some space between sections */}
                <View style={styles.sectionSeparator} />
                {renderTechBoxes()}
                {/* Add some space between sections */}
                <View style={styles.sectionSeparator} />
                {renderTechTools()}
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    subheader: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the opacity here (0.8 for example)
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        width: '100%',
        elevation: 3,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
    techContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    techBox: {
        backgroundColor: '#61dafb',
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    techText: {
        color: '#fff',
    },
    sectionSeparator: {
        marginBottom: 40, // Adjust as needed for the desired space
    },
});

export default Home;
