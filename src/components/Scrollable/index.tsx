import { ScrollView } from 'react-native'
import React, { memo } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { scrollProps } from '../../data/Types';

const Scrollable = (props: scrollProps) => {
    const { children, hasInput, horizontal, containerStyle } = props

    if (hasInput) {
        return (
            <KeyboardAwareScrollView
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[{ paddingBottom: '4%' }, containerStyle]}
                horizontal={horizontal}
                bounces={false}>
                {children}
            </KeyboardAwareScrollView>
        );
    } else {
        return (
            <ScrollView
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[{ paddingBottom: '4%' }, containerStyle]}
                horizontal={horizontal}
                bounces={false}>
                {children}
            </ScrollView>
        );
    }
};

export default memo(Scrollable)