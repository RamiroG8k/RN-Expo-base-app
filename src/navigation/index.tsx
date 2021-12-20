// Common
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ColorSchemeName, Pressable, Platform } from 'react-native';
// Screens
import { ModalScreen, NotFoundScreen, TabOneScreen, TabTwoScreen } from '@screens/index';
// Data | Services
import { Colors } from '@constants/index';
import useColorScheme from '@hooks/useColorScheme';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '@helpers/types';
// Others
import { FontAwesome } from '@expo/vector-icons';
import LinkingConfiguration from './LinkingConfiguration';
import { BottomTabNav } from '@components/shared/index';

/**
 * Exports main navigation container
 * @constructor
 * @function Navigation 
 * @return { ReactNavigation }
 */
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();
function BottomTabNavigator() {
    // const colorScheme = useColorScheme();

    // const tabNavOptions = (route: string, icon: any) => {
    //     const tabNavigationOptions: BottomTabNavigationOptions = {
    //         tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? icon : `${icon}`} color={color} />,
    //         tabBarLabel: ({ color, focused }) => <Text style={[styles.label, { color }]}>{focused ? route : null}</Text>,
    //     };
    //     return tabNavigationOptions;
    // };

    return (
        <BottomTab.Navigator tabBar={props => <BottomTabNav {...props} />} initialRouteName="TabOne"
            screenOptions={{ headerShown: false }}>
            {/* <BottomTab.Screen name="TabOne" component={TabOneScreen}
                options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
                    title: 'Tab One',
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('Modal')}
                            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
                            <FontAwesome name="info-circle" size={25} color={Colors[colorScheme].text} style={{ marginRight: 15 }} />
                        </Pressable>
                    ),
                })}
            /> */}
            <BottomTab.Screen name="TabOne" component={TabOneScreen} />
            <BottomTab.Screen name="TabTwo" component={TabTwoScreen} />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string; }) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
