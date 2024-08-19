import { StyleSheet } from 'react-native'
import { COLOR, hp, TEXT_STYLE, commonStyles, wp } from '../../data/StyleGuides'

export const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        marginTop: hp(4.3),
        marginBottom: hp(2.7)
    },
    SongName: {
        ...TEXT_STYLE.title2,
        color: COLOR.darkGreen
    },
    SongDesc: {
        ...TEXT_STYLE.small_Text,
        width: '92%',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: hp(1.2)
    },
    ImageBorder: {
        width: hp(28),
        height: hp(28),
        borderRadius: hp(28) / 2,
        alignSelf: 'center',
        ...commonStyles.center
    },
    TrackImage: {
        width: hp(25),
        height: hp(25),
        borderRadius: hp(25) / 2,
    },
    PlayPauseButton: {
        alignSelf: 'center',
        marginTop: hp(5)
    },
    PlayPauseImage: {
        width: hp(10),
        height: hp(10),
        borderRadius: hp(10) / 2

    },
    SliderContainer: {
        flexDirection: 'row-reverse',
        alignItems: "center",
        width: '92%',
        justifyContent: "space-between",
        marginTop: hp(2.2),
        alignSelf: 'center'
    },
    TimerLabel: {
        ...TEXT_STYLE.small_Text
    }
})