// components/HomeDrawer.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Href, useRouter } from 'expo-router';

export default function HomeDrawer({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {

    const slideAnim = useState(new Animated.Value(-250))[0]; // Initial position is off-screen
    const router = useRouter();

    console.log("isOpen", isOpen);

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: isOpen ? 0 : -250,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [isOpen]);


    const handleNavigation = (path: Href) => {
        router.replace(path);
        setIsOpen(false); // Close drawer after navigation
    };

    return (
        <View style={styles.container}>
            {isOpen && <Animated.View style={[styles.drawer, { left: slideAnim }]}>
                <TouchableOpacity onPress={() => handleNavigation("#page1")}>
                    <Text style={styles.link}>Page 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation("#page2")}>
                    <Text style={styles.link}>Page 2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation("#page3")}>
                    <Text style={styles.link}>Page 3</Text>
                </TouchableOpacity>
            </Animated.View>}
            {/* {isOpen && (
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={() => setIsOpen(false)}
                    activeOpacity={1}
                />
            )} */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    drawer: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: 250,
        backgroundColor: 'white',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        zIndex: 1001,
    },
    link: {
        fontSize: 18,
        paddingVertical: 8,
        color: '#007aff',
    },
});
