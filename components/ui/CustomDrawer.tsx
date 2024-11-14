// components/CustomDrawer.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Pressable, Easing } from 'react-native';
import { Href, useRouter } from 'expo-router';
import { cn } from '@/lib/cn';
import { IconSymbol } from './IconSymbol';
import { House, List, Zap, } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';


const { width: screenWidth } = Dimensions.get('window');

export type CustomDrawerProps = {
    isVisible: boolean;
    onClose: () => void;
    onSheetPress: () => void;
}

export default function CustomDrawer({ isVisible, onClose, onSheetPress }: CustomDrawerProps) {
    const [slideAnim] = useState(new Animated.Value(-screenWidth)); // Initial position is off-screen
    const [visible, setVisible] = useState(isVisible);
    const router = useRouter();

    console.log('CustomDrawer isVisible', isVisible);

    // Animate the drawer open or close
    const toggleDrawer = () => {
        Animated.timing(slideAnim, {
            toValue: isVisible ? 0 : -screenWidth,
            duration: 400, // Increased duration
            easing: Easing.bezier(0.25, 0.1, 0.25, 1), // Added smooth easing
            useNativeDriver: false,
        }).start(() => {
            if (!isVisible) {
                setVisible(false);
            }
        });
    };

    // Run the animation whenever isVisible changes
    React.useEffect(() => {
        if (isVisible) setVisible(true); // Show drawer before opening animation
        toggleDrawer();
    }, [isVisible]);

    // Handle navigation and close drawer
    const handleNavigation = (path: Href) => {
        router.replace(path);
        onClose(); // Close drawer after navigation
    };

    return (
        visible && (
            <View style={styles.overlayContainer}>
                {/* Overlay Background */}
                <Pressable className={cn('flex-1', isVisible && 'bg-black/20')} onPress={onClose} />
                {/* Drawer Container */}
                <Animated.View
                    className={cn('space-y-4')}
                    style={[styles.drawerContainer, { left: slideAnim }]}
                    onTouchStart={e => e.stopPropagation()}
                >
                    <TouchableOpacity className='m-4' onPress={() => { console.log('button clicked to open sheet'); onSheetPress(); }}>
                        <Text className='text-white text-center py-2 px-1 bg-[#2B3A55] rounded-md'>Login/SignUp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation('page1' as Href)}>
                        <View className='flex-row items-center justify-start gap-2'>
                            <House size={18} color={'white'} />
                            <Text className={cn('text-white text-lg py-2')}>Dashboard</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation('page2' as Href)}>
                        <View className='flex-row items-center justify-start gap-2'>
                            <List size={18} color={'white'} />
                            <Text className={cn('text-white text-lg py-2')}>Submission List</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation('page3' as Href)}>
                        <View className='flex-row items-center justify-start gap-2'>
                            <Zap size={18} color={'white'} />
                            <Text className={cn('text-white text-lg py-2')}>Claims List</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        )
    );
}

const styles = StyleSheet.create({
    overlayContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent black background
    },
    drawerContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: screenWidth * 0.75, // Drawer width is 75% of screen width
        backgroundColor: '#436697', // Dark blue color
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    drawerTitle: {
        fontSize: 24,
        color: 'white',
        marginBottom: 20,
    },
    drawerLink: {
        fontSize: 18,
        color: '#fff',
        marginVertical: 10,
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#555',
        alignItems: 'center',
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
    },
});
