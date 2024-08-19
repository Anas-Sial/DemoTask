import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const ACTIVEOPACITY = 0.5;

const COLOR = {
    primary: '#145314',
    green: '#1F7D1F',
    darkGreen: '#1FB11F',
    lightGreen: '#739973',
    bg_Black: '#000000aa',
    black_09: 'rgba(0, 0, 0, 0.09)',
    green_1: 'rgba(31, 125, 31, 0.15)',
    lightBg: 'rgba(116, 116, 128, 0.08)',
    green_2: 'rgba(31, 125, 31, 0.22)',
    green_7: 'rgba(31, 125, 31, 0.7)',
    inputColor: 'rgba(255, 255, 255, 0.5)',
    gray_5: 'rgba(167, 167, 167, 0.5)',
    gray_8: 'rgba(197, 197, 197, 0.8)',
    red: '#E53922',
    white: '#ffffff',
    white_2: '#EFEEEE',
    jetBlack: '#000000',
    transparent: 'transparent',

};

const FONT = {
    Nunito_Regular: 'Nunito-Regular',
    Nunito_Medium: 'Nunito-Medium',
    Nunito_SemiBold: 'Nunito-SemiBold',
    Nunito_Bold: 'Nunito-Bold',
    Nunito_ExtraBold: 'Nunito-Black',
}

const TEXT_STYLE = {
    regular: {
        fontSize: 15,
        fontFamily: FONT.Nunito_Regular,
        color: COLOR.white,
    },
    regular_bold: {
        fontSize: 15,
        fontFamily: FONT.Nunito_Bold,
        color: COLOR.white,
    },
    small_Text: {
        fontSize: 12,
        fontFamily: FONT.Nunito_Regular,
        color: COLOR.white,
    },
    extra_small: {
        fontSize: 10,
        fontFamily: FONT.Nunito_Regular,
        color: COLOR.white,
    },
    title: {
        fontSize: 30,
        fontFamily: FONT.Nunito_Bold,
        color: COLOR.white,
    },
    title2: {
        fontSize: 19,
        fontFamily: FONT.Nunito_SemiBold,
        color: COLOR.white,
    },
    title3: {
        fontSize: 23,
        fontFamily: FONT.Nunito_Bold,
        color: COLOR.white,
    },


};

const commonStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    horizontalView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    verticleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    justifyView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export {
    width, height, wp, hp, ACTIVEOPACITY, FONT, COLOR, TEXT_STYLE, commonStyles
}