import { View, Text, Dimensions, Animated, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { PanResponder } from 'react-native';
import { Modal } from 'react-native';

const screenHeight = Dimensions.get('window').height;

interface SheetModalProps {
    isVisible: boolean;
    onClose: () => void;
    heightPercentage?: number;
    setIsVisible: (isVisible: boolean) => void;
}

const SheetModal = ({ isVisible, setIsVisible, onClose, heightPercentage = 75 }: SheetModalProps) => {
    const panY = useRef(new Animated.Value(0)).current;

    console.log('SheetModal isVisible', isVisible);
    console.log('sheetModal panY', panY);

    useEffect(() => {
        if (isVisible) {
            console.log('setting panY to 0');
            panY.setValue(0);
        }
    }, [isVisible]);





    const resetPositionAnim = Animated.timing(panY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    });

    const closeAnim = Animated.timing(panY, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
    });

    const handleClose = (medium: string) => {
        console.log('handleClose is called with ', medium);
        closeAnim.start(({ finished }) => {
            if (finished) {
                console.log('Animation finished, calling onClose', isVisible);
                setIsVisible(false);
            }
        });
        // panY.setValue(0); // Reset panY after closing
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    panY.setValue(gestureState.dy);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > 100) {
                    closeAnim.start(({ finished }) => {
                        if (finished) {
                            handleClose('with gesture'); // Use the same close handler
                        }
                    });
                } else {
                    resetPositionAnim.start();
                    console.log('resetPositionAnim');
                }
            },
        })
    ).current;


    return (
        <Modal transparent visible={isVisible} animationType="slide">
            <View className='flex-1 justify-end'>
                {/* close the modal when the background is pressed */}
                <TouchableOpacity className='flex-1 ' onPress={() => handleClose('with touch in background')} />
                <Animated.View
                    className='bg-[#EBEBEB] rounded-t-2xl px-4 pb-6'
                    style={[
                        {
                            height: screenHeight * (heightPercentage / 100),
                            transform: [{ translateY: panY }],
                        },
                    ]}
                >
                    <View {...panResponder.panHandlers} className='w-full h-6 items-center justify-center mb-2'>
                        <View className='w-12 h-1.5 bg-gray-300 rounded-full mb-2' />
                    </View>
                    <Text className='text-lg font-semibold'>Notifications</Text>
                    <Text>Your notifications will appear here.</Text>
                    {/* <TouchableOpacity onPress={onClose}>
                          <Text style={styles.closeButton}>Close</Text>
                      </TouchableOpacity> */}
                </Animated.View>
            </View>
        </Modal>
    )
}

export default SheetModal