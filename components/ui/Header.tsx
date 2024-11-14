// components/CustomHeader.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from '../core/safe-area-view';
import { IconSymbol } from './IconSymbol';
import HomeDrawer from './HomeDrawer';
import { Collapsible } from '../Collapsible';
import CustomDrawer from './CustomDrawer';

export type HeaderProps = {
    onMenuPress: () => void;
}

export default function CustomHeader({ onMenuPress }: HeaderProps) {

    const onNotificationPress = () => {
        console.log('Notification pressed');
    }

    const onScanPress = () => {
        console.log('Scan pressed');
    }

    return (
        <View className='bg-[#2B3A55]'>
            <SafeAreaView>
                <View className='flex flex-row items-center justify-between py-2'>
                    {/* Left Menu Icon */}
                    <TouchableOpacity onPress={onMenuPress} className='p-2'>
                        {/* <MaterialIcons name="menu" size={24} color="white" /> */}
                        <IconSymbol name="line.3.horizontal" size={24} color="white" />
                    </TouchableOpacity>

                    {/* Center Logo */}
                    <View style={styles.logoContainer}>
                        <Image source={require('@/assets/images/images.png')} style={styles.logo} resizeMode="contain" />
                    </View>

                    {/* Right Icons */}
                    <View style={styles.rightIcons}>
                        <TouchableOpacity onPress={onScanPress} style={styles.iconButton}>
                            <FontAwesome5 name="qrcode" size={20} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onNotificationPress} style={styles.iconButton}>
                            <MaterialIcons name="notifications" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>

            {/* <HomeDrawer isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    iconButton: {
        padding: 8,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 30,
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
