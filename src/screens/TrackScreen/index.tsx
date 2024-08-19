import { Image, ImageBackground, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Header, Label, Layout, Scrollable } from '../../components'
import { LeftSvg } from '../../assets/svgs'
import { COLOR, hp, wp, ACTIVEOPACITY } from '../../data/StyleGuides'
import TrackPlayer, { useProgress, useTrackPlayerEvents, Event, State } from 'react-native-track-player';
import Slider from 'react-native-slider';
import { instruction } from '../../data/DummyData'
import { styles } from './style'
import { IMAGES } from '../../assets/images'

const TrackScreen = (props: any) => {
    const { navigation } = props

    const [isPlaying, setIsPlaying] = useState(false)
    const [trackTitle, setTrackTitle] = useState('')

    const progress = useProgress();

    const handlePlayPause = async () => {
        try {
            if (isPlaying) {
                await TrackPlayer.pause();
            } else {
                await TrackPlayer.play();
            }
            setIsPlaying(!isPlaying);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSeek = (value: any) => {
        TrackPlayer.seekTo(value);
    }

    useEffect(() => {
        const initializePlayer = async () => {
            try {
                await TrackPlayer.setupPlayer();
                await TrackPlayer.add(instruction);
                const playerState = await TrackPlayer.getState();
                if (playerState === State.Playing) {
                    setIsPlaying(true);
                } else if (playerState === State.Buffering) {
                    setIsPlaying(false)
                }
            } catch (error) {
                console.error(error);
            }
        };

        initializePlayer();
    }, []);

    useEffect(() => {
        const checkPlayback = async () => {
            const playerState = await TrackPlayer.getState();
            if (playerState === State.Playing || playerState === State.Buffering) {
                setIsPlaying(true);
            } else {
                setIsPlaying(false);
            }
        };

        checkPlayback();
    }, [progress.position]);

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
        if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
            const track = await TrackPlayer.getTrack(event.nextTrack)
            const { title } = track || {}
            setTrackTitle(title || '')
        }
    })

    const formatTime = (timeInSeconds: any) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    return (
        <Layout>
            <Scrollable>

                {/* Header */}
                <Header title={isPlaying ? 'Track 1' : 'Track'}
                    addLeft={<LeftSvg />}
                    onLeftPress={() => navigation.goBack()} />

                <View style={styles.Container}>
                    <Label style={styles.SongName}>Your Deepest Sleep</Label>
                    <Label style={styles.SongDesc}>Welcome to this immersive hypnotic journey crafted to guide you into a deep and rejuvenating sleep. Through progressive muscle relaxation and potent hypnotic techniques, this experience aims to usher you into a tranquil state for a restful night's sleep.</Label>
                </View>

                <ImageBackground source={IMAGES.borderImage} style={styles.ImageBorder}>
                    <Image source={IMAGES.trackImage} style={styles.TrackImage} />
                </ImageBackground>

                {/* Slider */}
                <View style={styles.SliderContainer} >
                    <Label style={styles.TimerLabel}>{formatTime(progress.duration - progress.position)}</Label>
                    <Slider
                        style={{ width: wp(74) }}
                        minimumValue={0}
                        trackHeight={20}
                        maximumValue={progress.duration}
                        thumbTintColor={COLOR.darkGreen}
                        minimumTrackTintColor={COLOR.darkGreen}
                        maximumTrackTintColor={COLOR.gray_5}
                        thumbStyle={{ width: hp(1.8), height: hp(1.8) }}
                        value={progress.position}
                        onSlidingComplete={handleSeek}
                    />
                    <Label style={styles.TimerLabel}>{formatTime(progress.position)}</Label>
                </View>

                <TouchableOpacity style={styles.PlayPauseButton} onPress={handlePlayPause} activeOpacity={ACTIVEOPACITY}>
                    <Image source={isPlaying ? IMAGES.trackPlay : IMAGES.trackPause} style={styles.PlayPauseImage} />
                </TouchableOpacity>

            </Scrollable>
        </Layout>
    )
}

export default TrackScreen
