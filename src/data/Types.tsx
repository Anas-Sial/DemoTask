import React, { ReactNode } from 'react';
import { ImageStyle, TextStyle, ViewStyle, KeyboardTypeOptions } from "react-native"

export interface textProps {
    children: React.ReactNode
    style?: any
}

export interface layoutProps {
    children: React.ReactNode
    style?: any
}

export interface iconProps {
    onPress?: () => void
    Icon?: ReactNode
    style?: ImageStyle
    disabled?: any
}
export interface scrollProps {
    children?: React.ReactNode
    hasInput?: ReactNode
    horizontal?: boolean
    containerStyle?: ViewStyle
}

export interface imageProps {
    source: any
    style?: any
    contain?: string
    url?: string
}

export interface buttonProps {
    title: string
    style?: ViewStyle
    onPress?: () => void
    activeOpacity?: number
    disabled?: boolean
    textStyle?: Text
}


export interface ImagePickerResponse {
    didCancel?: boolean;
    error?: string;
    assets?: any;
}

export interface headerProps {
    style?: ViewStyle
    title?: string
    onLeftPress?: () => void
    onRightPress?: () => void
    addLeft?: ReactNode
    addRight?: ReactNode
    textStyle?: TextStyle
}

export interface infoButtonProps {
    style?: ViewStyle
    leftTitle?: string
    RightTitle?: string
    onPress?: () => void
    addRight?: ReactNode
    icon?: boolean
    textStyle?: TextStyle
}

export interface sheetProps {
    sheet?: any
}

export interface silderProps {
    value?: any
    onValueChange?: Function
    style?: ViewStyle
    startLabel: string
    EndLabel: string
    maximunValue?: any
    onSlidingComplete?: any
}

export interface model {
    visible: boolean
    onRequestClose: () => void
    onClosePress: () => void
    titleValue: any
    onTitleChange: Function
    descValue: any
    onDescChange: Function
    onSavePress: () => void
}