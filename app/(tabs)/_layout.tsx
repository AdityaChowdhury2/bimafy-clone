import { RelativePathString, Tabs, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView } from "@/components/core/safe-area-view";
import SheetModal from "@/components/ui/SheetModal";
import AuthForm from "@/components/AuthForm";
import CustomHeader from "@/components/ui/Header";
import { useLocalSearchParams } from "expo-router";
import { useToggleDrawer } from "@/hooks/useToggleDrawer";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isOpen, setIsOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(-250))[0]; // Initial position is off-screen
  const router = useRouter();

  // Retrieve initialParams using useLocalSearchParams
  const toggleDrawer = useToggleDrawer() as () => void;

  // const toggleDrawer = () => {
  //   Animated.timing(slideAnim, {
  //     toValue: isOpen ? -250 : 0,
  //     duration: 300,
  //     useNativeDriver: false,
  //   }).start();
  //   setIsOpen(!isOpen);
  // };

  // const handleNavigation = (path: RelativePathString) => {
  //   router.replace(path);
  //   toggleDrawer(); // Close drawer after navigation
  // };

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CustomHeader onMenuPress={toggleDrawer} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        {/* <Tabs.Screen
          name="add"
          options={{
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="plus.circle.fill" color={color} />,
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              console.log('tabpress');
              setIsOpen(true);
            }
          }}
        /> */}
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        />
      </Tabs>
      <SheetModal
        isVisible={isOpen}
        setIsVisible={setIsOpen}
        onClose={toggleSheet}
      >
        <AuthForm />
      </SheetModal>
    </>
  );
}
const styles = StyleSheet.create({
  drawerToggle: {
    padding: 10,
  },
  toggleText: {
    fontSize: 24,
    color: "#000",
  },
  drawer: {
    position: "absolute",
    top: 50,
    width: 250,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  link: {
    fontSize: 18,
    paddingVertical: 8,
    color: "#007aff",
  },
});
