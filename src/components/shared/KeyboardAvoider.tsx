import React from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

const KeyboardAvoider = (props: any) => {
    const { children } = props;
    
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default KeyboardAvoider;
