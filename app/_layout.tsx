import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import '../global.css';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '@/components/ui/Header';
import CustomDrawer from '@/components/ui/CustomDrawer';
import SheetModal from '@/components/ui/SheetModal';
// import { SafeAreaView } from '@/components/core/safe-area-view';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
  }


  const toggleSheet = () => {
    console.log('in toggleSheet isSheetOpen', isSheetOpen);
    setIsSheetOpen(!isSheetOpen);
  }


  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <CustomHeader onMenuPress={toggleDrawer} />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
        <CustomDrawer isVisible={isDrawerOpen} onClose={toggleDrawer} onSheetPress={toggleSheet} />
        <SheetModal isVisible={isSheetOpen} setIsVisible={setIsSheetOpen} onClose={toggleSheet} />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
