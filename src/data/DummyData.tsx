import { IMAGES } from "../assets/images";
import { SCREEN } from "./enums";

export const routes = [
    { title: 'Api Screen', screen: SCREEN.ApiScreen },
    { title: 'CURD Operation', screen: SCREEN.AllTasks },
    { title: 'Image Screen', screen: SCREEN.ImageScreen },
    { title: 'Tab View', screen: SCREEN.TabView },
    { title: 'Track Screen', screen: SCREEN.TrackScreen },
]

export const songList = [
    {
        id: 0,
        image: IMAGES.titleImage,
        time: '1.5 hour',
        songName: 'Your Deepest Sleep',
        songInfo: 'Welcome to this immersive hypnotic journey crafted to guide you into a deep and rejuvenating sleep.',
        url: require('../assets/music/audioSong.mp3')
    }
]

export const instruction =
{
    id: 0,
    image: IMAGES.instructorImage,
    songName: 'Heading',
    songInfo: `Description: on a guided hypnotic journey with the powerful trigger word 'float.' This key seamlessly unlocks deep relaxation, dissolves thoughts, and gently guides you into the tranquil realm of dreams`,
    url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg '
}


