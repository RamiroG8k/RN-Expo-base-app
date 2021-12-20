// Common
import React from 'react';
// Components
import { Text, View } from '@components/Themed';
import { TouchableOpacity, StyleSheet } from 'react-native';

const BottomTabNav = ({ state, descriptors, navigation, ...other }) => {
    return (
        <View themed light="#FFF" dark="#000" style={styles.container}>
            {state.routes.map((route, index) => {

                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                
                return (
                    <TouchableOpacity key={index} {...options}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.button}
                        testID={options.tabBarTestID}
                    >
                        <Text>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 20,
        bottom: 16,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-around',
        left: 16,
        padding: 10,
        position: 'absolute',
        right: 16
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'tomato',
        // flex: 1,
        marginHorizontal: 10,
        width: 'auto',
    }
});

export default BottomTabNav;
