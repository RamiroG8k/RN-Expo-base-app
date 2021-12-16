// Common
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from '@navigation/index';
// Others
import { useCachedResources, useColorScheme } from '@hooks/index';
import { Colors } from '@constants/index';

export default function App() {
    /**
    * Loading util hooks
    * @constant isLoadingComplete {boolean}
    * @constant colorScheme {ColorSchemeName}
    * 
    * isLoadingComplete turns true wheter splash screen and fonts have been loaded.
    * You can import in useCachedResources your own fonts
    */

    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar backgroundColor={Colors[colorScheme].tint} animated />
            </SafeAreaProvider>
        );
    }
}
