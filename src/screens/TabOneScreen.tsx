// Common
import * as React from 'react';
import { StyleSheet } from 'react-native';
// Components
import { Text, View } from '@components/Themed';
// Others
import { RootTabScreenProps } from '@helpers/types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
