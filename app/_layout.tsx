import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import "../global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawer from "@/components/ui/CustomDrawer";
import SheetModal from "@/components/ui/SheetModal";
import AuthForm from "@/components/AuthForm";
import { ToggleDrawerProvider } from "@/hooks/useToggleDrawer";
import { Button } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemeProvider } from "@/providers/ThemeContext";
// import { SafeAreaView } from '@/components/core/safe-area-view';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSheet = () => {
    console.log("in toggleSheet isSheetOpen", isSheetOpen);
    setIsSheetOpen(!isSheetOpen);
  };

  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ToggleDrawerProvider toggleDrawer={toggleDrawer}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen
              name="page1"
              options={({ navigation }) => ({
                headerShown: true,
                header: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "white",
                      paddingHorizontal: 16,
                    }}
                  >
                    <SafeAreaView
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <IconSymbol
                        name="chevron.left"
                        size={16}
                        color="black"
                        style={{ padding: 8 }}
                        onPress={() => navigation.navigate("(tabs)")}
                      />
                      <ThemedText className="text-center flex-1 py-3">
                        Page 1
                      </ThemedText>
                    </SafeAreaView>
                  </View>
                ),
              })}
            />
            <Stack.Screen
              name="page2"
              options={({ navigation }) => ({
                headerShown: true,
                header: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "white",
                      paddingHorizontal: 16,
                    }}
                  >
                    <SafeAreaView
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <IconSymbol
                        name="chevron.left"
                        size={16}
                        color="black"
                        style={{ padding: 8 }}
                        onPress={() => navigation.navigate("(tabs)")}
                      />
                      <ThemedText className="text-center flex-1 py-3">
                        Submissions
                      </ThemedText>
                    </SafeAreaView>
                  </View>
                ),
              })}
            />
            <Stack.Screen
              name="page3"
              options={({ navigation }) => ({
                headerShown: true,
                header: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "white",
                      paddingHorizontal: 16,
                    }}
                  >
                    <SafeAreaView
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <IconSymbol
                        name="chevron.left"
                        size={16}
                        color="black"
                        style={{ padding: 8 }}
                        onPress={() => navigation.navigate("(tabs)")}
                      />
                      <ThemedText className="text-center flex-1 py-3">
                        Page 3
                      </ThemedText>
                    </SafeAreaView>
                  </View>
                ),
              })}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ToggleDrawerProvider>
        <StatusBar style="auto" />
        <CustomDrawer
          isVisible={isDrawerOpen}
          onClose={toggleDrawer}
          onSheetPress={toggleSheet}
        />
        {isSheetOpen && (
          <SheetModal
            isVisible={isSheetOpen}
            setIsVisible={setIsSheetOpen}
            onClose={toggleSheet}
          >
            <AuthForm />
          </SheetModal>
        )}
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
